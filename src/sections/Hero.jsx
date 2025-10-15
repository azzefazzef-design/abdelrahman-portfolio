import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaBehance } from 'react-icons/fa';
import styles from './Hero.module.css';

// --- هنا التعديل: استقبلنا lang ---
const Hero = ({ translations, lang }) => {
  const [sloganIndex, setSloganIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSloganIndex(prevIndex => (prevIndex + 1) % translations.slogans.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [translations.slogans.length]);

  return (
    // --- هنا التعديل: استخدمنا lang لتحديد الاتجاه ---
    <section className={styles.hero} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <motion.div 
        className={styles.imageContainer} 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <img src="/assets/profile-pic.png" alt={translations.name} />
      </motion.div>
      <div className={styles.textContainer}>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {translations.name}
        </motion.h1>

        <motion.p 
          className={styles.title}
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {translations.title}
        </motion.p>

        <div className={styles.sloganContainer}>
          <AnimatePresence mode="wait">
            <motion.p
              key={sloganIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.slogan}
            >
              "{translations.slogans[sloganIndex]}"
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div 
          className={styles.socialIcons}
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href={translations.socials.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href={translations.socials.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href={translations.socials.behance} target="_blank" rel="noopener noreferrer"><FaBehance /></a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;