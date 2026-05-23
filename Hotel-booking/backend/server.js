require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const paypal = require("@paypal/checkout-server-sdk");

const app = express();

app.use(cors());
app.use(express.json());

/* PayPal Environment */
const environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID,
  process.env.PAYPAL_CLIENT_SECRET
);

const client = new paypal.core.PayPalHttpClient(environment);

/* Create Order */
app.post("/api/orders", async (req, res) => {
  try {
    const request = new paypal.orders.OrdersCreateRequest();

    request.prefer("return=representation");

    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "100.00",
          },
        },
      ],
    });

    const order = await client.execute(request);

    res.json({
      id: order.result.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating order");
  }
});

/* Capture Order + Save to Google Sheet */
app.post("/api/orders/:orderID/capture", async (req, res) => {
  try {
    const { orderID } = req.params;

    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    request.requestBody({});

    const capture = await client.execute(request);

    if (capture.result.status === "COMPLETED") {
      const bookingData = {
        orderId: orderID,
        ...req.body,
        paymentStatus: "COMPLETED",
      };

      await fetch(process.env.GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      res.json({
        paypal: capture.result,
        googleSheet: bookingData,
      });
    } else {
      res.status(400).json({
        error: "Payment not completed",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Capture failed");
  }
});

/* Start server */
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});