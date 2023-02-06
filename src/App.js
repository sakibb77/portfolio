import { Route, Routes } from "react-router-dom";
import Navbar from "./conponents/Navbar";
import Home from "./conponents/Home";
import Footer from "./conponents/Footer";
import Socials from "./conponents/Socials";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import CustomCursor from "./conponents/CustomCursor";
import { useRef } from "react";
import { useCustomCursor } from "./hooks/useCustomCursor";

function App() {
  useSmoothScroll();

  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);

  useCustomCursor(innerCursorRef, outerCursorRef);

  return (
    <div className="App">
      <div className="noise"></div>
      <CustomCursor
        innerCursorRef={innerCursorRef}
        outerCursorRef={outerCursorRef}
      />
      <Navbar />
      <Socials />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Navbar footerNav />
      <Footer />
    </div>
  );
}

export default App;
