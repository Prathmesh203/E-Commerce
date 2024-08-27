import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-6">
        
       
        <div>
          <h3 className="text-lg font-bold mb-4">Exclusive</h3>
          <p className="mb-2">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-gray-800 text-white border-none rounded-l-md focus:outline-none"
            />
            <button className="bg-white text-black px-4 py-2 rounded-r-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>
        
     
        <div >
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <p>Nagpur, Maharashtra, India</p>
          <p className="mt-2 text-wrap">prathmeshch2003@gmail.com</p>
    
        </div>
        
       
        <div>
          <h3 className="text-lg font-bold mb-4">Account</h3>
          <nav className="flex flex-col space-y-2">
            <Link  className="hover:text-gray-400">
              My Account
            </Link>
            <Link  className="hover:text-gray-400">
              Login / Register
            </Link>
            <Link to="/Cart" className="hover:text-gray-400">
              Cart
            </Link>
            <Link to="/Wishlist" className="hover:text-gray-400">
              Wishlist
            </Link>
            <Link to="/" className="hover:text-gray-400">
              Shop
            </Link>
          </nav>
        </div>
        
        
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Link</h3>
          <nav className="flex flex-col space-y-2">
            <Link  className="hover:text-gray-400">
              Privacy Policy
            </Link>
            <Link  className="hover:text-gray-400">
              Terms Of Use
            </Link>
            <Link  className="hover:text-gray-400">
              FAQ
            </Link>
            <Link to="/Contact" className="hover:text-gray-400">
              Contact
            </Link>
          </nav>
        </div>

        
        <div>
          <h3 className="text-lg font-bold mb-4">Download App</h3>
       
          <div className="flex space-x-4">
            <div className="bg-gray-800 w-24 h-10 flex items-center justify-center"
            style={{
              backgroundImage:"url(/GooglePlay.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            >
              
              <p></p>
            </div>
            <div className="bg-gray-800 w-24 h-10 flex items-center justify-center"
            style={{
              backgroundImage:"url(/download-appstore.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
           
              <p></p>
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-xl hover:text-gray-400"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-xl hover:text-gray-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-xl hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-xl hover:text-gray-400"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      
     
    </footer>
  );
};

export default Footer;
