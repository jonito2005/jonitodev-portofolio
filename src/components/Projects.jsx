import { motion } from 'framer-motion';

const projects = [
  {
    title: "Wibudev Subdomain",
    description: "Wibudev Subdomain adalah sebuah platform yang memungkinkan pengguna untuk mendapatkan subdomain gratis untuk domain mereka. Platform ini memungkinkan pengguna untuk memilih subdomain yang sesuai dengan kebutuhan mereka dan memastikan bahwa subdomain tersebut tersedia dan siap digunakan.",
    image: "/images/subdomain.png", 
    tech: ["Node.js", "Tailwind", "EJS"],
    link: "https://subdomain.wibudev.moe"
  },
  {
    title: "JonitoDev Portfolio",
    description: "JonitoDev Portfolio adalah website portfolio pribadi yang menampilkan karya dan pengalaman saya sebagai developer. Website ini dibuat menggunakan React dan Tailwind CSS dengan animasi menggunakan Framer Motion untuk memberikan pengalaman yang menarik bagi pengunjung.",
    image: "/images/portfolio.png",
    tech: ["React", "Tailwind", "LottieFiles"], 
    link: "https://jonito.wibudev.moe"
  },
  {
    title: "Toko Lokal",
    description: "Toko Lokal adalah sebuah platform e-commerce inovatif yang dirancang untuk mendukung UMKM dan pengusaha lokal Indonesia. Website ini memungkinkan pengguna untuk menemukan dan membeli berbagai produk berkualitas dari penjual-penjual lokal terpercaya di seluruh Indonesia, sekaligus mendukung pertumbuhan ekonomi lokal.",
    image: "/images/tokolokal.png",
    tech: ["React", "Tailwind", "Node.js"],
    link: "https://tokolokal.wibudev.moe"
  }
];

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
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900/80 to-indigo-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-100">Projek Saya</h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="glass-card overflow-hidden rounded-lg group"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain bg-gray-800/50 p-2"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-white rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    Lihat Detail
                  </motion.a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300"
                >
                  Lihat Project
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;