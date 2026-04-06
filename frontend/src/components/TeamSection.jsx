import m1 from "../assets/Team/Membership.png";
import m2 from "../assets/Team/President.jpg";
import m3 from "../assets/Team/Secretary.png";
import m4 from "../assets/Team/Vice-president.png";
import m5 from "../assets/Team/Webmaster.jpg"
import m6 from "../assets/Team/event.png"
import m7 from "../assets/Team/event2.png"
import m8 from "../assets/Team/social1.png"
import m9 from "../assets/Team/social2.png"
import m10 from "../assets/Team/socialsomething.png"
import m11 from "../assets/Team/frontend.png"
import { useState, useRef } from "react";

function TeamSection() {
  const members = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11];

  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [currentImg, setCurrentImg] = useState(null);
  const [prevImg, setPrevImg] = useState(null);

  const lastChangeRef = useRef(0);

  const handleMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY });

    const now = Date.now();

    if (now - lastChangeRef.current > 200) {
  let random;
  do {
    random = members[Math.floor(Math.random() * members.length)];
  } while (random === currentImg);

  setPrevImg(currentImg);   // push current to back
  setCurrentImg(random);    // new front image
  lastChangeRef.current = now;
}
  };

  return (
    <section
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMove}
      className="relative hidden md:block"
    >

      {/* TEXT CONTENT */}
      <div className="flex flex-col justify-center items-center h-screen w-screen text-center">
        <header className="text-7xl font-bold">
          MEET OUR <span className="text-blue-600">AMAZING</span><br />
          MENTOR AND TEAM
        </header>

        <p className="text-3xl font-bold mt-4">
          Still faces, Infinite Stories
        </p>
      </div>

      {/* BACK IMAGE */}
{hover && prevImg && (
  <img
    src={prevImg}
    alt="team"
    className="pointer-events-none fixed w-80 h-100 object-cover rounded-xl shadow-xl
               transition-all duration-300 opacity-90 scale-95"
    style={{
      left: pos.x + 35,
      top: pos.y + 35,
      transform: "translate(-50%, -50%)",
      zIndex: 99,
    }}
  />
)}

{/* FRONT IMAGE */}
{hover && currentImg && (
  <img
    key={currentImg}
    src={currentImg}
    alt="team"
    className="pointer-events-none fixed w-80 h-100 object-cover rounded-xl shadow-2xl
               transition-all duration-200 ease-out"
    style={{
      left: pos.x + 20,
      top: pos.y + 20,
      transform: "translate(-50%, -50%)",
      zIndex: 100,
    }}
  />
)}

    </section>
  );
}

export default TeamSection;