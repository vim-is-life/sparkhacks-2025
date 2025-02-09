import DrawerWithNav from "./components/DrawerWithNav";
import { Link } from "react-router-dom";
import Profile from "./components/Profile";
import { useAuth } from "../components/AuthContext";

function Header() {
  const { currentUser } = useAuth();

  return (
    <header className="py-4 md:py-6 bg-white shadow">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* MOBILE LAYOUT */}
        <div className="flex items-center w-full lg:hidden">
          {/* Left: Drawer */}
          <div className="flex-1 flex justify-start">
            <DrawerWithNav />
          </div>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center">
            <Link to="/" title="TideTogether" className="flex rounded">
              <img
                className="w-auto h-11"
                src="https://firebasestorage.googleapis.com/v0/b/sparkhacks-2025-6f939.firebasestorage.app/o/TideTogetherLogo.png?alt=media&token=2106e130-ae3f-4437-bdb7-195f746e3a64"
                alt="TideTogether Logo"
              />
            </Link>
          </div>

          {/* Right: Profile or Sign In/Up */}
          <div className="flex-1 flex justify-end items-center space-x-4">
            {currentUser ? (
              <Profile />
            ) : (
              // Optionally, you can add mobile Sign In/Up buttons here if needed.
              null
            )}
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:grid grid-cols-3 items-center">
          {/* Left: Drawer */}
          <div className="flex justify-start">
            <DrawerWithNav />
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <Link to="/" title="TideTogether" className="flex rounded">
              <img
                className="w-auto h-11"
                src="https://firebasestorage.googleapis.com/v0/b/sparkhacks-2025-6f939.firebasestorage.app/o/TideTogetherLogo.png?alt=media&token=2106e130-ae3f-4437-bdb7-195f746e3a64"
                alt="TideTogether Logo"
              />
            </Link>
          </div>

          {/* Right: Profile or Sign In/Up */}
          <div className="flex justify-end items-center space-x-4">
            {currentUser ? (
              <Profile />
            ) : (
              <>
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
                             bg-customGreen border border-gray-900 rounded-xl 
                             hover:bg-green-300 focus:outline-none focus:ring-2 
                             focus:ring-offset-2 focus:ring-green-600"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
