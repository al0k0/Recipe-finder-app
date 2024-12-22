import React from "react";

const About = () => {
  const features = [
    {
      icon: "🍳",
      title: "Explore Recipes",
      description: "Discover meals from a variety of cuisines worldwide. Whether you love Italian pasta or Indian curries, we've got something for you.",
      details: "Browse curated categories and find recipes tailored to your taste and preferences. New recipes added weekly!",
      bg: "bg-yellow-600 hover:bg-yellow-400 border-b-2 border-yellow-400",
    },
    {
      icon: "📂",
      title: "Save Favorites",
      description: "Bookmark your favorite recipes and access them anytime with just one click.",
      details: "Your saved recipes are stored securely and synced across devices. Never lose track of your go-to meals!",
      bg: "bg-yellow-600 hover:bg-orange-400 border-b-2 border-orange-400",
    },
    {
      icon: "📝",
      title: "Step-by-Step Guides",
      description: "Detailed instructions with images to guide you through every step of the cooking process.",
      details: "From novice to expert, our guides ensure a hassle-free cooking experience with easy-to-follow steps.",
      bg: "bg-yellow-600 hover:bg-green-400 border-b-2 border-green-400",
    },
    {
      icon: "🔍",
      title: "Custom Search",
      description: "Search for recipes by ingredients, cooking time, or difficulty level.",
      details: "Filter results by dietary preferences, cuisine type, or calorie count to find your perfect meal match.",
      bg: "bg-yellow-600 hover:bg-blue-400 border-b-2 border-blue-400",
    },
    {
      icon: "🥗",
      title: "Nutritional Info",
      description: "Get calorie counts and other nutritional information for every recipe.",
      details: "Stay on track with your health goals by knowing what goes into your meals. Perfect for meal planning!",
      bg: "bg-yellow-600 hover:bg-red-400 border-b-2 border-red-400",
    },
    {
      icon: "📤",
      title: "Share with Friends",
      description: "Easily share your favorite recipes with friends and family.",
      details: "Post on social media or send a direct link so everyone can enjoy your culinary discoveries.",
      bg: "bg-yellow-600 hover:bg-purple-400 border-b-2 border-purple-400",
    },
  ];

  return (
    <div className="  bg-gradient-to-b from-yellow-400 to-yellow-600 ">
      <div className="flex flex-col items-center px-6 animate-fadeIn ">
      {/* Title */}
      <div className="py-5 bg-yellow-400 shadow-2xl w-full flex flex-col justify-center items-center">
  {/* Title */}
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-900 text-center">
    About Recipe Finder
  </h1>

  {/* Introduction */}
  <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl text-center px-4 sm:px-6">
    Recipe Finder is designed to help food enthusiasts discover, cook, and share amazing recipes effortlessly. Here's why you'll love using it:
  </p>
</div>


      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg text-center transition transform duration-300 ease-in-out hover:scale-105 ${feature.bg}`}
          >
            {/* Icon */}
            <div className="text-5xl mb-4">{feature.icon}</div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-yellow-900 mb-2">{feature.title}</h2>

            {/* Description */}
            <p className="text-gray-800 mb-2">{feature.description}</p>

            {/* Details */}
            <p className="text-sm text-gray-700">{feature.details}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="py-12">
        <a
          href="/home"
          className="bg-yellow-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-700 transition"
        >
          Start Exploring
        </a>
      </div>
      </div>
    </div>
  );
};

export default About;
