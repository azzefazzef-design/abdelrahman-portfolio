import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import { FaPenNib, FaCameraRetro, FaMagic } from 'react-icons/fa'; 
import Modal from '../components/Modal';

const About = ({ translations }) => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const softwareSkills = [
    { name: 'Photoshop', icon: <FaCameraRetro /> },
    { name: 'Illustrator', icon: <FaPenNib /> }, 
    { name: 'InDesign', icon: <FaPenNib /> },
    { name: 'After Effects', icon: <FaMagic /> },
    { name: 'CorelDRAW', icon: <FaPenNib /> },
    { name: 'CapCut', icon: <FaMagic /> },
  ];
  const cvFile = { title: "My CV", pdf: "/assets/my-cv.pdf" };

  // --- نفس الدالة هنا كمان ---
  const isMobile = () => window.innerWidth <= 768;

  const handleCvClick = () => {
    if (isMobile()) {
      window.open(cvFile.pdf, '_blank');
    } else {
      setIsCvModalOpen(true);
    }
  };

  return (
    <>
      <section className={styles.aboutSection}>
        <motion.div 
          className={styles.aboutCard}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.aboutText}>
            <h2>{translations.title}</h2>
            <p>{translations.paragraph}</p>
            <button 
              onClick={handleCvClick} // <-- استخدمنا الدالة الجديدة هنا
              className={styles.cvButton}
            >
              {translations.cvButton}
            </button>
          </div>
          <div className={styles.skills}>
            <h3>{translations.softwareTitle}</h3>
            <div className={styles.softwareGrid}>
              {softwareSkills.map(skill => (
                <div key={skill.name} className={styles.softwareItem}>
                  {skill.icon}<span>{skill.name}</span>
                </div>
              ))}
            </div>
            <div className={styles.personalSkills}>
              {translations.personalSkills.map(skill => (<span key={skill} className={styles.skillTag}>{skill}</span>))}
            </div>
          </div>
        </motion.div>
      </section>
      {isCvModalOpen && <Modal project={cvFile} onClose={() => setIsCvModalOpen(false)} />}
    </>
  );
};

export default About;