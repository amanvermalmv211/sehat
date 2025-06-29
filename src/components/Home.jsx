import img from "../assets/img/about.jpg";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";


const Home = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (

    <section className="relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white min-h-screen flex items-center justify-center px-6">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500 via-transparent to-transparent"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center max-w-7xl mx-auto py-16 gap-12">
        <div className="flex-1 w-full text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-4">
            Welcome to <span className="text-cyan-400" data-aos="zoom-in" data-aos-duration="1000">Sehat</span><br />
            Thinking smart, treating fast.
          </h1>
          <p className="lg:text-lg text-gray-300 mb-6 max-w-xl">
            Empowering doctors with an AI assistant that listens, analyzes, and helps treat patients—anytime, anywhere.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 text-white font-semibold bg-cyan-500 rounded-full shadow-lg hover:bg-cyan-600 transition"
            data-aos="zoom-in-up" data-aos-duration="500"
          >
            Try a Demo
          </a>
        </div>

        <div className="flex-1 w-full">
          <img
            src={img}
            alt="AI Health"
            className="w-full object-cover rounded-full"
            data-aos="zoom-in-up" data-aos-duration="1000"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;