function HeroBannerSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left relative min-h-screen w-full">
      {/* Main Text */}
      <div className="flex flex-col space-y-8 lg:mr-56 lg:w-1/2 px-4 lg:px-0 relative">
        <h1 className="md:text-8xl text-6xl font-bold text-black">
          Best <br /> ZUMBA <br /> Classes
        </h1>
        <button className="bg-amber-400 text-black hover:bg-stone-900 hover:text-gray-50 font-semibold px-6 py-3 rounded-lg shadow-md w-auto md:self-start">
          Join Live Classes
        </button>
        {/* Wiggly Arrow */}
        <div className="absolute -bottom-24 -left-12">
          <img
            src="https://live.templately.com/wp-content/uploads/2021/03/e1a18738-arrow-1-1.png"
            alt="Arrow"
            className="mt-8"
          />
        </div>
      </div>

      {/* Dancing Girl Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mt-20 md:mt-0">
        <div className="relative w-[400px] h-[500px] mx-16">
          <img
            src="src/assets/images/girl.png"
            alt="dancing girl"
            className="object-contain w-full h-full"
          />
          <div className="absolute top-1/3 -right-14 w-[100px] h-[100px]">
            <img
              src="src/assets/images/girl2.jpg"
              className="rounded-full border-4 border-white object-cover w-full h-full"
              alt="girl"
            />
          </div>
          <div className="absolute top-2/3 w-[150px]">
            <img
              src="src/assets/images/videobanner1.jpg"
              alt="video banner"
              className="rounded-r-full rounded-l-full object-contain w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBannerSection;
