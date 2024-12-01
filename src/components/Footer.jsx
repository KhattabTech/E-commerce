import {
  FaPiggyBank,
  FaTruck,
  FaHeadphonesAlt,
  FaWallet,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-100 py-10">
      <div className="container mx-auto">
        {/* خط فاصل */}
        <div className="border-t border-gray-400 mb-10"></div>
        {/* قسم الميزات */}
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6 mb-10 text-center text-[#314c57]">
          <div className="flex flex-col items-center">
            <FaPiggyBank className="text-3xl mb-2" />
            <h4 className="font-semibold">GREAT SAVING</h4>
            <p className="text-sm text-[#314c57]">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaTruck className="text-3xl mb-2" />
            <h4 className="font-semibold">FREE DELIVERY</h4>
            <p className="text-sm text-[#314c57]">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaHeadphonesAlt className="text-3xl mb-2" />
            <h4 className="font-semibold">24X7 SUPPORT</h4>
            <p className="text-sm text-[#314c57]">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaWallet className="text-3xl mb-2" />
            <h4 className="font-semibold">MONEY BACK</h4>
            <p className="text-sm text-[#314c57]">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        {/* تفاصيل الفوتر */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-700">
          {/* لوجو */}
          <div className="text-center md:text-left border-r border-gray-400 pl-5">
            <img
              src="image/logo.webp"
              alt="Techayo Logo"
              className="mx-auto md:mx-0 w-24 mb-4"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>

          {/* روابط الحساب */}
          <div>
            <h4 className="font-semibold mb-4">YOUR ACCOUNT</h4>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-[#73061b] transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-[#73061b] transition duration-300"
                >
                  Account
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-[#73061b] transition duration-300"
                >
                  Payment
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-[#73061b] transition duration-300"
                >
                  Sales
                </a>
              </li>
            </ul>
          </div>

          {/* روابط المنتجات */}
          <div>
            <h4 className="font-semibold mb-4">PRODUCTS</h4>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-[#73061b] transition duration-300"
                >
                  Delivery
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-[#73061b] transition duration-300"
                >
                  Track Order
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-[#73061b] transition duration-300"
                >
                  New Product
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-[#73061b] transition duration-300"
                >
                  Old Product
                </a>
              </li>
            </ul>
          </div>

          {/* معلومات الاتصال */}
          <div>
            <h4 className="font-semibold mb-4">CONTACT US</h4>
            <p>4005, Silver Business Point, India</p>
            <p>+012 999999999</p>
            <p>Info@Gmail.Com</p>
          </div>
        </div>
      </div>
     <div className="absolute bottom-0 flex w-full justify-center">
     <p className="text-sm text-gray-700">Created by Mohamed_kH &copy; 2024</p>
     </div>
    </footer>
  );
};

export default Footer;
