import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: 'fab fa-html5', color: 'text-orange-500' },
    { name: 'CSS', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400' },
    { name: 'PHP', icon: 'fab fa-php', color: 'text-indigo-400' },
    { name: 'React', icon: 'fab fa-react', color: 'text-blue-400' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500' },
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-red-500' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-100">Keahlian</h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="flex flex-col items-center p-6 glass-card rounded-lg"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <i className={`${skill.icon} text-4xl ${skill.color} mb-4`}></i>
              <h3 className="text-gray-200 font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;