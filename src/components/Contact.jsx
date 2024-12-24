import { motion } from 'framer-motion';

const Contact = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "joniyogakusuma2005@gmail.com",
      link: "mailto:joniyogakusuma2005@gmail.com",
      bgColor: "bg-red-500/20",
      textColor: "text-red-400"
    },
    {
      icon: "fas fa-phone",
      label: "Telepon",
      value: "+62 812 4486 3011",
      link: "tel:+6281244863011",
      bgColor: "bg-green-500/20",
      textColor: "text-green-400"
    },
    {
      icon: "fas fa-map-marker-alt",
      label: "Lokasi",
      value: "Blitar, Indonesia",
      link: "https://goo.gl/maps/Blitar",
      bgColor: "bg-blue-500/20",
      textColor: "text-blue-400"
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-10 md:py-20 bg-gradient-to-b from-blue-900/30 to-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-100">Kontak</h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          {/* Informasi Kontak */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-4 md:p-6 space-y-4 md:space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-100">
              <i className="fas fa-paper-plane mr-2 text-primary"></i>
              Hubungi Saya
            </h3>
            
            <p className="text-gray-300 mb-6">
              Tertarik untuk berkolaborasi atau memiliki pertanyaan? 
              Jangan ragu untuk menghubungi saya melalui salah satu kontak berikut:
            </p>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-3 md:space-y-4"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.icon === "fas fa-map-marker-alt" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  variants={item}
                  className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                >
                  <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full ${info.bgColor}`}>
                    <i className={`${info.icon} text-lg md:text-xl ${info.textColor}`}></i>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-gray-200 text-sm md:text-base">{info.value}</p>
                  </div>
                  <i className="fas fa-arrow-right text-gray-400 text-sm md:text-base"></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Form Kontak */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-4 md:p-6 space-y-4 md:space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-100">
              <i className="fas fa-envelope mr-2 text-primary"></i>
              Kirim Pesan
            </h3>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg bg-gray-800/30">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-purple-500/20">
                  <i className="fas fa-user text-purple-400 text-lg md:text-xl"></i>
                </div>
                <div className="flex-grow">
                  <label className="block text-gray-400 text-sm mb-1">Nama</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 focus:outline-none text-gray-200 text-sm md:text-base"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg bg-gray-800/30">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/20">
                  <i className="fas fa-envelope text-blue-400"></i>
                </div>
                <div className="flex-grow">
                  <label className="block text-gray-400 text-sm mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-0 focus:outline-none text-gray-200"
                    placeholder="Masukkan email Anda"
                  />
                </div>
              </div>

              <div className="flex space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg bg-gray-800/30">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-green-500/20">
                  <i className="fas fa-message text-green-400"></i>
                </div>
                <div className="flex-grow">
                  <label className="block text-gray-400 text-sm mb-1">Pesan</label>
                  <textarea
                    rows="4"
                    className="w-full bg-transparent border-0 focus:outline-none text-gray-200 resize-none"
                    placeholder="Tulis pesan Anda"
                  ></textarea>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 md:py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 text-sm md:text-base"
            >
              <i className="fas fa-paper-plane"></i>
              <span>Kirim Pesan</span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;