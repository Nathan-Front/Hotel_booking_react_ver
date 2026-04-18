
export function checkAvailable(startDate, endDate){
   // Example: already booked date ranges
  const bookedDates = [
    { start: "2026-05-10", end: "2026-05-15" },
    { start: "2026-05-20", end: "2026-05-25" }
  ];

  const requestedStart = new Date(startDate);
  const requestedEnd = new Date(endDate);

  for (let booking of bookedDates) {
    const bookedStart = new Date(booking.start);
    const bookedEnd = new Date(booking.end);

    // Check if dates overlap
    if (
      requestedStart < bookedEnd &&
      requestedEnd > bookedStart
    ) {
      return false; // Not available
    }
  }

  return true; // Available
}