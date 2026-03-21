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
    <div className="bg-white min-h-screen">
      <NavBar />

      {/* Introduction */}
      <div className="flex flex-row justify-between items-center p-4">
        <img src={robotRight} className="w-32 md:w-48 object-contain" />
        <div className="flex items-center flex-col gap-8 relative">
          <header className="text-5xl font-bold text-center leading-tight">
            Association For Computing
            <br />
            Machinery
          </header>
          <span className="block h-0.5 bg-black w-[80%]" />
          <p className="px-10 text-center text-gray-600 max-w-2xl leading-relaxed">
            The Association for Computing Machinery (ACM) is an international
            learned society for computing. Founded in 1947, it is the world's
            largest scientific and educational computing society — a not-for-profit
            professional membership group with over 100,000 members worldwide.
          </p>
        </div>
        <img src={robotLeft} className="w-32 md:w-48 object-contain" />
      </div>

      {/* About Us */}
      <section className="bg-gray-50 mt-16 py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Text Block */}
          <div className="flex flex-col gap-6">

            <h2 className="text-5xl font-bold tracking-tight leading-none">
              About Us
            </h2>

            <p className="text-gray-500 text-base leading-relaxed max-w-sm">
              DTC ACM Student Chapter believes in providing a healthy environment
              where creativity and imagination can flourish. Through collaboration
              and engagement in a plethora of technical activities and projects, we
              envision to build a community of like-minded people who love to code,
              collaborate, and have fun!
            </p>
          </div>

          {/* Video Card */}
          <div className="relative group">
            
            <div className="relative bg-white rounded-2xl overflow-hidden aspect-video border-16 border-gray-200 transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/iik25wqIuFo"
                title="DTC ACM Chapter Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </section>

          <section>
              <div className="flex flex-col items-center justify-center">
                  <header className="text-5xl font-bold"><span className="text-blue-600">DTC</span> ACM STUDENT CHAPTER</header>
                  <span className="block h-0.5 bg-black w-[70%] mt-8" />

                  <div className="flex gap-8">
                    {cards.map((card)=>(
                        <AboutUsCards title={card.title} number={card.number} displayImage={card.image} content={card.content} />
                    ))}
                  </div>
              </div>
          </section>

          <div>
            <img className="p-8" src={wallpaper} />
          </div>

          <Footer />

    </div>
  );
}

export default About;