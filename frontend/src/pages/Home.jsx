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
import vpImage from "../assets/Team/Vice-president.png";
import secretaryImage from "../assets/Team/Secretary.png"

import powerbi from "../assets/resources/resource2.jpg";
import ai from "../assets/resources/resource1.jpg";
import web from "../assets/resources/resource4.jpg";
import dsa from "../assets/resources/resource3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { NavLink } from "react-router";

import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const teamMembers = [
  {
    name: "Chairperson",
    image: president,
    description: "Join us: where ideas are big, budgets are small, and confidence is completely unjustified",
  },
  {
    name: "Vice President",
    image: vpImage,
    description: "We aim for excellence—but we’ll settle for passing attendance and decent chai.",
  },
  {
    name: "Secretary",
    image: secretaryImage,
    description: "This society runs on passion, chaos, and last-minute WhatsApp messages.",
  },
];

const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const resourcesData = [
    {
      title: "Power BI Interview Questions",
      subtitle: "PDF • Interview Prep",
      image: powerbi,
      link: "/resources-pdf/resources_🌟 Power BI Interview Questions and Answers 🌟.pdf",
    },
    {
      title: "Power BI Resources",
      subtitle: "PDF • Analytics",
      image: ai,
      link: "/resources-pdf/resources_Power BI Resources.pdf",
    },
    {
      title: "SQL Cheatsheet",
      subtitle: "PDF • Databases",
      image: web,
      link: "/resources-pdf/resources_SQL_Cheatsheet.pdf",
    },
    {
      title: "Top 50 Excel Questions",
      subtitle: "PDF • Productivity",
      image: dsa,
      link: "/resources-pdf/resources_Top 50 Excel questions .pdf",
    },
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
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:cursor-pointer">
                <NavLink to="/joinus" >Join Us</NavLink>
              
            </button>
            <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg cursor-pointer">
                <NavLink to="/about" >Know More</NavLink>
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

      {/* Core Team */}
      <section className="bg-gray-100 py-16 px-4 relative">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        CORE TEAM
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 relative">
        
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-3 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Content */}
        <div className="w-full md:w-[65%] min-h-[200px] bg-gray-300 rounded-2xl flex flex-col justify-center items-center p-6">
          <h3 className="text-2xl font-semibold mb-2">
            {teamMembers[index].name}
          </h3>
          <p className="text-gray-700 text-center italic">
            "
            {teamMembers[index].description}
            "
          </p>
        </div>

        {/* Image */}
        <img
          src={teamMembers[index].image}
          className="w-48 sm:w-60 md:w-72 rounded-lg transition-all duration-300"
          alt={teamMembers[index].name}
        />

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-3 rounded-full"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>

      <section className="resources-page">
        <h1 className="heading">
          <span>Curated</span> resources to power your <br /> tech journey
        </h1>

        <div className="resources-container">
          {resourcesData.map((item, index) => (
            <div key={index} className="resource-card">
              <img src={item.image} alt={item.title} />

              {/* INFO BAR — ONLY CLICKABLE PART */}
              <div
                className="resource-info"
                onClick={() => window.open(item.link, "_blank")}
              >
                <div className="white-dot"></div>

                <div className="text-group">
                  <p className="resource-title">{item.title}</p>
                  <p className="resource-subtitle">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
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

      {/* ================= STYLES ================= */}
      <style>{`
        .resources-page {
          min-height: 100vh;
          padding: 80px 5%;
          background: #ffffff;
          text-align: center;
        }

        .heading {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 60px;
          line-height: 1.2;
        }

        .heading span {
          color: #0b5ed7;
        }

        .resources-container {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 24px;
          flex-wrap: wrap;
        }

        /* ================= CARD ================= */
        .resource-card {
          width: 150px;
          height: 340px;
          border-radius: 70px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          background: #eaeaea;
          transition: all 0.45s ease;
        }

        .resource-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ================= INFO BAR ================= */
        .resource-info {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
          cursor: pointer;
        }

        /* WHITE DOT — ALWAYS VISIBLE */
        .white-dot {
          width: 14px;
          height: 14px;
          background: #ffffff;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* TEXT — HIDDEN BY DEFAULT */
        .text-group {
          opacity: 0;
          transform: translateX(-6px);
          transition: all 0.3s ease;
          text-align: left;
        }

        /* ================= HOVER EXPANSION ================= */
        .resource-card:hover {
          width: 370px;
          height: 370px;
          border-radius: 40px;
          transform: translateY(-6px);
        }

        .resource-card:hover .text-group {
          opacity: 1;
          transform: translateX(0);
        }

        .resource-title {
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.2;
        }

        .resource-subtitle {
          font-size: 12px;
          color: #d1d1d1;
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 768px) {
          .resources-container {
            flex-direction: column;
            align-items: center;
          }

          .resource-card {
            width: 98%;
            height: 270px;
            border-radius: 28px;
          }

          .resource-card:hover {
          width: 98%;
          height: 290px;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;