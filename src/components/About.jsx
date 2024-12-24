import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  const socialLinks = [
    { href: "https://twitter.com/jonito2005", icon: "fab fa-twitter", color: "text-[#1DA1F2]", label: "Twitter" },
    { href: "https://t.me/jonito2005", icon: "fab fa-telegram", color: "text-[#0088cc]", label: "Telegram" },
    { href: "https://discord.gg/jonito2005", icon: "fab fa-discord", color: "text-[#5865F2]", label: "Discord" },
    { href: "https://facebook.com/jonito2005", icon: "fab fa-facebook", color: "text-[#1877F2]", label: "Facebook" },
    { href: "https://instagram.com/jonito2005", icon: "fab fa-instagram", color: "text-[#E4405F]", label: "Instagram" },
    { href: "https://tiktok.com/@jonito2005", icon: "fab fa-tiktok", color: "text-gray-200", label: "TikTok" },
    { href: "https://youtube.com/@jonito2005", icon: "fab fa-youtube", color: "text-[#FF0000]", label: "YouTube" }
  ];

  return (
    <section id="tentang" className="py-10 md:py-20 bg-gradient-to-b from-purple-900/30 to-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-100">Tentang Saya</h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="px-4 md:px-0"
          >
            <motion.img 
              src="/images/jonito.png" 
              alt="Profile" 
              className="rounded-lg shadow-lg w-full max-w-sm mx-auto ring-2 ring-primary/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card p-4 md:p-6 space-y-4 md:space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-100">FullStack Developer</h3>
            <p className="text-gray-300 mb-6">
              Saya adalah seorang FullStack Developer dengan passion dalam membuat 
              antarmuka web yang menarik dan responsif. Dengan pengalaman dalam 
              React.js dan teknologi modern lainnya, saya selalu berusaha 
              memberikan solusi terbaik untuk setiap projek.
            </p>
            
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center space-x-3 md:space-x-4 p-2 md:p-3 rounded-lg bg-gray-800/30">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/20">
                  <i className="fas fa-user text-blue-400"></i>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-400 text-sm">Nama</p>
                  <p className="text-gray-200">Joni Yoga Kusuma</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 md:space-x-4 p-2 md:p-3 rounded-lg bg-gray-800/30">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-red-500/20">
                  <i className="fas fa-envelope text-red-400"></i>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-gray-200">joniyogakusuma2005@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 md:space-x-4 p-2 md:p-3 rounded-lg bg-gray-800/30">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-green-500/20">
                  <i className="fas fa-map-marker-alt text-green-400"></i>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-400 text-sm">Lokasi</p>
                  <p className="text-gray-200">Indonesia</p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-gray-800/30">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-purple-500/20">
                    <i className="fas fa-share-alt text-purple-400"></i>
                  </div>
                  <p className="text-gray-400 text-sm">Sosial Media</p>
                </div>
                <div className="flex flex-wrap gap-3 pl-14">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${link.color} hover:scale-110 transition-transform duration-300`}
                      title={link.label}
                    >
                      <i className={`${link.icon} text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;