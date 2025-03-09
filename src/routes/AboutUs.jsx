const AboutUs = () => {
  return (
    <div className="flex flex-col p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        About Us
      </h2>
      <p className="text-lg leading-7 mb-6 text-white">
        Hello and welcome to our music app! Our purpose is to spread the love of
        music by delivering an easy-to-use and comprehensive music experience to
        individuals all around the world.
      </p>
      <p className="text-lg leading-7 mb-6 text-white">
        Our team is comprised of music enthusiasts that are driven to developing
        a platform that allows users to find new music, new songs, and explore
        music from across the world.
      </p>
      <p className="text-lg leading-7 mb-6 text-white">
        Our app offers everything you need to recommend the perfect soundtrack
        for your life, whether you're looking for the newest chart-topping
        singles or older melodies from your favourite performers.
      </p>
    </div>
  );
};

export default AboutUs;
