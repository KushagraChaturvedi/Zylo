import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here, such as API request
    console.log('Login:', { email, password });
  };

  return (
    <div className="auth-page min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-8">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Welcome Back</h1>
        <p className="text-center text-gray-500 mb-8">Log in to your account</p>
        <div className="mb-4 flex items-center border rounded p-3 bg-white">
          <FaEnvelope className="text-gray-500 mr-3" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full outline-none bg-white text-gray-800"
          />
        </div>
        <div className="mb-6 flex items-center border rounded p-3 bg-white">
          <FaLock className="text-gray-500 mr-3" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full outline-none bg-white text-gray-800"
          />
        </div>
        <button
          onClick={handleLogin}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded hover:from-blue-600 hover:to-purple-600 transition w-full font-semibold"
        >
          Log In
        </button>
        <p className="text-center text-gray-500 mt-6">
          Don't have an account? <Link to="/auth/signup" className="text-blue-500 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};


export default Login