import React, { useEffect, useState, useRef } from 'react';
import './about.css';

const About = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); 
        }
      },
      {
        threshold: 0.5, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className={`about-section ${isInView ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <div className="left-container">
        <h1 className="transition-header">О нас</h1>
      </div>
      <div className="right-container">
        <p>
          Мы — единственные в Екатеринбурге, кто
          <br />
          привозит розовые ананасы,
          <br />
          выращенные с любовью на солнечных
          <br />
          плантациях. Наши ананасы — это не
          <br />
          просто экзотика, а символ роскоши, вкуса
          <br />
          и утончённости. Мы знаем, что вы устали
          <br />
          от серости и однообразия. Наши фрукты
          <br />
          — билет в мир ярких эмоций и
          <br />
          незабываемых моментов.
          <br />
          <br />
          Каждый розовый ананас — маленькое
          <br />
          произведение искусства, созданное
          <br />
          природой и доведённое до
          <br />
          совершенства нами. Мы выбираем
          <br />
          только лучшее, чтобы вы могли
          <br />
          наслаждаться уникальным вкусом и
          <br />
          стилем. Добро пожаловать в мир, где
          <br />
          розовые ананасы правят балом!
        </p>
      </div>
    </section>
  );
};

export default About;
