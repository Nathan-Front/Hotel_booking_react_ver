import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigations from "./assets/pages/navigation/navigation.jsx";
import Footer from "./assets/pages/footer/footer.jsx";
import Home from "./assets/pages/home/home.jsx";
function App() {
  return (
    <BrowserRouter basename="/Hotel_booking_react_ver/">
      <Navigations />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
