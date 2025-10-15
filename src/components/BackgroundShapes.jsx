import React, { useEffect, useRef } from 'react';
import styles from './BackgroundShapes.module.css';

const BackgroundShapes = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = (clientY / window.innerHeight) * 2 - 1;
      const shapes = containerRef.current.children;
      if (shapes[0]) shapes[0].style.transform = `translate(${x * -20}px, ${y * 15}px)`; // Crop Mark
      if (shapes[1]) shapes[1].style.transform = `translate(${x * 30}px, ${y * -25}px) rotate(${x * 10}deg)`; // CMYK circles
      if (shapes[2]) shapes[2].style.transform = `translate(${x * 15}px, ${y * 40}px)`; // Triangle
      if (shapes[3]) shapes[3].style.transform = `translate(${x * -35}px, ${y * -10}px)`; // SVG Curve
      if (shapes[4]) shapes[4].style.transform = `translate(${x * 50}px, ${y * -20}px) rotate(${x * -15}deg)`;// Plus
      if (shapes[5]) shapes[5].style.transform = `translate(${x * -15}px, ${y * 25}px)`; // Line
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className={styles.shapesContainer}>
      <div className={`${styles.shape} ${styles.cropMark}`}></div>
      <div className={`${styles.shape} ${styles.cmykCircles}`}><div></div><div></div><div></div></div>
      <div className={`${styles.shape} ${styles.triangle}`}></div>
      <div className={`${styles.shape} ${styles.svgCurve}`}>
        <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0,50 Q 50,0 100,50" stroke="var(--surface-color)" strokeWidth="1"/>
        </svg>
      </div>
      <div className={`${styles.shape} ${styles.plus}`}></div>
      <div className={`${styles.shape} ${styles.line}`}></div>
    </div>
  );
};
export default BackgroundShapes;