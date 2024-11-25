import React from 'react';
import image from '../../../img/product.jpg'; // Путь к картинке
import './product.css';

const Product = () => {
  const handleScroll = (event) => {
    event.preventDefault(); // Предотвращает стандартное поведение ссылки
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="product" className="product">
      <div className="left-container">
        <img src={image} alt="Описание изображения" />
      </div>
      <div className="right-container">
        <h1>Розовый ананас - экзотика для ценителей</h1>
        <p>
          Познакомьтесь с настоящим произведением природы — розовым
          <br />
          ананасом. Этот редкий фрукт не только поражает своим нежным
          <br />
          оттенком, но и обладает уникальным сладким вкусом с тонкими
          <br />
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
