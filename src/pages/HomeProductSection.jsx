import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Homeproduct from "../assets/home_product";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import Modal from "react-modal";
import { CartContext } from "../components/CartContext";
import { motion } from "framer-motion"; 
import { HiX } from "react-icons/hi";


Modal.setAppElement("#root");

const HomeProductSection = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const productCategories = [
    { title: "NEW PRODUCT", type: "new" },
    { title: "FEATURED PRODUCT", type: "featured" },
    { title: "TOP PRODUCT", type: "top" },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [favorites, setFavorites] = useState({});

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setAlertMessage(`${product.Name} added to cart!`);
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
  };

  const toggleFavorited = (productId) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <div className="home-product-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
      {productCategories.map((category) => (
        <div
          key={category.type}
          className="product-column border border-gray-200 rounded-lg shadow-lg p-4"
        >
          <h3 className="font-bold my-4 text-center text-[#314c57]">
            {category.title}
          </h3>
          {Homeproduct.filter((product) => product.type === category.type).map(
            (product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="product-item flex items-center justify-between border-b border-gray-200 py-2"
              >
                <img
                  src={product.image}
                  alt={product.Name}
                  className="w-[30%] object-cover rounded"
                />
                <div className="details ml-2 flex-1">
                  <p className="product-name font-semibold">{product.Name}</p>
                  <p className="price text-[#314c57]">${product.price}</p>
                </div>
                <div className="actions flex gap-2">
                  <FaEye
                    onClick={() => openModal(product)}
                    className="text-gray-600 hover:text-black transition-all duration-300"
                  />
                  <FaHeart
                    onClick={() => toggleFavorited(product.id)}
                    className={`hover:text-red-500 ${
                      favorites[product.id] ? "text-red-500" : "text-gray-600"
                    }`}
                  />
                  <FaShoppingCart
                    onClick={() => handleAddToCart(product)}
                    className="text-gray-600 hover:text-black transition-all duration-300"
                  />
                </div>
              </motion.div>
            )
          )}
        </div>
      ))}

      {alertVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
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

      {selectedProduct && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="modal-overlay"
          contentLabel="Product Details"
        >
          <button className="absolute top-4 right-4" onClick={closeModal}>
            <HiX className="text-2xl" />
          </button>
          <div className=" mt-20">
            <div className="image w-full flex justify-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.Name}
                className="w-full h-80 object-contain"
              />
            </div>
            <div className="info">
              <h3 className="uppercase text-lg text-[#7f7e7e] font-bold">
                # {selectedProduct.cat}
              </h3>
              <h2 className="uppercase text-xl text-[#4f4f4f] font-bold py-5">
                {selectedProduct.Name}
              </h2>
              <p className="text-[#4f4f4f] font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                consectetur ex alias nesciunt iste reiciendis rerum cumque
                possimus, consequatur veniam? Eos necessitatibus voluptate
                veniam. Repellat, facere? Earum, quos. Sequi, delectus.
              </p>
              <div className="price">
                <p className="text-[#314c57] text-xl font-bold">
                  ${selectedProduct.price}
                </p>
                <p>{selectedProduct.description}</p>
              </div>
              <button
                onClick={() => handleAddToCart(selectedProduct)}
                className="bg-[#314c57] text-white hover:bg-[#73061b] hover:text-yellow-400 transition duration-300 rounded py-2 px-4 mt-4 h-10 w-[150px] block"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default HomeProductSection;
