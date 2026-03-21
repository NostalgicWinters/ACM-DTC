import { useEffect, useRef, useState } from "react";

function AboutUsCards({ number, title, displayImage, content }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        bg-white rounded-2xl shadow-md p-4 w-75
        transition-all duration-700 ease-out
        ${visible ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"}
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-gray-400 text-sm font-medium">
          {number}
        </span>
        <h3 className="text-lg font-semibold uppercase">{title}</h3>
      </div>

      <hr className="mb-3 border-gray-200" />

      {/* Image */}
      <div className="w-full h-40 mb-3 overflow-hidden rounded-lg">
        <img
          src={displayImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {content}
      </p>
    </div>
  );
}

export default AboutUsCards;