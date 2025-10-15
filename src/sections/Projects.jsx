import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, categories } from '../data/projects';
import Modal from '../components/Modal';
import styles from './Projects.module.css';
import { FaTag, FaShareAlt, FaDesktop, FaPrint, FaEllipsisH } from 'react-icons/fa';

const categoryIcons = {
  Branding: <FaTag />,
  "Social Media": <FaShareAlt />,
  "UI/UX": <FaDesktop />,
  Printing: <FaPrint />,
  Other: <FaEllipsisH />
};

const Projects = ({ translations }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  // --- دالة بسيطة عشان نعرف احنا على موبايل ولا لأ ---
  const isMobile = () => window.innerWidth <= 768;

  const handleProjectClick = (project) => {
    if (isMobile()) {
      // لو على الموبايل، افتح الـ PDF في تاب جديد
      window.open(project.pdf, '_blank');
    } else {
      // لو على الكمبيوتر، افتح الشاشة المنبثقة
      setSelectedProject(project);
    }
  };

  return (
    <>
      <section className={styles.projects}>
        <motion.h1 
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {translations.title}
        </motion.h1>

        {categories.map((category, index) => {
          const categoryProjects = projects.filter(p => p.category === category);
          if (categoryProjects.length === 0) return null;

          return (
            <div key={index} className={styles.categorySection}>
              <motion.div 
                className={styles.categoryTitle}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {categoryIcons[category]}
                <h2>{category}</h2>
              </motion.div>
              <div className={styles.projectsList}>
                {categoryProjects.map(project => (
                  <motion.div 
                    key={project.id} 
                    className={styles.projectCard} 
                    onClick={() => handleProjectClick(project)} // <-- استخدمنا الدالة الجديدة هنا
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <img src={project.cover} alt={project.title} />
                    <div className={styles.cardOverlay}><h3>{project.title}</h3></div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
      {selectedProject && <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
};

export default Projects;