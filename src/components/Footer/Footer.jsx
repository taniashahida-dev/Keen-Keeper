import React from 'react';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
          <footer className="bg-[#285943] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Title */}
        <h1 className="text-6xl font-bold mb-4">KeenKeeper</h1>

        {/* Description */}
        <p className="text-sm text-gray-200 mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mb-8">
          <p className="mb-3 font-medium">Social Links</p>
          <div className="flex justify-center gap-4">

            <div className="bg-white text-black p-3 rounded-full cursor-pointer">
              <FaYoutube />
            </div>

            <div className="bg-white text-black p-3 rounded-full cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="bg-white text-black p-3 rounded-full cursor-pointer">
              <FaXTwitter />
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 border-t border-gray-500 pt-6">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
    );
};

export default Footer;