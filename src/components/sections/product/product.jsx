import React, { useEffect, useState, useRef } from 'react';
import image from '../../../img/product.jpg'; // Путь к картинке
import './product.css';

const Product = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const handleScroll = (event) => {
    event.preventDefault(); 
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      id="product"
      className={`product ${isInView ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <div className="left-container">
        <img src={image} alt="Описание изображения" />
      </div>
      <div className="right-container">
        <h1>Розовый ананас - экзотика для ценителей</h1>
        <p>
          Познакомьтесь с настоящим произведением природы — розовым
          ананасом. Этот редкий фрукт не только поражает своим нежным
          оттенком, но и обладает уникальным сладким вкусом с тонкими
          нотками тропиков.
        </p>
        <button id="prod" onClick={handleScroll}>
          Заказать
        </button>
      </div>
    </section>
  );
};

export default Product;
