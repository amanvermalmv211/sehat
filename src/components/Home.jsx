import img from "../assets/img/about.jpg";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const gridSize = 40;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(0, 255, 255, 0.15)";
      ctx.lineWidth = 1;

      for (let y = 0; y < canvas.height; y += gridSize) {
        for (let x = 0; x < canvas.width; x += gridSize) {
          const pulse = Math.sin((x + y + t) * 0.02) * 4;
          ctx.beginPath();
          ctx.rect(x + pulse, y + pulse, gridSize - 2, gridSize - 2);
          ctx.stroke();
        }
      }

      t += 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="relative h-screen flex items-center p-8 pt-12 overflow-hidden bg-black text-cyan-300 font-sans">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

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
    </div>
  );
};

export default Home;