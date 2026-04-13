import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigations from "./pages/navigation/navigation.jsx";
import Footer from "./pages/footer/footer.jsx";
import Home from "./pages/home/home.jsx";
import Rooms from "./pages/rooms/rooms.jsx";
import RoomReserve from "./pages/rooms/roomReserve.jsx";
import ReserveRoomForm from "./pages/rooms/roomReserve-components/reserveRoomForm.jsx";
function App() {
  return (
    <BrowserRouter basename="/Hotel_booking_react_ver">
      <Navigations />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/roomReserve" element={<RoomReserve />} />
        <Route path="/reserveRoomForm" element={<ReserveRoomForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
