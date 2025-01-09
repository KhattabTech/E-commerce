import { MdLocalShipping } from "react-icons/md";
import { IoIosSearch, IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaInfoCircle, FaPhone, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickOutside = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div onClick={handleClickOutside} className="relative">
      <div className="flex justify-between p-3">
        <div className="flex items-center gap-2 px-6 py-2 text-gray-500 text-sm md:text-base lg:text-xl">
          <MdLocalShipping />
          <p>Free Shipping When Shopping upto 1000$</p>
        </div>
        <div className="mr-0 md:mr-7 flex justify-center items-center">
          <div>
            <Link to="/cart" className="mr-4 flex items-center">
              <FaShoppingCart className="text-black z-20 text-2xl" />
            </Link>
          </div>
          <div className="flex">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <HiMenu className="text-black z-20 text-3xl" />
              ) : (
                <HiMenu className="text-black z-20 text-3xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between px-4">
        <img
          src="image/logo.png"
          alt="logo"
          className="h-12 md:h-16 w-auto mb-4 md:mb-0"
        />
        <div className="search flex flex-grow mx-4 justify-center w-full">
          <input
            className="p-2 bg-gray-100 font-semibold border rounded-l-xl outline-none flex-grow"
            type="text"
            placeholder="Search"
          />
          <button className="w-12 h-12 flex items-center justify-center bg-[#314c57] hover:bg-[#2a414b] transition-all duration-300 text-white text-xl border rounded-r-xl">
            <IoIosSearch />
          </button>
        </div>
      </div>

      <div className="offer w-full p-4 bg-[#314c57] mt-5 overflow-hidden">
        <motion.p
          className="text-yellow-400 uppercase font-semibold"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          Flat 10% off on all iPhones
        </motion.p>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="last-header absolute top-16 left-0 right-0 flex flex-col z-10 md:flex-row justify-between items-center bg-zinc-800 text-white text-sm font-semibold w-full py-4 px-5"
          >
            <div className="md:hidden flex w-full justify-end">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <HiX className="text-white z-20 text-3xl" />
              </button>
            </div>
            <div className="user-profile flex items-left gap-5 mb-4 md:mb-0">
              <div className="flex items-center justify-center icon w-10 h-10 rounded-xl bg-white border border-purple-200 text-black">
                <CiUser />
              </div>
              <div className="info">
                {isAuthenticated ? (
                  <>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                  </>
                ) : (
                  <p>Please Login</p>
                )}
              </div>
            </div>

            <div className="nav bg-zinc-800 text-white py-4">
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 justify-center text-lg">
                <li>
                  <Link
                    to="/"
                    className="flex items-center hover:text-yellow-400 transition duration-300"
                  >
                    <FaHome className="mr-1" /> Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="flex items-center hover:text-yellow-400 transition duration-300"
                  >
                    <FaShoppingCart className="mr-1" /> Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="flex items-center hover:text-yellow-400 transition duration-300"
                  >
                    <FaInfoCircle className="mr-1" /> About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="flex items-center hover:text-yellow-400 transition duration-300"
                  >
                    <FaPhone className="mr-1" /> Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    className="flex items-center hover:text-yellow-400 transition duration-300"
                  >
                    <FaShoppingCart className="mr-1" /> Cart
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex">
              <div className="user flex items-center justify-center w-full gap-5 mt-3 sm:mt-3 md:mt-0 lg:mt-0 xl:mt-0">
                {isAuthenticated ? (
                  <button
                    className="flex space-x-2 items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 border border-transparent rounded transition-all duration-300"
                    onClick={() =>
                      logout({ returnTo: window.location.origin })
                    }
                  >
                    <IoIosLogOut className="text-xl" />
                    <span>Logout</span>
                  </button>
                ) : (
                  <button
                    className="flex space-x-2 items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 border border-transparent rounded transition-all duration-300"
                    onClick={() => loginWithRedirect()}
                  >
                    <IoIosLogIn className="text-xl" />
                    <span>Login</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
