import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigations from "./pages/navigation/navigation.jsx";
import Footer from "./pages/footer/footer.jsx";
import Home from "./pages/home/home.jsx";
import Rooms from "./pages/rooms/rooms.jsx";
function App() {
  return (
    <BrowserRouter basename="/Hotel_booking_react_ver">
      <Navigations />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
