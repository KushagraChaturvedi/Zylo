const Home = () => {
  return (
    <div className="bg-blue-50 text-gray-800 w-full md:px-32">
      {/* Header */}
      <header className="py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <img src="src/assets/images/logo.png" alt="Logo" className="h-24" />
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-800 text-lg font-medium">
              Community
            </a>
            <a href="#" className="text-gray-800 text-lg font-medium">
              Classes
            </a>
            <a href="#" className="text-gray-800 text-lg font-medium">
              Instructors
            </a>
          </nav>
          <button className="md:hidden text-gray-800">Sign Up</button>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Get Moving With Us Section */}
      <section className="text-center bg-blue-50 min-h-screen py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
          {/* Breakdancer Image */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-md">
              <img
                src="src/assets/images/dancer.png"
                alt="Breakdancer"
                className="object-contain w-full h-screen"
              />
            </div>
          </div>

          {/* Zigzag Cards */}
          <div className="space-y-16 md:w-1/2 py-2 px-16">
            <div className="flex items-center space-x-4 bg-white relative w-full h-48 text-left px-8">
              <div className="absolute -top-10 left-10 w-20 h-20 border-white border-[5px] rounded-full flex items-center justify-center">
                <img src="src/assets/icons/class.png" alt="Class Icon" />
              </div>
              <div>
                <h3 className="font-bold text-3xl">Join Our Class</h3>
                <p className="text-gray-600">
                  Learn from the best dance choreographers. Sign up for our
                  dance lessons today.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-white relative w-full h-48 text-left px-8 md:ml-8">
              <div className="absolute -top-10 left-10 w-20 h-20 border-white border-[5px] rounded-full flex items-center justify-center">
                <img
                  src="src/assets/icons/choreography.png"
                  alt="Choreography Icon"
                />
              </div>
              <div>
                <h3 className="font-bold text-3xl">Zumba Choreography</h3>
                <p className="text-gray-600">
                  Follow our dance choreography videos to learn different dance
                  styles.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-white relative w-full h-48 text-left px-8">
              <div className="absolute -top-10 left-10 w-20 h-20 border-white border-[5px] rounded-full flex items-center justify-center">
                <img src="src/assets/icons/stage.png" alt="Stage Icon" />
              </div>
              <div>
                <h3 className="font-bold text-3xl">Perform Onstage</h3>
                <p className="text-gray-600">
                  Perform onstage at our annual dance festival and gain
                  worldwide recognition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zumba Festival Cards Section */}
      <section className="min-h-screen">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Zumba Festival 2024
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Zumba Event 1"
                className="w-full mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Contemporary Zumba Festival
              </h3>
              <p className="text-gray-600">California, US State</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Zumba Event 2"
                className="w-full mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Contemporary Zumba Festival
              </h3>
              <p className="text-gray-600">California, US State</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Zumba Event 3"
                className="w-full mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Contemporary Zumba Festival
              </h3>
              <p className="text-gray-600">California, US State</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up for Classes Section */}
      <section className="py-16">
        <div className="container mx-auto text-center md:text-left">
          <div className="md:flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Sign Up For Classes
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                Train under the best dance choreographers. Learn from top
                professionals and enhance your skills.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-600 flex gap-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 60.7 60.7"
                      className="w-10 h-auto"
                    >
                      <path
                        d="m55.4 24.9c-4.1-3.2-8.2-6.5-12.3-9.7s-.1-.1-.1-.1c-6.7-2.7-2.9 7.7-4.5 7.9-6.1.9-12.2 1.8-18.3 2.7-5.8.9-11.6 1.7-17.4 2.6-1.9.3-2.8 1.1-2.8 2.9 0 1.6 3 1.5 4 1.7 6.7 1 13.5 2 20.2 3 2.3.3 14.3.5 14.3 3.7 0 1.3-.9 6.1 1.3 6.5 1.7.3 2.8-.3 4.1-1.3 5.2-4.1 10.4-8.2 15.6-12.3.4-.3.6-.6.8-.9 0 0 0 0 0-.1s.1-.1.1-.2c.1-.1.1-.3.2-.4.7-2.4-3.5-4.6-5.2-6zm-53.1 5c-.1.2-.1.3-.2.5 0 0-.1.2-.1.3 0 0-.1 0-.1-.1-.3-.5 0-.9.6-1.2 0 .1-.1.3-.2.5zm50.5-4.9c.1.1.2.2.3.2-1.8 3.8-3.7 7.5-5.7 11.2-.3.5-.3.5-.1-.1.8-2 1.6-4 2.4-6 .2-.5.6-1.3.9-1.8.7-1.1 1.4-2.3 2.2-3.5zm-8.5-6.7c.4.3.8.6 1.2.9-.2.3-.4.6-.6.9-.3.5-.9.9-1.2 1s-.5.2-.6.3c-.1.2-.3.3-.4.5-.2.3-.2.1.1-.4.4-1.1.9-2.1 1.5-3.2zm-3.2-2.3c-.1 0-.1.1 0 0-.1.2-.2.3-.3.5 0-.3.1-.4.3-.5zm-.4 3.9c.6-1 1.2-2 1.8-2.9.1 0 .1.1.2.1-.7 1.4-1.4 2.7-2.1 4.1 0 .1-.1.1-.1.2 0-.3 0-.8 0-1.3.1 0 .2-.1.2-.2zm-33.9 9.2c-.4.8-.8 1.6-1.2 2.4-.1.2-.1.4-.1.5-.5-.1-1-.1-1.5-.2.1-.1.3-.3.4-.5.3-.7.6-1.3.9-1.9.1-.3.1-.5 0-.6 1-.1 1.8-.2 2.1-.2-.3.1-.5.3-.6.5zm3.5 3.5c-1-.2-2-.3-3.1-.5l.4-.4c.5-1 1-2 1.6-3 .1-.2.1-.4.1-.5 1.4-.2 2.8-.4 4.3-.6-.2.2-.4.3-.5.5-.9 1.4-1.7 2.7-2.6 4.1-.2.2-.2.3-.2.4zm4.2.2c-.1.2-.1.3-.1.4-.8-.1-1.6-.2-2.4-.4.1-.1.3-.2.4-.4 1-1.6 2-3.1 3-4.7.1-.2.1-.3.1-.5.9-.1 1.7-.3 2.6-.4-.2.2-.4.3-.5.5-1.1 2-2.1 3.7-3.1 5.5zm8.4 1.3c-.1.2-.1.3-.1.4-1.7-.3-3.4-.5-5.2-.8.1-.1.3-.2.4-.4 1.2-2.2 2.4-4.3 3.6-6.5.1-.2.1-.4.1-.5 2-.3 4.1-.6 6.1-.9-.2.2-.4.4-.5.6-1.4 2.7-2.9 5.4-4.4 8.1zm4.2 1c-.8-.1-1.6-.2-2.5-.4.1-.1.3-.2.4-.4 2-3 3.9-6 6-9 .1-.1.1-.3.1-.4.7-.1 1.5-.1 2.4-.2-.1.1-.1.2-.2.2-2 3.2-4.1 6.4-6.1 9.6-.1.4-.1.5-.1.6zm2.1.4c-.2 0-.3 0-.4-.1.1-.2.2-.3.3-.5 2.1-3.4 4.3-6.7 6.4-10.1 0 0 0-.1.1-.1h.1s-.1.1-.1.1c-2.1 3.4-4.2 6.8-6.3 10.3 0 .1-.1.2-.1.4zm3.9.3c-.7-.1-1.4-.1-2-.2.1-.1.2-.2.2-.3 2.2-3.6 4.4-7.3 6.7-10.9.1-.1.1-.2.1-.3.8-.3 1.5-.7 2-1.2-.2.3-.7.8-.9 1.3-2 3.8-3.9 7.6-6 11.3-.1.1-.1.2-.1.3zm4.8-1c-.3.5-.5.9-.8 1.4v.1c-.3-.1-.5-.1-.8-.2 0 0 0 0 .1-.1 1-1.5 2-3 2.9-4.5.3-.5.4-.4.2.1-.6 1.1-1.1 2.2-1.6 3.2zm5 7.8c-.2.7-.5 1.3-.7 2-.3.2-.5.3-.7.3.4-.8.8-1.5 1.3-2.3.2-.6.2-.5.1 0zm-2.2-.9c-.1.2-.2.4-.3.6-.1-1.5.1-3.2.1-3.8 0-.7-.7-1.3-1.7-1.7.1-.1.2-.2.3-.4.4-.7.7-1.4 1.1-2.1 2.6-4.4 5.1-8.8 7.7-13.2.9.7 1.8 1.4 2.6 2.1-.5 1.3-.9 2.5-1.5 3.7-.9 1.7-1.8 3.3-2.6 5-1.9 3.3-3.8 6.6-5.7 9.8zm6.4-1c2.7-4.6 5.2-9.3 7.5-14.2.1.1.3.2.4.3-2.2 4.2-4.3 8.4-6.4 12.6-.4.4-1 .8-1.5 1.3zm10.2-8.1c-1.7 1.4-3.4 2.7-5.2 4.1 1.4-2.9 2.9-5.8 4.4-8.7.8.6 1.6 1.2 2 2-.3.8-.7 1.7-1.2 2.6z"
                        fill="#bcc4d3"
                      ></path>
                    </svg>{" "}
                  </span>
                  <p className="my-auto">Personalized Zumba Class Schedules</p>
                </li>
                <li className="text-gray-600 flex gap-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 60.7 60.7"
                      className="w-10 h-auto"
                    >
                      <path
                        d="m55.4 24.9c-4.1-3.2-8.2-6.5-12.3-9.7s-.1-.1-.1-.1c-6.7-2.7-2.9 7.7-4.5 7.9-6.1.9-12.2 1.8-18.3 2.7-5.8.9-11.6 1.7-17.4 2.6-1.9.3-2.8 1.1-2.8 2.9 0 1.6 3 1.5 4 1.7 6.7 1 13.5 2 20.2 3 2.3.3 14.3.5 14.3 3.7 0 1.3-.9 6.1 1.3 6.5 1.7.3 2.8-.3 4.1-1.3 5.2-4.1 10.4-8.2 15.6-12.3.4-.3.6-.6.8-.9 0 0 0 0 0-.1s.1-.1.1-.2c.1-.1.1-.3.2-.4.7-2.4-3.5-4.6-5.2-6zm-53.1 5c-.1.2-.1.3-.2.5 0 0-.1.2-.1.3 0 0-.1 0-.1-.1-.3-.5 0-.9.6-1.2 0 .1-.1.3-.2.5zm50.5-4.9c.1.1.2.2.3.2-1.8 3.8-3.7 7.5-5.7 11.2-.3.5-.3.5-.1-.1.8-2 1.6-4 2.4-6 .2-.5.6-1.3.9-1.8.7-1.1 1.4-2.3 2.2-3.5zm-8.5-6.7c.4.3.8.6 1.2.9-.2.3-.4.6-.6.9-.3.5-.9.9-1.2 1s-.5.2-.6.3c-.1.2-.3.3-.4.5-.2.3-.2.1.1-.4.4-1.1.9-2.1 1.5-3.2zm-3.2-2.3c-.1 0-.1.1 0 0-.1.2-.2.3-.3.5 0-.3.1-.4.3-.5zm-.4 3.9c.6-1 1.2-2 1.8-2.9.1 0 .1.1.2.1-.7 1.4-1.4 2.7-2.1 4.1 0 .1-.1.1-.1.2 0-.3 0-.8 0-1.3.1 0 .2-.1.2-.2zm-33.9 9.2c-.4.8-.8 1.6-1.2 2.4-.1.2-.1.4-.1.5-.5-.1-1-.1-1.5-.2.1-.1.3-.3.4-.5.3-.7.6-1.3.9-1.9.1-.3.1-.5 0-.6 1-.1 1.8-.2 2.1-.2-.3.1-.5.3-.6.5zm3.5 3.5c-1-.2-2-.3-3.1-.5l.4-.4c.5-1 1-2 1.6-3 .1-.2.1-.4.1-.5 1.4-.2 2.8-.4 4.3-.6-.2.2-.4.3-.5.5-.9 1.4-1.7 2.7-2.6 4.1-.2.2-.2.3-.2.4zm4.2.2c-.1.2-.1.3-.1.4-.8-.1-1.6-.2-2.4-.4.1-.1.3-.2.4-.4 1-1.6 2-3.1 3-4.7.1-.2.1-.3.1-.5.9-.1 1.7-.3 2.6-.4-.2.2-.4.3-.5.5-1.1 2-2.1 3.7-3.1 5.5zm8.4 1.3c-.1.2-.1.3-.1.4-1.7-.3-3.4-.5-5.2-.8.1-.1.3-.2.4-.4 1.2-2.2 2.4-4.3 3.6-6.5.1-.2.1-.4.1-.5 2-.3 4.1-.6 6.1-.9-.2.2-.4.4-.5.6-1.4 2.7-2.9 5.4-4.4 8.1zm4.2 1c-.8-.1-1.6-.2-2.5-.4.1-.1.3-.2.4-.4 2-3 3.9-6 6-9 .1-.1.1-.3.1-.4.7-.1 1.5-.1 2.4-.2-.1.1-.1.2-.2.2-2 3.2-4.1 6.4-6.1 9.6-.1.4-.1.5-.1.6zm2.1.4c-.2 0-.3 0-.4-.1.1-.2.2-.3.3-.5 2.1-3.4 4.3-6.7 6.4-10.1 0 0 0-.1.1-.1h.1s-.1.1-.1.1c-2.1 3.4-4.2 6.8-6.3 10.3 0 .1-.1.2-.1.4zm3.9.3c-.7-.1-1.4-.1-2-.2.1-.1.2-.2.2-.3 2.2-3.6 4.4-7.3 6.7-10.9.1-.1.1-.2.1-.3.8-.3 1.5-.7 2-1.2-.2.3-.7.8-.9 1.3-2 3.8-3.9 7.6-6 11.3-.1.1-.1.2-.1.3zm4.8-1c-.3.5-.5.9-.8 1.4v.1c-.3-.1-.5-.1-.8-.2 0 0 0 0 .1-.1 1-1.5 2-3 2.9-4.5.3-.5.4-.4.2.1-.6 1.1-1.1 2.2-1.6 3.2zm5 7.8c-.2.7-.5 1.3-.7 2-.3.2-.5.3-.7.3.4-.8.8-1.5 1.3-2.3.2-.6.2-.5.1 0zm-2.2-.9c-.1.2-.2.4-.3.6-.1-1.5.1-3.2.1-3.8 0-.7-.7-1.3-1.7-1.7.1-.1.2-.2.3-.4.4-.7.7-1.4 1.1-2.1 2.6-4.4 5.1-8.8 7.7-13.2.9.7 1.8 1.4 2.6 2.1-.5 1.3-.9 2.5-1.5 3.7-.9 1.7-1.8 3.3-2.6 5-1.9 3.3-3.8 6.6-5.7 9.8zm6.4-1c2.7-4.6 5.2-9.3 7.5-14.2.1.1.3.2.4.3-2.2 4.2-4.3 8.4-6.4 12.6-.4.4-1 .8-1.5 1.3zm10.2-8.1c-1.7 1.4-3.4 2.7-5.2 4.1 1.4-2.9 2.9-5.8 4.4-8.7.8.6 1.6 1.2 2 2-.3.8-.7 1.7-1.2 2.6z"
                        fill="#bcc4d3"
                      ></path>
                    </svg>{" "}
                  </span>
                  <p className="my-auto">
                    Learn From 100+ Professional Dancers
                  </p>
                </li>
                <li className="text-gray-600 flex gap-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 60.7 60.7"
                      className="w-10 h-auto"
                    >
                      <path
                        d="m55.4 24.9c-4.1-3.2-8.2-6.5-12.3-9.7s-.1-.1-.1-.1c-6.7-2.7-2.9 7.7-4.5 7.9-6.1.9-12.2 1.8-18.3 2.7-5.8.9-11.6 1.7-17.4 2.6-1.9.3-2.8 1.1-2.8 2.9 0 1.6 3 1.5 4 1.7 6.7 1 13.5 2 20.2 3 2.3.3 14.3.5 14.3 3.7 0 1.3-.9 6.1 1.3 6.5 1.7.3 2.8-.3 4.1-1.3 5.2-4.1 10.4-8.2 15.6-12.3.4-.3.6-.6.8-.9 0 0 0 0 0-.1s.1-.1.1-.2c.1-.1.1-.3.2-.4.7-2.4-3.5-4.6-5.2-6zm-53.1 5c-.1.2-.1.3-.2.5 0 0-.1.2-.1.3 0 0-.1 0-.1-.1-.3-.5 0-.9.6-1.2 0 .1-.1.3-.2.5zm50.5-4.9c.1.1.2.2.3.2-1.8 3.8-3.7 7.5-5.7 11.2-.3.5-.3.5-.1-.1.8-2 1.6-4 2.4-6 .2-.5.6-1.3.9-1.8.7-1.1 1.4-2.3 2.2-3.5zm-8.5-6.7c.4.3.8.6 1.2.9-.2.3-.4.6-.6.9-.3.5-.9.9-1.2 1s-.5.2-.6.3c-.1.2-.3.3-.4.5-.2.3-.2.1.1-.4.4-1.1.9-2.1 1.5-3.2zm-3.2-2.3c-.1 0-.1.1 0 0-.1.2-.2.3-.3.5 0-.3.1-.4.3-.5zm-.4 3.9c.6-1 1.2-2 1.8-2.9.1 0 .1.1.2.1-.7 1.4-1.4 2.7-2.1 4.1 0 .1-.1.1-.1.2 0-.3 0-.8 0-1.3.1 0 .2-.1.2-.2zm-33.9 9.2c-.4.8-.8 1.6-1.2 2.4-.1.2-.1.4-.1.5-.5-.1-1-.1-1.5-.2.1-.1.3-.3.4-.5.3-.7.6-1.3.9-1.9.1-.3.1-.5 0-.6 1-.1 1.8-.2 2.1-.2-.3.1-.5.3-.6.5zm3.5 3.5c-1-.2-2-.3-3.1-.5l.4-.4c.5-1 1-2 1.6-3 .1-.2.1-.4.1-.5 1.4-.2 2.8-.4 4.3-.6-.2.2-.4.3-.5.5-.9 1.4-1.7 2.7-2.6 4.1-.2.2-.2.3-.2.4zm4.2.2c-.1.2-.1.3-.1.4-.8-.1-1.6-.2-2.4-.4.1-.1.3-.2.4-.4 1-1.6 2-3.1 3-4.7.1-.2.1-.3.1-.5.9-.1 1.7-.3 2.6-.4-.2.2-.4.3-.5.5-1.1 2-2.1 3.7-3.1 5.5zm8.4 1.3c-.1.2-.1.3-.1.4-1.7-.3-3.4-.5-5.2-.8.1-.1.3-.2.4-.4 1.2-2.2 2.4-4.3 3.6-6.5.1-.2.1-.4.1-.5 2-.3 4.1-.6 6.1-.9-.2.2-.4.4-.5.6-1.4 2.7-2.9 5.4-4.4 8.1zm4.2 1c-.8-.1-1.6-.2-2.5-.4.1-.1.3-.2.4-.4 2-3 3.9-6 6-9 .1-.1.1-.3.1-.4.7-.1 1.5-.1 2.4-.2-.1.1-.1.2-.2.2-2 3.2-4.1 6.4-6.1 9.6-.1.4-.1.5-.1.6zm2.1.4c-.2 0-.3 0-.4-.1.1-.2.2-.3.3-.5 2.1-3.4 4.3-6.7 6.4-10.1 0 0 0-.1.1-.1h.1s-.1.1-.1.1c-2.1 3.4-4.2 6.8-6.3 10.3 0 .1-.1.2-.1.4zm3.9.3c-.7-.1-1.4-.1-2-.2.1-.1.2-.2.2-.3 2.2-3.6 4.4-7.3 6.7-10.9.1-.1.1-.2.1-.3.8-.3 1.5-.7 2-1.2-.2.3-.7.8-.9 1.3-2 3.8-3.9 7.6-6 11.3-.1.1-.1.2-.1.3zm4.8-1c-.3.5-.5.9-.8 1.4v.1c-.3-.1-.5-.1-.8-.2 0 0 0 0 .1-.1 1-1.5 2-3 2.9-4.5.3-.5.4-.4.2.1-.6 1.1-1.1 2.2-1.6 3.2zm5 7.8c-.2.7-.5 1.3-.7 2-.3.2-.5.3-.7.3.4-.8.8-1.5 1.3-2.3.2-.6.2-.5.1 0zm-2.2-.9c-.1.2-.2.4-.3.6-.1-1.5.1-3.2.1-3.8 0-.7-.7-1.3-1.7-1.7.1-.1.2-.2.3-.4.4-.7.7-1.4 1.1-2.1 2.6-4.4 5.1-8.8 7.7-13.2.9.7 1.8 1.4 2.6 2.1-.5 1.3-.9 2.5-1.5 3.7-.9 1.7-1.8 3.3-2.6 5-1.9 3.3-3.8 6.6-5.7 9.8zm6.4-1c2.7-4.6 5.2-9.3 7.5-14.2.1.1.3.2.4.3-2.2 4.2-4.3 8.4-6.4 12.6-.4.4-1 .8-1.5 1.3zm10.2-8.1c-1.7 1.4-3.4 2.7-5.2 4.1 1.4-2.9 2.9-5.8 4.4-8.7.8.6 1.6 1.2 2 2-.3.8-.7 1.7-1.2 2.6z"
                        fill="#bcc4d3"
                      ></path>
                    </svg>{" "}
                  </span>
                  <p className="my-auto">Perform On Broadway</p>
                </li>
              </ul>
            </div>
            <img
              src="https://plus.unsplash.com/premium_photo-1681492501033-38a4b2887a8e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sign up"
              className="rounded-lg w-full md:w-80 md:ml-8"
            />
          </div>
          <button className="bg-amber-400 text-black hover:bg-stone-900 hover:text-gray-50 py-3 px-6 rounded-full text-lg font-bold">
            Sign Up
          </button>
        </div>
      </section>

      {/* Best Instructors Section */}
      <section id="instructor_section" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Best Instructors
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="shadow-lg rounded-3xl overflow-hidden">
              <img
                src="https://live.templately.com/wp-content/uploads/2021/03/6a62ad15-image-15.jpg"
                alt="Bobbi Jackson"
                className="w-full"
              />
              <div className="py-5 text-center bg-white">
                <p className="text-lg font-bold">Bobbi Jackson</p>
                <p className="text-sm text-gray-600">Caption</p>
              </div>
            </div>
            <div className="shadow-lg rounded-3xl overflow-hidden">
              <img
                src="https://live.templately.com/wp-content/uploads/2021/03/b968dcc0-image-16.jpg"
                alt="Barbara Cotilla"
                className="w-full"
              />
              <div className="py-5 text-center bg-white">
                <p className="text-lg font-bold">Barbara Cotilla</p>
                <p className="text-sm text-gray-600">Caption</p>
              </div>
            </div>
            <div className="shadow-lg rounded-3xl overflow-hidden">
              <img
                src="https://live.templately.com/wp-content/uploads/2021/03/8cd96054-image-17.jpg"
                alt="Adem Smith"
                className="w-full"
              />
              <div className="py-5 text-center bg-white">
                <p className="text-lg font-bold">Adem Smith</p>
                <p className="text-sm text-gray-600">Caption</p>
              </div>
            </div>
            <div className="shadow-lg rounded-3xl overflow-hidden">
              <img
                src="https://live.templately.com/wp-content/uploads/2021/03/e63243c8-image-18.jpg"
                alt="Marcus Stoinis"
                className="w-full"
              />
              <div className="py-5 text-center bg-white">
                <p className="text-lg font-bold">Marcus Stoinis</p>
                <p className="text-sm text-gray-600">Caption</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>@copyright zumba classes</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
