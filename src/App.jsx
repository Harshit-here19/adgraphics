import "./App.css";
import Navbar from "./components/Navbar/Index";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import Portfolio from "./Pages/portfolioPage";
import ContactUs from "./Pages/contactUs";
import Text from "./Pages/text";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/text" element={<Text />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
