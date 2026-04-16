import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
          <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">

            <div className="bg-red-50 p-6 rounded-full mb-6">
                  <h1 className="text-9xl font-black text-[#244D3F] opacity-20">404</h1>
            </div>

           
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 -mt-12 mb-4">
                Oops! Page Not Found
            </h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
                The page you are looking for might have been removed, had its name changed, 
                or is temporarily unavailable.
            </p>

            
            <Link
                to="/" 
                className="inline-flex items-center gap-2 bg-[#244D3F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a382d] transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              <IoHomeOutline  size={20} />
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;