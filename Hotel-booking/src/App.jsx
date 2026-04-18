import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import ScrollToTop from "./assets/script/index.js";
import Navigations from "./pages/navigation/navigation.jsx";
import MobileNavigation from "./pages/navigation/mobileNavigation.jsx";
import Footer from "./pages/footer/footer.jsx";
import Home from "./pages/home/home.jsx";
import Rooms from "./pages/rooms/rooms.jsx";
import RoomReserve from "./pages/rooms/roomReserve.jsx";
import ReserveRoomForm from "./pages/rooms/roomReserve-components/reserveRoomForm.jsx";
import About from "./pages/about/about.jsx";
import Contact from "./pages/contact/contact.jsx";
function App() {
  return (
    <HashRouter>
      <Navigations />
      <MobileNavigation />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/roomReserve" element={<RoomReserve />} />
        <Route path="/reserveRoomForm" element={<ReserveRoomForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
