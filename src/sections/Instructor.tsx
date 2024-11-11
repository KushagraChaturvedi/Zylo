function Instructor() {
  return (
    <section id="instructor_section" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Instructors</h2>
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
  );
}

export default Instructor;
