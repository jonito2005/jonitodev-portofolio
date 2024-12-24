import React from 'react';
import { motion } from 'framer-motion';
import codeIcon from '../assets/icons/code.svg';

const Footer = () => {
  const socialLinks = [
    { icon: 'fa-github', url: 'https://github.com/jonito2005', label: 'GitHub' },
    { icon: 'fa-linkedin', url: 'https://linkedin.com/in/jonito2005', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-3">
              <img src={codeIcon} alt="Code Icon" className="w-8 h-8" />
              <h3 className="text-2xl font-bold text-primary">JonitoDev</h3>
            </div>
            <p className="text-gray-400 text-sm">FullStack Developer & UI/UX Designer</p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <i className={`fab ${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} JonitoDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;