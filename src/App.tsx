import { Route, Routes } from "react-router-dom";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
