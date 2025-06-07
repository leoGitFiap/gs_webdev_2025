import React from 'react';

export const Footer = () => {
  return (
    <footer className="gradient-bg text-white py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-white hover:text-green-200 transition">
            Facebook
          </a>
          <a href="#" className="text-white hover:text-green-200 transition">
            Instagram
          </a>
          <a href="#" className="text-white hover:text-green-200 transition">
            Twitter
          </a>
        </div>
      </div>
      <style jsx>{`
        .gradient-bg {
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
        }
      `}</style>
    </footer>
  );
};

export default Footer;