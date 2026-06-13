import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import ExitPopup from "./components/ExitPopup";
import Home from "./pages/Home";
import HairPatch from "./pages/HairPatch";
import HairWig from "./pages/HairWig";
import HairTransplant from "./pages/HairTransplant";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hair-patch" element={<HairPatch />} />
            <Route path="/hair-wig" element={<HairWig />} />
            <Route path="/hair-transplant" element={<HairTransplant />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
        <ExitPopup />
      </div>
    </HashRouter>
  );
}
