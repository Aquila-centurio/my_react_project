import React, { useEffect, useRef, useState } from 'react';
import './advantages.css';

const OurAdvantages = () => {
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
      id="our_advantages"
      className={`our-advantages-section ${isInView ? 'animate' : ''}`}
      ref={sectionRef}
    >
      <h1>Почему мы?</h1>
      <h3>
        Потому что мы знаем толк в совершенстве. Только свежие, отборные розовые ананасы,
        которые станут жемчужиной вашего стола. Никакой суеты — только вкус, стиль и доставка
        точно в срок. Выбирая нас, вы выбираете экзотику без компромиссов.
      </h3>
    </section>
  );
};

export default OurAdvantages;
