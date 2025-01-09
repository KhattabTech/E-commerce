import { useState, useContext } from "react";
import { CartContext } from "../components/CartContext"; 
import Homeproduct from "../assets/home_product"; 
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Shop = () => {
  const { cart, addToCart } = useContext(CartContext); 
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false); 
  const [alertMessage, setAlertMessage] = useState(""); 

  const filteredProducts = Homeproduct.filter((product) =>
    selectedCategory === "all" ? true : product.cat === selectedCategory
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAddToCart = (product) => {
    addToCart(product); 
    setAlertMessage(`${product.Name} added to cart!`);
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false); 
    }, 3000);
  };

  return (
    <div className="flex flex-col md:flex-row relative">
     
      <aside className="left_section w-full md:w-1/4 p-7">
        <h2 className="uppercase text-4xl text-[#4f4f4f]">
          <Link to={"../shop"}># shop</Link>
        </h2>
        <nav className="flex gap-2 text-[#4f4f4f] font-semibold mt-3">
          <li className="cursor-pointer list-none">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="list-none">{">"}</li>
          <li className="cursor-pointer list-none">shop</li>
        </nav>

      
        <div className="hidden md:block mt-5">
          <h2 className="uppercase font-semibold text-xl text-[#4f4f4f]">
            All Categories
          </h2>
          <ul className="uppercase p-4 mt-2 text-[#6e6e6e] font-semibold">
            {[
              "all",
              "tv",
              "laptop",
              "watch",
              "speaker",
              "electronics",
              "headphone",
              "phone",
            ].map((cat) => (
              <li
                key={cat}
                className={`cursor-pointer hover:text-[#000] duration-200 ${
                  selectedCategory === cat ? "text-[#000]" : ""
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                # {cat}
              </li>
            ))}
          </ul>
        </div>

        
        <button
          onClick={toggleMenu}
          className="mt-5 p-2 border rounded bg-[#4f4f4f] text-white md:hidden"
        >
          {isMenuOpen ? "Hide Categories" : "Show Categories"}
        </button>

    
        {isMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center z-50 md:hidden">
            <h2 className="uppercase font-semibold text-xl text-white mb-4">
              All Categories
            </h2>
            <ul className="uppercase p-4 text-[#314c575f] font-semibold">
              {[
                "all",
                "tv",
                "laptop",
                "watch",
                "speaker",
                "electronics",
                "headphone",
                "phone",
              ].map((cat) => (
                <li
                  key={cat}
                  className={`cursor-pointer hover:text-[#000] duration-200 text-white ${
                    selectedCategory === cat ? "font-bold" : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setIsMenuOpen(false);
                  }}
                >
                  # {cat}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 p-2 border rounded bg-red-500 text-white"
            >
              Close
            </button>
          </div>
        )}

        
        <img src="image/shop_left.avif" alt="Shop Left" className="w-full" />
      </aside>

   
      <main className="right_section w-full md:w-3/4 p-7">
        <img src="image/shop_top.webp" alt="Shop Top" className="w-full" />
        <h2 className="title uppercase text-[#4f4f4f] text-2xl p-5">
          shop product
        </h2>

  
        {alertVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="fixed top-4 right-4 bg-green-200 px-6 py-4 rounded-md text-lg flex items-center mx-auto max-w-lg shadow-lg z-50"
          >
            <svg
              viewBox="0 0 24 24"
              className="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            <span className="text-green-800">{alertMessage}</span>
          </motion.div>
        )}

        <div className="products mt-5 grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: .03  }} 
              key={product.id}
              className="box relative overflow-hidden p-2 border border-gray-200 rounded-lg shadow-lg transition-transform hover:scale-105 group"
            >
              <div className="img_box overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src={product.image}
                  alt={product.Name}
                />
              </div>
              <div className="p-4">
                <h3 className="text-gray-800  font-semibold mb-2">
                  {product.Name}
                </h3>
                <p className="text-[#314c57] text-xl  mb-4">${product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)} 
                  className="bg-[#314c57] text-white hover:bg-[#73061b] hover:text-yellow-400 capitalize transition duration-300  w-full py-1 rounded"
                >
                  Add To Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Shop;
