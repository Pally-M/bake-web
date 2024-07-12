import "../App.css";
import About from "./Components/About.jsx";
import Footer from "./Components/Footer.jsx";
import Testimonials from "./Components/Testimonials.jsx";


function Aboutpage() {
    return (
        <div className="App">
          <About />
        <Testimonials/>
          <Footer />
        </div>
      );
};


export default Aboutpage;