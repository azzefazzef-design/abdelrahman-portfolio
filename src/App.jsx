import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Quote from './sections/Quote';
import Contact from './sections/Contact';
import BackgroundShapes from './components/BackgroundShapes';
import CustomCursor from './components/CustomCursor'; // <-- استدعاء الماوس الجديد
import { translations } from './lang/translations';
import styles from './App.module.css';

function App() {
  const [lang, setLang] = useState('en');
  const [t, setT] = useState(translations.en);
  useEffect(() => {
    setT(translations[lang]);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);
  const toggleLanguage = () => {
    setLang(prevLang => (prevLang === 'en' ? 'ar' : 'en'));
  };
  return (
    <>
      <CustomCursor /> {/* <-- إضافة الماوس الجديد هنا */}
      <BackgroundShapes />
      <div className={styles.container}>
        <button onClick={toggleLanguage} className={styles.langButton}>{t.langButton}</button>
        <main>
          <Hero translations={t.hero} />
          <About translations={t.about} />
          <Projects translations={t.projects} />
          <Quote translations={t.quote} />
          <Contact translations={t} />
        </main>
        <footer className={styles.footer}>
          <p>{t.footer.rights} &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  )
}
export default App;