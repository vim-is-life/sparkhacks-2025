import DrawerWithNav from "./components/DrawerWithNav";
import Logo from "../Logo/Akknoledge-Logo.png";
import { Link } from "react-router-dom";
import Profile from "./components/Profile";
import { useAuth } from "../components/AuthContext";

function Header() {
  const { currentUser } = useAuth();

  return (
    <>
      <header className="py-4 md:py-6 bg-white shadow">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* MOBILE LAYOUT */}
          <div className="flex items-center w-full lg:hidden">
            {/* Left: Drawer (Hamburger) */}
            <div className="flex-shrink-0 w-1/4">
              <DrawerWithNav />
            </div>

            {/* Center: Logo */}
            <div className="flex-shrink-0 w-1/2 flex justify-center">
              <Link to="/" title="Akknoledge" className="flex rounded">
                <img
                  className="w-auto h-11"
                  src={Logo}
                  alt="Akknoledge Logo"
                />
              </Link>
            </div>

            {/* Right: Profile or Sign In/Up */}
            <div className="flex-shrink-0 w-1/4 flex justify-end items-center space-x-4">
              {currentUser ? (
                <>
                  {/* Show Profile and My Groups when logged in */}
                  <Profile />
                  
                </>
              ) : (
                <>
                  
                </>
              )}
            </div>
          </div>

         {/* DESKTOP LAYOUT */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex-shrink-0 w-1/4">
              <DrawerWithNav />
            </div>
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" title="Akknoledge" className="flex rounded">
                <img
                  className="w-auto h-11"
                  src={Logo}
                  alt="Akknoledge Logo"
                />
              </Link>
            </div>

            {/* Right: Profile or Sign In/Up */}
            <div className="flex items-center space-x-4">
              {currentUser ? (
                <Profile />
              ) : (
                <>
                  {/* Show Sign In and Sign Up when not logged in */}
                  <Link
                    to="/signin"
                    title="Login"
                    className="px-5 py-2 text-base font-light font-poppins text-gray-900 
                              bg-transparent border border-gray-900 rounded-xl
                              hover:bg-gray-900 hover:text-white focus:outline-none
                              focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    title="Sign Up"
                    className="px-5 py-2 text-base font-light font-poppins text-black 
                              bg-customGreen bg-transparent border border-gray-900 rounded-xl hover:bg-green-300 focus:outline-none 
                              focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

        </div>
      </header>
    </>
  );
}

export default Header;
