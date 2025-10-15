import React from 'react';
import { motion } from 'framer-motion';
import styles from './Quote.module.css';

const Quote = ({ translations }) => {
  return (
    <motion.section 
      className={styles.quoteSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.quoteWrapper}>
        <blockquote className={styles.quote}>
          "{translations.text}"
        </blockquote>
        <cite className={styles.author}>- {translations.author}</cite>
      </div>
    </motion.section>
  );
};

export default Quote;