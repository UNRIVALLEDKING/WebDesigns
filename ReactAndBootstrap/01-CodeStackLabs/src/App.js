import { useEffect, useState } from "react";
import AboutUs from "./AboutUs/AboutUs";
import "./App.css";
import HomeCarousel from "./Components/Carousels/HomeCarousel/HomeCarousel";
import Footer from "./Components/Footer/Footer";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import OurServices from "./Services/OurServices";
import Technologies from "./Technologies/Technologies";
import TermsAndServices from "./Term_and_Services/TermsAndServices";
// import Nav from "./Components/Nav/Nav";

function App() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    window.gtag("send", "page_view", {
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }, []);

  return (
    <>
      <HomeCarousel />
      <Home />
      <OurServices />
      <Technologies />
      <Projects />
      <AboutUs setModal={() => setModal((toggle) => !toggle)} />
      <div
        id="myModal"
        style={modal ? { display: "block" } : { display: "none" }}
        class="modal"
      >
        {/* Modal Content */}
        <div class="modal-content">
          <span onClick={() => setModal((modal) => !modal)} class="close">
            &times;
          </span>
          <TermsAndServices setModal={setModal} />
        </div>
      </div>
      <hr style={{ border: "1px solid white" }} className="my-0" />

      <Footer setModal={setModal} />
    </>
  );
}

export default App;
