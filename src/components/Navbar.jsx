import { useState } from 'react';
import NavLogo from './NavLogo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Gunakan window.gsap
    const gsap = window.gsap;
    
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: id,
        offsetY: 70
      },
      ease: "power3.inOut"
    });
  };

  const menuItems = [
    { name: 'Beranda', href: '#beranda', icon: 'fa-house' },
    { name: 'Tentang', href: '#tentang', icon: 'fa-user' },
    { name: 'Projek', href: '#projects', icon: 'fa-code' },
    { name: 'Keahlian', href: '#skills', icon: 'fa-laptop-code' },
    { name: 'CV', href: '#cv', icon: 'fa-file-alt' },
    { name: 'Kontak', href: '#contact', icon: 'fa-envelope' },
  ];

  return (
    <nav className="fixed w-full z-50 backdrop-blur-lg bg-gray-900/50 border-b border-gray-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLogo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="font-medium text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
              >
                <i className={`fas ${item.icon} mr-2`}></i>
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-primary transition-colors duration-300"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-lg bg-gray-900/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="block px-3 py-2 text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <i className={`fas ${item.icon} mr-2`}></i>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
