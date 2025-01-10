import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_WEB_URL}/api/contact-us`,
        formData
      );
      if (response.status === 201) {
        toast.success('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  return (
    <div className="bg-gray-100 p-6 min-h-screen flex flex-col items-center top-24 relative  w-full mb-24">
      <h1 className="text-2xl font-bold text-[#009b7e] mb-6 mt-8  relative left-11">
        We'd love to hear from you!
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md left-11 relative"
      >
        <label className="block mb-2 text-gray-700" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-[#009b7e]"
          required
        />

        <label className="block mb-2 text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-[#009b7e]"
        />

        <label className="block mb-2 text-gray-700" htmlFor="phone">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-[#009b7e]"
        />

        <label className="block mb-2 text-gray-700" htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-[#009b7e]"
        />

        <label className="block mb-2 text-gray-700" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-[#009b7e] resize-none"
          rows="4"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#009b7e] text-white py-2 rounded-2xl hover:bg-[#00765e]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
