import { Route, Routes } from "react-router-dom";
import Navbar from "./conponents/Navbar";
import Home from "./conponents/Home";
import Footer from "./conponents/Footer";

function App() {
  return (
    <div className="App">
      <div className="noise"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
