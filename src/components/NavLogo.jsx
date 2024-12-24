import React from 'react';
import { motion } from 'framer-motion';
import codeIcon from '../assets/icons/code.svg';

const NavLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center space-x-2"
    >
      <img src={codeIcon} alt="Code Icon" className="w-8 h-8" />
      <span className="text-2xl font-bold text-primary">JonitoDev</span>
    </motion.div>
  );
};

export default NavLogo;