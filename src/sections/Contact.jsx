import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion'; // استدعاء motion
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ translations }) => {
  const { contact } = translations;
  const whatsappNumber = contact.whatsapp.replace('+', '');
  const sectionRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const onMouseMove = (e) => {
      buttonsRef.current.forEach(btn => {
        if (!btn) return;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.25}px)`;
      });
    };
    const onMouseLeave = () => {
      buttonsRef.current.forEach(btn => {
        if (!btn) return;
        btn.style.transform = `translate(0, 0)`;
      });
    };
    section.addEventListener('mousemove', onMouseMove);
    section.addEventListener('mouseleave', onMouseLeave);
    return () => {
      section.removeEventListener('mousemove', onMouseMove);
      section.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.contact}>
      <div className={styles.titleWrapper}>
        <p className={styles.preTitle}>{translations.contact.preTitle}</p>
        <h2 className={styles.heading}>{translations.contact.title}</h2>
      </div>

      {/* إضافة motion.div هنا */}
      <motion.div 
        className={styles.linksContainer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <a ref={el => buttonsRef.current[0] = el} href={`mailto:${contact.email}`} className={styles.contactLink}>
          <FaEnvelope /> <span>{contact.email}</span>
        </a>
        <a ref={el => buttonsRef.current[1] = el} href={`tel:${contact.phone}`} className={styles.contactLink}>
          <FaPhone /> <span>{contact.phone}</span>
        </a>
        <a ref={el => buttonsRef.current[2] = el} href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
          <FaWhatsapp /> <span>WhatsApp</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;