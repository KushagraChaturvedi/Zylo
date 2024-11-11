import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <img src="src/assets/images/logo.png" alt="Logo" className="h-24 cursor-pointer" onClick={() => {navigate('/')}} />
        <nav className="hidden md:flex space-x-6">
          <a href="community" className="text-gray-800 text-lg font-medium">
            Community
          </a>
          <a href="classes" className="text-gray-800 text-lg font-medium">
            Classes
          </a>
          <a href="/#instructor_section" className="text-gray-800 text-lg font-medium">
            Instructors
          </a>
        </nav>
        <button className="md:hidden text-gray-800">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
