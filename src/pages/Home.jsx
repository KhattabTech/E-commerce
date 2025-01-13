import { Link } from "react-router-dom";
import Homeproduct from "../assets/home_product";
import { useContext, useState } from "react";
import { CartContext } from "../components/CartContext";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { HiX } from "react-icons/hi";
import "../App.css";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";

const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
  const { addToCart } = useContext(CartContext);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isFavorited, setIsFavorited] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); 

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  const filtercate = (category) => {
    if (category === "all") {
      setTrendingProduct(Homeproduct);
    } else {
      const filterproduct = Homeproduct.filter(
        (curElm) => curElm.type === category
      );
      setTrendingProduct(filterproduct);
    }
    setActiveCategory(category);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setAlertMessage(`${product.Name} added to cart!`);
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  const toggleFavorited = (productId) => {
    setIsFavorited((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  return (
    <div className="home">
      <motion.div
        className="top_banner relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="contact text-start absolute top-[30%] left-[5%] w-[75%]"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
        >
          <h3 className="text-slate-800 text-2xl capitalize">Discover More</h3>
          <h2 className="text-6xl font-medium py-5 text-[#233841]">
            The Latest Gear <br />
            in One Place!
          </h2>
          <p className="text-[#314c57] text-lg mb-6">
            30% off at your first order
          </p>
          <motion.button
            className="bg-[#314c57] text-white hover:bg-[#73061b] capitalize transition duration-300 w-40 h-10 font-medium"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/shop" className="link">
              Shop now
            </Link>
          </motion.button>
        </motion.div>
      </motion.div>

      
      <div className="trending py-10">
        <div className="container">
          <div className="header uppercase flex justify-center bg-zinc-300 p-5 rounded-md">
            <div className="cate flex gap-10 text-[#314c5799]">
              {["all", "new", "featured", "top"].map((category) => (
                <h3
                  key={category}
                  className={`cursor-pointer ${
                    activeCategory === category ? "text-[#000]" : ""
                  }`}
                  onClick={() => filtercate(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
              ))}
            </div>
          </div>

          {alertVisible && (
            <div className="fixed top-4 right-4 bg-green-200 px-6 py-4 rounded-md text-lg flex items-center mx-auto max-w-lg shadow-lg z-50">
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
            </div>
          )}

          
          <div className="products px-5 mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {trendingProduct.map((curElm, index) => (
              <motion.div
                key={curElm.id}
                className="box relative z-10 overflow-hidden p-2 border border-gray-200 rounded-lg shadow-lg transition-transform hover:scale-105 group"
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 20 }} 
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
             
                <div className="actions right-5 absolute z-30 flex flex-col gap-2">
                  <button
                    onClick={() => openModal(curElm)} 
                    className="text-gray-600 hover:text-black transition-all duration-300"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => toggleFavorited(curElm.id)}
                    className="text-gray-600 transition-all duration-300"
                  >
                    <FaHeart
                      className={`hover:text-red-500 ${
                        isFavorited[curElm.id]
                          ? "text-red-500"
                          : "text-gray-600"
                      }`}
                    />
                  </button>
                  <button
                    onClick={() => handleAddToCart(curElm)}
                    className="text-gray-600 hover:text-black transition-all duration-300"
                  >
                    <FaShoppingCart />
                  </button>
                </div>
                <div className="img_box overflow-hidden">
                  <img
                    className="w-full h-48 object-cover"
                    src={curElm.image}
                    alt={curElm.Name}
                  />
                </div>
                <div className="text-center mt-2">
                  <h3 className="text-lg text-gray-800 font-medium flex w-full justify-start">
                    {curElm.Name}
                  </h3>
                  <p className="text-[#314c57] text-xl flex w-full justify-start">
                    ${curElm.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="bg-[#314c57] hover:bg-[#73061b] hover:text-yellow-400  w-[180px] h-[50px] font-semibold py-1 mt-10 rounded capitalize transition text-white mx-auto flex items-center justify-center">
            <Link to={"shop"}>Show more</Link>
          </button>
        </div>
      </div>

      
      <div className="banners grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto max-w-7xl p-4">
        <div className="flex flex-col gap-4 md:col-span-1">
          <img
            src="image/Multi-Banner-1.avif"
            alt="Wireless Speakers"
            className="w-full h-67 object-cover rounded-lg shadow-lg"
          />
          <img
            src="image/Multi-Banner-3.webp"
            alt="Big Sale"
            className="w-full h-full object-fill rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-4 md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="image/Multi-Banner-2.avif"
              alt="Beats On Go"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <img
              src="image/Multi-Banner-4.avif"
              alt="Apple AirPods"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <img
            src="image/Multi-Banner-5.webp"
            alt="Deals and Discounts"
            className="w-full h-67 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

     
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal h-auto"
        overlayClassName="modal-overlay h-auto  z-30"
        closeTimeoutMS={200}
      >
        <button className="absolute top-4 right-4" onClick={closeModal}>
          <HiX className="text-2xl" />
        </button>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }} 
            className="mt-20"
          >
            <img
              src={selectedProduct.image}
              alt={selectedProduct.Name}
              className="w-full h-80 object-contain "
            />
            <h3 className="uppercase text-lg text-[#7f7e7e] font-bold">
              # {selectedProduct.cat}
            </h3>
            <h2 className="uppercase text-xl text-[#4f4f4f] font-bold py-5">
              {selectedProduct.Name}
            </h2>
            <p className="text-[#4f4f4f] font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              consectetur ex alias nesciunt iste reiciendis rerum cumque.
            </p>

            <p className="text-[#4f4f4f] font-semibold">
              {selectedProduct.description}
            </p>
            <p className="text-[#314c57] text-xl font-bold">
              ${selectedProduct.price}
            </p>
            <button
              onClick={() => handleAddToCart(selectedProduct)}
              className="bg-[#314c57] text-white hover:bg-[#73061b] hover:text-yellow-400  transition duration-300 rounded py-2 px-4 mt-4 h-10 w-[150px] block"
            >
              Add To Cart
            </button>
          </motion.div>
        )}
      </Modal>
    </div>
  );
};

export default Home;
