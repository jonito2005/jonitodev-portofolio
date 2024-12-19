import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'beranda', icon: 'fa-house' },
    { id: 'tentang', icon: 'fa-user' },
    { id: 'projects', icon: 'fa-code' },
    { id: 'skills', icon: 'fa-laptop-code' },
    { id: 'cv', icon: 'fa-file-alt' },
    { id: 'contact', icon: 'fa-envelope' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.pageYOffset;
      let current = '';

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const sectionTop = element.offsetTop - 100;
          const sectionBottom = sectionTop + element.offsetHeight;

          if (pageYOffset >= sectionTop && pageYOffset < sectionBottom) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed md:left-4 md:top-1/2 md:-translate-y-1/2 bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 z-50">
      <div className="flex md:flex-col md:space-y-4 flex-row space-x-4 md:space-x-0 backdrop-blur-lg bg-gray-800/30 border border-gray-700/20 rounded-full py-4 px-2 shadow-lg">
        {sections.map(({ id, icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
              activeSection === id
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                : 'text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
            }`}
            title={id.charAt(0).toUpperCase() + id.slice(1)}
          >
            <i className={`fas ${icon}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;