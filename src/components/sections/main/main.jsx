import React from 'react';
import './main.css';

const Main = () => {
  const handleLearnMore = () => {
    const productSection = document.getElementById('product');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="main">
      <h1>Фрукт экзотический <br />Вкус феерический!</h1>
      <button className="learn-more" onClick={handleLearnMore}>
      Узнать подробнее
      </button>
      <p>Продажа уникальных розовых ананасов в Екатеринбурге</p>
      
       
    </section>
  );
};

export default Main;
