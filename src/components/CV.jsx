import { motion } from 'framer-motion';
import { useEffect } from 'react';

const CV = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "PT. Wibudev",
      period: "2023 - Sekarang",
      description: "Mengembangkan dan memelihara aplikasi web menggunakan React.js, Node.js, dan Tailwind CSS"
    },
    {
      title: "Web Developer",
      company: "PT. Wibudev",
      period: "2023 - 2024",
      description: "Membangun website responsif dan aplikasi web untuk berbagai klien"
    },
    {
      title: "Cloud Computing",
      company: "PT. Wibudev",
      period: "2024 - 2025",
      description: "Mengelola dan mengoptimalkan infrastruktur cloud untuk memastikan keamanan dan stabilitas data"
    },
    {
      title: "Server Engineer",
      company: "PT. Wibudev",
      period: "2024 - 2025",
      description: "Mengelola dan mengoptimalkan infrastruktur server untuk memastikan keamanan dan stabilitas data"
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
      degree: "D2 Teknik Informatika",
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
      name: "Google Professional Cloud Developer",
      issuer: "Google",
      year: "2024"
    },
    {
      name: "LSPTIK Junior Programmer",
      issuer: "LSPTIK",
      year: "2024"
    }
  ];

  // Fungsi untuk menghasilkan HTML CV
  const generateCVHTML = () => {
    return `
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CV - Joni Yoga Kusuma</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          h1, h2 {
            color: #4f46e5;
          }
          .section {
            margin-bottom: 30px;
          }
          .item {
            margin-bottom: 20px;
            padding-left: 20px;
            border-left: 2px solid #4f46e5;
          }
          .title {
            font-weight: bold;
            margin-bottom: 5px;
          }
          .subtitle {
            color: #666;
            font-size: 0.9em;
          }
          .period {
            color: #888;
            font-size: 0.8em;
          }
          .description {
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <h1>Curriculum Vitae</h1>
        <div class="section">
          <h2>Pengalaman Kerja</h2>
          ${experiences.map(exp => `
            <div class="item">
              <div class="title">${exp.title}</div>
              <div class="subtitle">${exp.company}</div>
              <div class="period">${exp.period}</div>
              <div class="description">${exp.description}</div>
            </div>
          `).join('')}
        </div>

        <div class="section">
          <h2>Pendidikan</h2>
          ${education.map(edu => `
            <div class="item">
              <div class="title">${edu.school}</div>
              <div class="subtitle">${edu.degree}</div>
              <div class="period">${edu.period}</div>
              <div class="description">${edu.description}</div>
            </div>
          `).join('')}
        </div>

        <div class="section">
          <h2>Sertifikasi</h2>
          ${certifications.map(cert => `
            <div class="item">
              <div class="title">${cert.name}</div>
              <div class="subtitle">${cert.issuer}</div>
              <div class="period">${cert.year}</div>
            </div>
          `).join('')}
        </div>
      </body>
      </html>
    `;
  };

  // Fungsi untuk men-download CV
  const downloadCV = () => {
    const cvHTML = generateCVHTML();
    const blob = new Blob([cvHTML], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV_JoniYogaKusuma.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
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
              Pengalaman Kerja
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