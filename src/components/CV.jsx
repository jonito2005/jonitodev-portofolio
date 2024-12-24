import { motion } from 'framer-motion';
import html2pdf from 'html2pdf.js';

const CV = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      period: "2023 - Sekarang",
      description: "Mengembangkan berbagai aplikasi web menggunakan React.js, Node.js, dan Tailwind CSS. Fokus pada pembuatan UI/UX yang menarik dan responsif."
    },
    {
      title: "Cloud Computing",
      company: "Self Learning",
      period: "2024 - Sekarang",
      description: "Mempelajari dan mengimplementasikan teknologi cloud computing, termasuk AWS dan Azure, Digital Ocean, dan Google Cloud Platform."
    },
    {
      title: "Server Engineer",
      company: "Self Learning",
      period: "2024 - Sekarang",
      description: "Mengelola server pribadi untuk hosting berbagai aplikasi dan belajar tentang administrasi sistem Linux."
    }
  ];

  const education = [
    {
      school: "SMAN 1 Ponggok",
      degree: "SMA",
      period: "2021 - 2023",
      description: "Sekolah Menengah Atas"
    },
    {
      school: "Akademi Putra Sang Fajar Blitar",
      degree: "D2 Administrasi Server & Jaringan Komputer",
      period: "2023 - 2025",
      description: "Akademi"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2024"
    },
    {
      name: "LSPTIK Junior Programmer",
      issuer: "LSPTIK",
      year: "2024"
    }
  ];

  // Tambahkan data skills
  const skills = [
    {
      category: "Frontend",
      items: ["HTML5", "JavaScript", "React.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Laravel", "MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "NPM", "AWS", "Linux", "Figma", "Postman"]
    }
  ];

  // Tambahkan data projects
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

  // Tambahkan data abilities
  const abilities = [
    {
      category: "Bahasa Pemrograman",
      items: [
        { name: "JavaScript", level: 90 },
        { name: "PHP", level: 85 },
      ]
    },
    {
      category: "Bahasa",
      items: [
        { name: "Indonesia", level: 100 },
        { name: "Inggris", level: 70 },
        { name: "Jepang", level: 20 }
      ]
    },
    {
      category: "Soft Skills",
      items: [
        { name: "Komunikasi", level: 90 },
        { name: "Problem Solving", level: 85 },
        { name: "Team Work", level: 90 },
        { name: "Time Management", level: 85 }
      ]
    }
  ];

  // Fungsi untuk menghasilkan HTML CV
  const generateCVContent = () => {
    return `
      <div class="cv-container">
        <header>
          <div class="profile-header">
            <img src="/src/assets/icons/code.svg" alt="Profile" class="profile-image">
            <div class="profile-info">
              <h1>Joni Yoga Kusuma</h1>
              <p class="title">Full Stack Developer & UI/UX Designer</p>
            </div>
          </div>
          <div class="contact-info">
            <p><i class="fas fa-envelope"></i> joniyogakusuma2005@gmail.com</p>
            <p><i class="fas fa-phone"></i> +62 812 4486 3011</p>
            <p><i class="fas fa-map-marker-alt"></i> Blitar, Indonesia</p>
            <p><i class="fas fa-globe"></i> jonito.wibudev.moe</p>
          </div>
        </header>

        <main>
          <!-- Tentang Saya -->
          <section class="about-section">
            <h2><i class="fas fa-user"></i> Tentang Saya</h2>
            <div class="about-content">
              <p>Saya adalah seorang FullStack Developer dengan passion dalam membuat 
              antarmuka web yang menarik dan responsif. Dengan pengalaman dalam 
              React.js dan teknologi modern lainnya, saya selalu berusaha 
              memberikan solusi terbaik untuk setiap projek.</p>
            </div>
            
            <div class="social-links">
              <h3>Media Sosial</h3>
              <div class="social-grid">
                <a href="https://twitter.com/jonito2005"><i class="fab fa-twitter"></i> Twitter</a>
                <a href="https://t.me/jonito2005"><i class="fab fa-telegram"></i> Telegram</a>
                <a href="https://discord.gg/jonito2005"><i class="fab fa-discord"></i> Discord</a>
                <a href="https://facebook.com/jonito2005"><i class="fab fa-facebook"></i> Facebook</a>
                <a href="https://instagram.com/jonito2005"><i class="fab fa-instagram"></i> Instagram</a>
                <a href="https://tiktok.com/@jonito2005"><i class="fab fa-tiktok"></i> TikTok</a>
                <a href="https://youtube.com/@jonito2005"><i class="fab fa-youtube"></i> YouTube</a>
              </div>
            </div>
          </section>

          <!-- Skills -->
          <section class="skills-section">
            <h2><i class="fas fa-code"></i> Keahlian Teknis</h2>
            <div class="skills-grid">
              ${skills.map(category => `
                <div class="skill-category">
                  <h3>${category.category}</h3>
                  <div class="skill-items">
                    ${category.items.map(item => `
                      <span class="skill-item">${item}</span>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </section>

          <!-- Projects -->
          <section class="projects-section">
            <h2><i class="fas fa-project-diagram"></i> Proyek</h2>
            <div class="projects-grid">
              ${projects.map(project => `
                <div class="project-item">
                  <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" class="project-img">
                  </div>
                  <h3>${project.title}</h3>
                  <p class="project-description">${project.description}</p>
                  <div class="tech-stack">
                    ${project.tech.map(tech => `
                      <span class="tech-item">${tech}</span>
                    `).join('')}
                  </div>
                  <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-external-link-alt"></i> Lihat Proyek
                  </a>
                </div>
              `).join('')}
            </div>
          </section>

          <!-- Pengalaman -->
          <section class="experience-section">
            <h2><i class="fas fa-star"></i> Pengalaman</h2>
            ${experiences.map(exp => `
              <div class="experience-item">
                <div class="timeline-dot"></div>
                <h3>${exp.title}</h3>
                <p class="company">${exp.company}</p>
                <p class="period">${exp.period}</p>
                <p class="description">${exp.description}</p>
              </div>
            `).join('')}
          </section>

          <!-- Pendidikan -->
          <section class="education-section">
            <h2><i class="fas fa-graduation-cap"></i> Pendidikan</h2>
            ${education.map(edu => `
              <div class="education-item">
                <div class="timeline-dot"></div>
                <h3>${edu.school}</h3>
                <p class="degree">${edu.degree}</p>
                <p class="period">${edu.period}</p>
                <p class="description">${edu.description}</p>
              </div>
            `).join('')}
          </section>

          <!-- Sertifikasi -->
          <section class="certification-section">
            <h2><i class="fas fa-certificate"></i> Sertifikasi</h2>
            ${certifications.map(cert => `
              <div class="certification-item">
                <div class="timeline-dot"></div>
                <h3>${cert.name}</h3>
                <p class="issuer">${cert.issuer}</p>
                <p class="year">${cert.year}</p>
              </div>
            `).join('')}
          </section>

          <!-- Kemampuan -->
          <section class="abilities-section">
            <h2><i class="fas fa-chart-bar"></i> Kemampuan</h2>
            <div class="abilities-grid">
              ${abilities.map(category => `
                <div class="ability-category">
                  <h3>${category.category}</h3>
                  <div class="ability-items">
                    ${category.items.map(item => `
                      <div class="ability-item">
                        <div class="ability-info">
                          <span class="ability-name">${item.name}</span>
                          <span class="ability-level">${item.level}%</span>
                        </div>
                        <div class="ability-bar">
                          <div class="ability-progress" style="width: ${item.level}%"></div>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </section>

          <!-- Kontak -->
          <section class="contact-section">
            <h2><i class="fas fa-paper-plane"></i> Informasi Kontak</h2>
            <div class="contact-grid">
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <h3>Email</h3>
                <p>joniyogakusuma2005@gmail.com</p>
              </div>
              <div class="contact-item">
                <i class="fas fa-phone"></i>
                <h3>Telepon</h3>
                <p>+62 812 4486 3011</p>
              </div>
              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <h3>Lokasi</h3>
                <p>Blitar, Indonesia</p>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <p>Generated by JonitoDev Portfolio | ${new Date().toLocaleDateString()}</p>
        </footer>
      </div>
    `;
  };

  // Style untuk PDF
  const pdfStyles = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      
      .cv-container {
        font-family: 'Poppins', sans-serif;
        max-width: 210mm;
        margin: 0 auto;
        padding: 20px;
        color: #f1f5f9;
        background: #0f172a;
      }

      /* Header Styles */
      header {
        background: #1e293b;
        border: 1px solid #334155;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 30px;
      }

      .profile-header {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 15px;
      }

      .profile-image {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 3px solid rgba(99, 102, 241, 0.5);
        padding: 5px;
        background: rgba(255, 255, 255, 0.1);
      }

      .profile-info h1 {
        margin: 0;
        font-size: 24px;
        color: #fff;
      }

      .profile-info .title {
        margin: 5px 0;
        color: #94a3b8;
      }

      /* Section Styles */
      section {
        background: #1e293b;
        border: 1px solid #334155;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 25px;
        page-break-inside: avoid;
      }

      h2 {
        color: #6366f1;
        border-bottom: 2px solid #6366f1;
        padding-bottom: 10px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      h2 i {
        color: #6366f1;
      }

      /* Skills Section */
      .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
      }

      .skill-category {
        background: #262f43;
        border: 1px solid #334155;
        padding: 15px;
        border-radius: 8px;
      }

      .skill-category h3 {
        color: #6366f1;
        margin-bottom: 10px;
      }

      .skill-items {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .skill-item {
        background: #3b4d71;
        color: #f1f5f9;
        border: none;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 14px;
      }

      /* Projects Section */
      .project-item {
        background: #262f43;
        border: 1px solid #334155;
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 20px;
        page-break-inside: avoid;
      }

      .project-image {
        width: 100%;
        height: 200px;
        overflow: hidden;
        border-radius: 8px;
        margin-bottom: 15px;
        background: #1e293b;
      }

      .project-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 10px;
      }

      .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 10px 0;
      }

      .tech-item {
        background: #3b4d71;
        color: #f1f5f9;
        border: none;
        padding: 4px 12px;
        border-radius: 15px;
        font-size: 12px;
      }

      /* Timeline Items */
      .experience-item,
      .education-item,
      .certification-item {
        position: relative;
        padding-left: 20px;
        margin-bottom: 20px;
        border-left: 2px solid #6366f1;
        page-break-inside: avoid;
      }

      .timeline-dot {
        position: absolute;
        left: -6px;
        top: 0;
        width: 10px;
        height: 10px;
        background: #6366f1;
        border-radius: 50%;
        border: 2px solid #1e293b;
      }

      /* Contact Grid */
      .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
      }

      .contact-item {
        background: #262f43;
        border: 1px solid #334155;
        padding: 15px;
        border-radius: 8px;
        text-align: center;
      }

      .contact-item i {
        font-size: 24px;
        color: #6366f1;
        margin-bottom: 10px;
      }

      /* Footer */
      footer {
        text-align: center;
        margin-top: 30px;
        padding: 20px;
        color: #94a3b8;
        font-size: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }

      /* Text Colors */
      .company, .degree, .issuer {
        color: #94a3b8;
      }

      .period, .year {
        color: #64748b;
      }

      .description {
        color: #f1f5f9;
      }

      /* Social Links */
      .social-grid a {
        color: #6366f1;
      }

      /* Print Optimization */
      @media print {
        body {
          background: #0f172a !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        .cv-container {
          width: 210mm;
          padding: 0;
        }

        section {
          margin-bottom: 20px;
        }

        .project-image img {
          max-height: 150px;
        }

        .abilities-grid,
        .skills-grid,
        .projects-grid {
          break-inside: avoid;
        }
      }

      /* Abilities Section */
      .abilities-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
      }

      .ability-category {
        background: #262f43;
        border: 1px solid #334155;
        padding: 15px;
        border-radius: 8px;
        page-break-inside: avoid;
      }

      .ability-category h3 {
        color: #6366f1;
        margin-bottom: 15px;
        font-size: 18px;
      }

      .ability-items {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .ability-item {
        width: 100%;
      }

      .ability-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
      }

      .ability-name {
        color: #e2e8f0;
        font-size: 14px;
      }

      .ability-level {
        color: #6366f1;
        font-size: 14px;
        font-weight: 500;
      }

      .ability-bar {
        width: 100%;
        height: 6px;
        background: #334155;
        border-radius: 3px;
        overflow: hidden;
      }

      .ability-progress {
        height: 100%;
        background: #6366f1;
        border-radius: 3px;
        transition: width 1s ease-in-out;
      }

      @media print {
        .ability-progress {
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
      }
    </style>
  `;

  // Fungsi untuk men-download CV sebagai PDF
  const downloadCV = () => {
    const content = generateCVContent();
    const element = document.createElement('div');
    element.innerHTML = pdfStyles + content;

    const opt = {
      margin: [15, 15, 15, 15], // top, left, bottom, right
      filename: 'CV_JoniYogaKusuma.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        backgroundColor: '#0f172a',
        logging: true,
        letterRendering: true,
        windowWidth: 1200
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true,
        putOnlyUsedFonts: true,
        precision: 16
      },
      pagebreak: { mode: 'avoid-all' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <section id="cv" className="py-20 bg-gradient-to-b from-gray-900/80 to-purple-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-100">Curriculum Vitae</h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Pengalaman Kerja */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-100">
              <i className="fas fa-briefcase mr-2 text-primary"></i>
              Pengalaman
            </h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-medium text-gray-100">{exp.title}</h4>
                  <p className="text-primary">{exp.company}</p>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                  <p className="text-gray-300 mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pendidikan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-100">
              <i className="fas fa-graduation-cap mr-2 text-primary"></i>
              Pendidikan
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-medium text-gray-100">{edu.school}</h4>
                  <p className="text-primary">{edu.degree}</p>
                  <p className="text-sm text-gray-400">{edu.period}</p>
                  <p className="text-gray-300 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-100">
              <i className="fas fa-certificate mr-2 text-primary"></i>
              Sertifikasi
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-medium text-gray-100">{cert.name}</h4>
                  <p className="text-primary">{cert.issuer}</p>
                  <p className="text-sm text-gray-400">{cert.year}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button
            onClick={downloadCV}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <i className="fas fa-download mr-2"></i>
            Download CV
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CV; 