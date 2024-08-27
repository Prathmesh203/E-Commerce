import React from 'react';
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Contact Information Section */}
        <div>
          <div className="flex items-center mb-4">
            <div className="text-white text-2xl bg-[#db4444] rounded-md p-1 ">
            <IoCallOutline />

            </div>
            <h3 className="ml-4 text-xl font-semibold">Call To Us</h3>
          </div>
          <p className="text-gray-600 mb-2">We are available 24/7, 7 days a week.</p>
          <p className="text-gray-800 font-medium">Phone: +12345676890</p>
        </div>
        
        {/* Contact Form Section */}
        <div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 sm:col-span-2"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
