import { useState } from "react";
import { GrContact } from "react-icons/gr";
import { Link } from "react-router-dom";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة الكود لإرسال البيانات إلى الخادم
    console.log("Form Data Submitted:", formData);
    // إعادة تعيين الحقول بعد الإرسال
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <div className="p-7">
        <h2 className="uppercase text-4xl text-[#4f4f4f]">
          <Link to={""}># Contact</Link>
        </h2>
        <nav className="flex gap-2 text-[#4f4f4f] font-semibold mt-3">
          <li className="cursor-pointer list-none">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="list-none">{">"}</li>
          <li className="cursor-pointer list-none">Contact</li>
        </nav>
      </div>
      <div className="contact-container max-w-lg mx-auto p-6 my-20 border-gray-200 rounded-lg shadow-2xl border-t-[#314c57] border-2">
        <h2 className="text-2xl font-bold text-center mb-6 uppercase text-[#314c57] flex justify-center gap-2 items-center">
          Contact Us
          <GrContact />
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1  outline-none block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1  outline-none block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="subject"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-1  outline-none block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1  outline-none block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#314c57] text-white hover:bg-[#73061b] hover:text-yellow-400 capitalize transition duration-300 rounded-md py-2 "
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
