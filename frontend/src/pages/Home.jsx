import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CursorGrid from "../components/CursorGrid";
import TeamSection from "../components/TeamSection";

import techguy from "../assets/techguy.png";
import insta from "../assets/Icons/instagram.svg";
import linkedin from "../assets/Icons/Linked-white.svg";
import x from "../assets/Icons/X.svg";
import group from "../assets/AboutUsPage/wallpaper.jpg";

import event1 from "../assets/Events/event1.png";
import event2 from "../assets/Events/event2.png";
import event3 from "../assets/Events/event3.png";
import event4 from "../assets/Events/event4.png";

import president from "../assets/Team/President.jpg";

import powerbi from "../assets/pdfs/powerbi.png";
import excel from "../assets/pdfs/excel.png";
import sixsigma from "../assets/pdfs/sixsigma.png";
import sql from "../assets/pdfs/sql.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const events = [
    { image: event1 },
    { image: event2 },
    { image: event3 },
    { image: event4 },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-100 to-purple-100 min-h-screen overflow-x-hidden">
      <CursorGrid />
      <NavBar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16 flex flex-col md:flex-row items-center gap-10">
        <div
          className={`max-w-xl flex flex-col gap-6 transition-all duration-[1500ms] ${
            show ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-md w-fit">
            INSPIRING THE FUTURE OF COMPUTING AT
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
            ACM DELHI TECHNICAL CAMPUS
          </h1>

          <p className="text-gray-700 text-sm sm:text-base">
            DTC ACM Student Chapter believes in providing a{" "}
            <span className="text-blue-600 font-medium">
              healthy environment
            </span>{" "}
            where creativity and imagination can flourish.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
              Join Us
            </button>
            <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg">
              Know More
            </button>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <span className="text-sm text-gray-600">Connect</span>
            <div className="flex gap-3">
              <img src={linkedin} className="w-5" />
              <img src={x} className="w-5" />
              <img src={insta} className="w-5" />
            </div>
          </div>
        </div>

        <img
          src={techguy}
          className={`w-full max-w-sm sm:max-w-md md:max-w-xl transition-all duration-[1500ms] ${
            show ? "opacity-100" : "opacity-0"
          }`}
        />
      </section>

      {/* ABOUT ACM */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="max-w-xl flex flex-col gap-5">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              What is <span className="text-blue-600">ACM</span>?
            </h2>

            <p className="text-gray-600 text-sm sm:text-base">
              ACM is a global computing organization offering resources,
              networking, and opportunities.
            </p>

            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Projects & collaboration</li>
              <li>Networking opportunities</li>
              <li>Hackathons</li>
              <li>Skill development</li>
            </ul>
          </div>

          <div className="relative w-full flex justify-center">
            <div className="hidden md:block absolute left-128 -top-16 w-60 h-120 bg-purple-300 rounded-3xl"></div>
            <img
              src={group}
              className="relative z-10 w-full max-w-md rounded-xl"
            />
          </div>
        </div>
      </section>

      <TeamSection />

      {/* EVENTS */}
      <section>
                <header className="text-5xl font-bold text-center">Check Out Our Recent Events</header>
                <div className="w-full m-4 sm:m-16 border-y-2 py-6 ">
                    <Swiper
                        modules={[Autoplay]}
                        loop
                        slidesPerView={3}
                        spaceBetween={16}
                        speed={6000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        allowTouchMove={false}
                        className="h-50 md:h-75 lg:h-100"
                    >
                        {events.map((event, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={event.image}
                                    alt={`slide-${index}`}
                                    className="w-full h-full object-cover"
                                />

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

      {/* PRESIDENT */}
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
          PRESIDENT
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-[65%] min-h-[200px] bg-gray-300 rounded-2xl"></div>

          <img
            src={president}
            className="w-48 sm:w-60 md:w-72 rounded-lg"
          />
        </div>
      </section>

      {/* RESOURCES */}
      <section className="bg-gray-200 py-16 px-4">
  <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
    RESOURCES
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

    {/* POWER BI */}
    <a href="https://your-powerbi-link.com" target="_blank">
      <div className="relative group overflow-hidden rounded-xl">
        <img
          src={powerbi}
          className="w-full h-52 object-cover transition duration-300 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition">
          <p className="text-white text-lg font-semibold">POWER BI</p>
        </div>
      </div>
    </a>

    {/* RIGHT SIDE */}
    <div className="flex flex-col gap-4 md:col-span-2">

      {/* SQL */}
      <a href="https://your-sql-link.com" target="_blank">
        <div className="relative group overflow-hidden rounded-xl">
          <img
            src={sql}
            className="w-full h-40 object-cover transition duration-300 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition">
            <p className="text-white text-lg font-semibold">SQL Cheatsheet</p>
          </div>
        </div>
      </a>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* SIX SIGMA */}
        <a href="https://your-sixsigma-link.com" target="_blank">
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src={sixsigma}
              className="w-full h-40 object-cover transition duration-300 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition">
              <p className="text-white text-lg font-semibold">SIX SIGMA Guidance</p>
            </div>
          </div>
        </a>

        {/* EXCEL */}
        <a href="https://your-excel-link.com" target="_blank">
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src={excel}
              className="w-full h-40 object-cover transition duration-300 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition">
              <p className="text-white text-lg font-semibold"> Top 50 EXCEL Questions</p>
            </div>
          </div>
        </a>

      </div>
    </div>
  </div>
</section>

      {/* NEWSLETTER */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-xl mx-auto flex flex-col gap-6 items-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-center">
            Subscribe
          </h2>

          <div className="w-full flex flex-col sm:flex-row gap-3 bg-gray-100 p-3 rounded-lg">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 px-4 py-2 rounded-md"
            />
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:cursor-pointer hover:scale-110">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;