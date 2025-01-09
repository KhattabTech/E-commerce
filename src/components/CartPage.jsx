import { useContext } from "react";
import { CartContext } from "./CartContext"; 
import { Link } from "react-router-dom";
import PaypalIcon from "../../public/image/paypal.png";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);


  const incqty = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, qty: item.qty + 1 } : item
    );
    setCart(updatedCart);
  };


  const decqty = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    );
    setCart(updatedCart);
  };

 
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };


  const calculateSubTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.price * item.qty, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-page-container flex flex-col md:flex-row gap-8 w-full p-7">

      <div className="cart-items-section w-full md:w-2/3">
        <h2 className="uppercase text-4xl text-[#4f4f4f]">Shopping cart</h2>
        <nav className="flex gap-2 text-[#4f4f4f] font-semibold mt-3">
          <li className="cursor-pointer list-none">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="list-none">{">"}</li>
          <li className="cursor-pointer list-none">
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li className="list-none">{">"}</li>
          <li className="cursor-pointer list-none">
            <Link to={"../cart"}>Cart</Link>
          </li>
        </nav>

        {cart.length === 0 ? (
  <div className="flex flex-col ml-[0rem] sm:ml-[0rem] md:ml-[15rem] items-center justify-center w-full text-4xl text-center">
    <img src="image/empty.png" alt="Empty Cart" className="mb-4 w-32 h-32" />
    <p>Your cart is empty.</p>
  </div>
) : (
  <div className="cart-items mt-6">
    {cart.map((item) => (
      <div
        key={item.id}
        className="flex flex-col md:flex-row items-center justify-between border-b py-4"
      >
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={item.image}
            alt={item.Name}
            className="w-20 h-20 mr-4"
          />
          <div>
            <h4 className="text-lg font-semibold">{item.Name}</h4>
            <p className="text-sm text-gray-500">{item.cat}</p>
            <p className="text-sm">Price: ${item.price}</p>
            <p className="text-sm">Total: ${item.price * item.qty}</p>
          </div>
        </div>
        <div className="flex items-center">
          <button onClick={() => incqty(item)} className="px-2">
            +
          </button>
          <input
            className="text-center w-12 mx-2"
            type="number"
            value={item.qty}
            readOnly
          />
          <button onClick={() => decqty(item)} className="px-2">
            -
          </button>
          <button
            onClick={() => removeFromCart(item.id)}
            className="ml-4 text-red-500"
          >
            X
          </button>
        </div>
      </div>
    ))}
  </div>
)}

        <button className="mt-6 py-2 px-4 bg-gray-200 text-black rounded-md">
         <Link to={"/shop"}>{"<<"} Continue Shopping</Link>
        </button>
      </div>

      {cart.length > 0 && (
        <div className="order-summary w-full md:w-1/3 p-6 bg-gray-100 rounded-lg shadow-lg mt-8 md:mt-0">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Order Summary
          </h3>
          <input
            type="text"
            placeholder="Enter promo code / Gift certificate"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <div className="text-gray-700 mb-2">
            <p className="flex justify-between">
              <span>Subtotal</span>
              <span>${calculateSubTotal()}</span>
            </p>
            <p className="flex justify-between">
              <span>Estimated Tax</span>
              <span>--</span>
            </p>
            <p className="flex justify-between">
              <span>Estimated Shipping & Handling</span>
              <span>$0.00</span>
            </p>
          </div>
          <div className="flex justify-between font-semibold text-gray-800 text-lg mb-4">
            <span>Total</span>
            <span>${calculateSubTotal()}</span>
          </div>
          <Link to="">
            <button className="w-full py-3 bg-black text-white rounded-lg mb-3">
              Checkout
            </button>
          </Link>

          <button className="w-full py-3 bg-gray-300 text-gray-600 rounded-lg flex items-center justify-center">
            <img src={PaypalIcon} alt="Pay with PayPal" className="w-[70px]" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
