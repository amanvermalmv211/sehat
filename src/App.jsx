import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Doctors from "./components/Doctors";
import Footer from "./components/Footer";
import Working from "./components/Working";
import Features from "./components/Features";
import About from "./components/About";
import Contact from './components/Contact';
import Solutions from "./components/Solutions";
import PricingPlans from "./components/PricingPlan";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="working">
          <Working />
        </div>

        <div id="features">
          <Features />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="solutions">
          <Solutions />
        </div>

        <div id="pricingplans">
          <PricingPlans />
        </div>

        <div id="doctors">
          <Doctors />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;