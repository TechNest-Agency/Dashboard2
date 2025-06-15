import Lottie from "lottie-react";
import lottie from '../assets/login.json'

import { FaEnvelope, FaLock, FaGithub, FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    // Define a function to check window width
    const handleResize = () => {
      setIsSmall(window.innerWidth < 768);
    };

    // Run initially
    handleResize();

    // Attach event
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

return (
  <div
    className="flex items-center justify-center min-h-screen py-8 md:py-0 px-4 "
     style={ 
        isSmall
          ? { backgroundColor: '#f1f5f9' } // small: plain color
          : { 
              backgroundImage: `repeating-linear-gradient(225deg, rgb(0, 0, 0, 0.05) 0px, rgb(0, 0, 0, 0.05) 2px, transparent 2px, transparent 4px), linear-gradient(270deg, rgb(29, 67, 158), rgb(219, 239, 242))`
            } // large: gradient
      }
    >
      {/* Outer wrapper */}
      <div className="bg-transparent   w-full flex flex-col-reverse md:flex-row justify-center items-center md:gap-6">
        {/* Left side - form */}
        <div className=" flex flex-col justify-center items-center px-4 md:px-8 py-8 max-w-[450px] bg-white rounded-lg shadow-md">
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-900">
            Welcome Back!
          </h1>
          <p className="text-blue-900/80 mb-6 text-sm sm:text-base">
            Please access your account to begin your adventure
          </p>

          {/* Login form */}
          <form className="flex flex-col gap-4 w-full">
            {/* Email field */}
            <label className="flex flex-col gap-1">
              <span className="text-blue-900 font-semibold">Email</span>
              <div className="flex items-center gap-2 p-2 rounded-md border border-blue-900 focus-within:border-blue-500">
                <FaEnvelope className="text-blue-900/80" />
                <input
                    type="email"
                    aria-label="Email"
                    placeholder="Enter your email"
                    className="bg-transparent outline-none flex-1 text-blue-900"
                    required
                />
              </div>
            </label>

            {/* Password field */}
            <label className="flex flex-col gap-1">
              <span className="text-blue-900 font-semibold">Password</span>
              <div className="flex items-center gap-2 p-2 rounded-md border border-blue-900 focus-within:border-blue-500">
                <FaLock className="text-blue-900/80" />
                <input
                    type={showPassword ? "text" : "password"}
                    aria-label="Password"
                    placeholder="Enter your password"
                    className="bg-transparent outline-none flex-1 text-blue-900"
                    required
                />
                <button
                    aria-label="Toggle password visibility"
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="text-blue-900/80">
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </label>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-0.5 sm:gap-2">
                <input aria-label="Remember me" type="checkbox" className="text-blue-500" />
                <span className="text-blue-900 text-sm sm:text-base">Remember me</span>
              </label>
              <a
                href="#forgot"
                className="text-blue-500 hover:underline text-sm sm:text-base">
                Forgot password?
              </a>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="bg-blue-900 text-gray-50 py-2 px-4 rounded-md font-semibold hover:bg-blue-800 transition ease-in-out duration-300">
              Log in
            </button>

            {/* Signup invitation */}
            <p className="text-blue-900/80 text-center text-sm sm:text-base">
              New on our platform? <a href="#signup" className="text-blue-500 hover:underline">Create an account</a>
            </p>

            {/* Or divider */}
            <div className="flex items-center">
              <span className="flex-grow border-t border-blue-900/50" ></span>
              <span className="px-4 text-blue-900/50">or</span>
              <span className="flex-grow border-t border-blue-900/50" ></span>
            </div>

            {/* Social media login */}
            <div className="flex gap-4">
              <button
                aria-label="Login with Google"
                className="flex-1 p-2 rounded-md border border-blue-900 hover:bg-blue-100 transition ease-in-out">
                <FaGoogle className="mx-auto text-blue-500" size={20} />
              </button>
              <button
                aria-label="Login with GitHub"
                className="flex-1 p-2 rounded-md border border-blue-900 hover:bg-blue-100 transition ease-in-out">
                <FaGithub className="mx-auto text-gray-900" size={20} />
              </button>
              <button
                aria-label="Login with Facebook"
                className="flex-1 p-2 rounded-md border border-blue-900 hover:bg-blue-100 transition ease-in-out">
                <FaFacebookF className="mx-auto text-blue-700" size={20} />
              </button>
            </div>
          </form>
        </div>

        {/* Right side - Lottie or files section*/}
        <div className="flex-1 flex items-center justify-center px-4 sm:w-[400px] md:max-w-2xl">
          {/* Currently showing fallback text instead of Lottie */}
          <Lottie animationData={lottie} />
        </div>
      </div>
    </div>
  )
}




export default Login;
