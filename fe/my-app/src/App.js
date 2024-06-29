import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Event from "./page/Event";
import About from "./page/About";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/Event" element={<Event />} />;
          <Route path="/About" element={<About />} />;
          <Route path="/Login" element={<Login />} />;
          <Route path="/Register" element={<Register />} />;
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
