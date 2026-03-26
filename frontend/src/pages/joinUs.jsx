import NavBar from "../components/NavBar";
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";

import acmLogo from "../assets/ACMLogo.png";
import heroImg from "../assets/hero.png";
import CursorGrid from "../components/CursorGrid";

const JoinUs = () => {
  return (
    <>
      <style>{`
        .joinus-page * {
          box-sizing: border-box;
          font-family: "Segoe UI", sans-serif;
        }

        .joinus-page {
          min-height: 100vh;
          background: #fff;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
        }

        .joinus-content {
          max-width: 1400px;
          margin: auto;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex: 1;
          gap: 40px;
        }

        .hero-container {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-container img {
          width: 100%;
          max-width: 420px;
          height: auto;
          object-fit: contain;
        }

        .joinus-card {
          width: 100%;
          max-width: 400px;
          background: linear-gradient(180deg, #ffffff, #999999);
          border-radius: 20px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .card-logo {
          width: 140px;
          height: auto;
        }

        .card-title {
          color: #3374cc;
          font-size: 12px;
          font-weight: 600;
          text-align: center;
        }

        .joinus-btn {
          width: 100%;
          height: 48px;
          border-radius: 30px;
          border: none;
          background: rgba(255, 255, 255, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .joinus-btn:hover {
          background: rgba(255, 255, 255, 0.55);
          transform: scale(1.03);
        }

        .joinus-btn span {
          font-size: 16px;
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .joinus-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .hero-container img {
            max-width: 320px;
          }
        }

        /* MOBILE */
        @media (max-width: 640px) {
          .joinus-content {
            padding: 16px;
            gap: 30px;
          }

          .hero-container img {
            max-width: 260px;
          }

          .joinus-card {
            padding: 16px;
            border-radius: 16px;
          }

          .card-logo {
            width: 110px;
          }

          .joinus-btn {
            height: 44px;
            font-size: 13px;
          }
        }
      `}</style>

      <div className="joinus-page">
        <CursorGrid />
        <NavBar />

        <div className="joinus-content">
          {/* HERO IMAGE */}
          <div className="hero-container">
            <img src={heroImg} alt="Robot" />
          </div>

          {/* CARD */}
          <div className="joinus-card">
            <img src={acmLogo} alt="ACM" className="card-logo" />
            <p className="card-title">ACM DELHI TECHNICAL CAMPUS</p>

            <ActionButton
              text="Whatsapp"
              icon={<FaWhatsapp />}
              link="https://wa.me/XXXXXXXXXX"
            />

            <ActionButton
              text="LinkedIn"
              icon={<FaLinkedinIn />}
              link="https://www.linkedin.com/company/acm-student-chapter-delhi-technical-campus-ggsipu/posts/?feedView=all"
            />

            <ActionButton
              text="Instagram"
              icon={<FaInstagram />}
              link="https://www.instagram.com/acm_dtc/"
            />

            <ActionButton
              text="X"
              icon={<FaXTwitter />}
              link="https://twitter.com/acm"
            />

            <ActionButton
              text="Linktree"
              icon={<SiLinktree />}
              link="https://linktr.ee/acm"
            />

            <ActionButton
              text="Become an ACM Member"
              link="https://www.acm.org/membership"
            />
          </div>
        </div>
      </div>
    </>
  );
};

/* 🔹 Reusable Button */
const ActionButton = ({ text, icon, link }) => (
  <button
    className="joinus-btn"
    onClick={() => window.open(link, "_blank")}
  >
    {icon && <span>{icon}</span>}
    {text}
  </button>
);

export default JoinUs;