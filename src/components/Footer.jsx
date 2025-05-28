import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-primary text-black py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">© 2025 Games Store. Todos os direitos reservados.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-secondary hover:text-green-300 transition">
            Facebook
          </a>
          <a href="#" className="text-secondary hover:text-green-300 transition">
            Instagram
          </a>
          <a href="#" className="text-secondary hover:text-green-300 transition">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;