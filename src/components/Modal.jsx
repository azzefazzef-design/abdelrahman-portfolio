import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Modal.module.css';

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className={styles.backdrop} 
        onClick={onClose} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className={styles.modalContent} 
          onClick={(e) => e.stopPropagation()} 
          initial={{ y: "-100vh" }} 
          animate={{ y: 0 }} 
          exit={{ y: "100vh" }}
        >
          <button className={styles.closeButton} onClick={onClose}>&times;</button>
          
          <h3>{project.title}</h3>
          
          <div className={styles.pdfContainer}>
            <object
              data={project.pdf + '#toolbar=0'} // <--- هذا هو السطر الذي تم تعديله
              type="application/pdf"
              width="100%"
              height="100%"
            >
              {/* هذا الكود البديل يظهر لو المتصفح فشل في عرض الملف، ولكن بدون زر تحميل مباشر  */}
              <div style={{ padding: '20px', textAlign: 'center' }}>
                  <p style={{ color: '#E0E0E0' }}>
                    عذراً، لم يتمكن المتصفح من العرض.
                  </p>
              </div>
            </object>
          </div>
          
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;