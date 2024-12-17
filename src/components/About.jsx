import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="tentang" className="py-10 md:py-20 bg-gradient-to-b from-purple-900/30 to-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-100">Tentang Saya</h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="px-4 md:px-0"
          >
            <motion.img 
              src="../assets/images/jonito.png" 
              alt="Profile" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto ring-2 ring-primary/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="glass-card p-4 md:p-6"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-100">FullStack Developer</h3>
            <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">
              Saya adalah seorang FullStack Developer dengan passion dalam membuat 
              antarmuka web yang menarik dan responsif. Dengan pengalaman dalam 
              React.js dan teknologi modern lainnya, saya selalu berusaha 
              memberikan solusi terbaik untuk setiap projek.
            </p>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-300">
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="font-semibold md:w-32 text-primary">Nama:</span>
                <span>Joni Yoga Kusuma</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="font-semibold md:w-32 text-primary">Email:</span>
                <span className="break-all">joniyogakusuma2005@gmail.com</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="font-semibold md:w-32 text-primary">Lokasi:</span>
                <span>Indonesia</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="font-semibold md:w-32 text-primary">Sosial Media:</span>
                <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
                  <a href="https://twitter.com/jonito2005" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="https://t.me/jonito2005" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <i className="fab fa-telegram text-xl"></i>
                  </a>
                  <a href="https://discord.gg/jonito2005" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <i className="fab fa-discord text-xl"></i>
                  </a>
                  <a href="https://facebook.com/jonito2005" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                  <a href="https://instagram.com/jonito2005" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="https://tiktok.com/@jonito2005" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <i className="fab fa-tiktok text-xl"></i>
                  </a>
                  <a href="https://youtube.com/@jonito2005" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <i className="fab fa-youtube text-xl"></i>
                  </a>
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
