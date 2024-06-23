import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";
import dish4 from "../assets/dish4.jpg";

const Items = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section
      id="menu"
      className="w-full h-fit bg-slate-950 px-12 lg:px-20 lg:py-24 py-20 flex flex-col justify-center items-center gap-10"
    >
      <h1
        data-aos="zoom-in"
        className="text-white font-bold text-6xl text-center"
      >
        View Our Tasty <span className="text-green-500 italic">Foods</span>
      </h1>
      <p
        data-aos="slide-up"
        className="text-white font-semibold text-xl text-center"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        ipsum!
      </p>
      <div
        id="grids"
        className="flex flex-col lg:flex-row justify-center items-center flex-wrap gap-10"
      >
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4 bg-slate-900 pb-10 lg:w-2/5 w-full rounded-[150px]"
        >
          <img src={dish1} alt="dish image" />
          <div className="w-full flex flex-col justify-center items-center gap-4 px-10">
            <h1 className="text-white font-bold text-2xl">HOT BURGER</h1>
            <p className="text-white font-semibold text-lg text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              sapiente.
            </p>
            <button className="bg-green-500 px-8 py-4 rounded-full hover:bg-orange-500 hover:text-black font-bold mt-2">
              ORDER NOW
            </button>
          </div>
        </div>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4 bg-slate-900 pb-10 lg:w-2/5 w-full rounded-[150px]"
        >
          <img src={dish2} alt="dish image" />
          <div className="w-full flex flex-col justify-center items-center gap-4 px-10">
            <h1 className="text-white font-bold text-2xl">HOT BURGER</h1>
            <p className="text-white font-semibold text-lg text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              sapiente.
            </p>
            <button className="bg-green-500 px-8 py-4 rounded-full hover:bg-orange-500 hover:text-black font-bold mt-2">
              ORDER NOW
            </button>
          </div>
        </div>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4 bg-slate-900 pb-10 lg:w-2/5 w-full rounded-[150px]"
        >
          <img src={dish3} alt="dish image" />
          <div className="w-full flex flex-col justify-center items-center gap-4 px-10">
            <h1 className="text-white font-bold text-2xl">HOT BURGER</h1>
            <p className="text-white font-semibold text-lg text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              sapiente.
            </p>
            <button className="bg-green-500 px-8 py-4 rounded-full hover:bg-orange-500 hover:text-black font-bold mt-2">
              ORDER NOW
            </button>
          </div>
        </div>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4 bg-slate-900 pb-10 lg:w-2/5 w-full rounded-[150px]"
        >
          <img src={dish4} alt="dish image" />
          <div className="w-full flex flex-col justify-center items-center gap-4 px-10">
            <h1 className="text-white font-bold text-2xl">HOT BURGER</h1>
            <p className="text-white font-semibold text-lg text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              sapiente.
            </p>
            <button className="bg-green-500 px-8 py-4 rounded-full hover:bg-orange-500 hover:text-black font-bold mt-2">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Items;
