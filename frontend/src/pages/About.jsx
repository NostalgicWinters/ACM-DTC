import React from "react";
import NavBar from "../components/NavBar";
import robotRight from "../assets/robotRight.png";
import robotLeft from "../assets/robotLeft.png";
import AboutUsCards from "../components/AboutUsCards";
import mission from "../assets/AboutUsPage/1.jpg"
import vision from "../assets/AboutUsPage/2.png"
import plan from "../assets/AboutUsPage/3.jpg"
import wallpaper from "../assets/AboutUsPage/wallpaper.jpg"
import Footer from "../components/Footer";
import CursorGrid from "../components/CursorGrid";

function About() {

    const cards = [
        {
            number: "01",
            image: mission,
            title: "Our Mission",
            content: "To advance the field of computing and empower individuals within it, promoting innovation and excellence in computing education, research, and practice, while fostering a global community that collaborates, shares knowledge, and addresses critical societal challenges."
        },
        {
            number: "02",
            image: vision,
            title: "Our Vision",
            content: "To be a leading global community that empowers computing professionals, students and researchers by driving technological innovations, bridging acedemia and industry, and fostering inclusivity. We aim to create a collaborative environment through responsible and transformative technology."
        },
        {
            number: "03",
            image: plan,
            title: "Our Plan",
            content: "To achieve our goals we will organise, educational and networking events and publish a platform to share knowledge, build strategic partnerships and support student development. We aim to foster a thriving ecosystem where computing professionals can excel and students can reach their full potential."
        }
    ]

    return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <CursorGrid />
      <NavBar />

      {/* INTRO */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8 gap-6">

        <img src={robotRight} className="w-24 sm:w-32 md:w-40 object-contain" />

        <div className="flex flex-col items-center gap-6 text-center max-w-2xl">
          <header className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Association For Computing
            <br />
            Machinery
          </header>

          <span className="block h-0.5 bg-black w-3/4" />

          <p className="px-2 sm:px-6 text-gray-600 text-sm sm:text-base">
            The Association for Computing Machinery (ACM) is an international learned society for computing. It was founded in 1947 and is the world's largest scientific and educational computing society. It is a not-for-profit professional membership group. Its membership is more than 100,000 as of 2011. Its headquarters are in New York City. The ACM is an umbrella organization for academic and scholarly interests in computer science.
          </p>
        </div>

        <img src={robotLeft} className="w-24 sm:w-32 md:w-40 object-contain" />
      </div>

      {/* ABOUT SECTION */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              About Us
            </h2>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              DTC ACM Student Chapter believes in providing a healthy environment where creativity and imagination can flourish. Through collaboration and engagement in a plethora of technical activities and projects, we envision to build a community of like-minded people who love to code, collaborate and have fun!

            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl overflow-hidden aspect-video border-8 sm:border-12 md:border-16 border-gray-200">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/iik25wqIuFo"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="py-12 px-4">
        <div className="flex flex-col items-center gap-6">

          <header className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
            <span className="text-blue-600">DTC</span> ACM STUDENT CHAPTER
          </header>

          <span className="block h-0.5 bg-black w-2/3 sm:w-1/2" />

          {/* RESPONSIVE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {cards.map((card, index) => (
              <AboutUsCards
                key={index}
                title={card.title}
                number={card.number}
                displayImage={card.image}
                content={card.content}
              />
            ))}
          </div>

        </div>
      </section>

      {/* MEMBERSHIP SECTION */}
      <section className="relative w-full min-h-[70vh] sm:min-h-screen overflow-hidden my-8">

        <img
          src={wallpaper}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENT BOX */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">

          <div className="bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-xl">

            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              BECOME A MEMBER OF ACM
            </h2>

            <div className="h-0.5 bg-white/40 mb-4" />

            <p className="text-white text-xs sm:text-sm mb-5 leading-relaxed">
              A vast network of nearly 100,000 highly dedicated student and professional peers...
            </p>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg">
              Join ACM
            </button>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;