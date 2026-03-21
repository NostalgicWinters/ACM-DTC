function AboutUsCards({ number, title, displayImage, content }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-75 hover:shadow-xl transition duration-300">
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-gray-400 text-sm font-medium">
          {String(number).padStart(2, "0")}
        </span>
        <h3 className="text-lg font-semibold uppercase">
          {title}
        </h3>
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