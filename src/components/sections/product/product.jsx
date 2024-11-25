import React from 'react';
import image from '../../img/product.jpg'; // Путь к картинке

const Product = () => (
  <section id="product" className='product'>
    
    <div className="left-container">
    <img src={image} alt="Описание изображения" />
    </div>
    <div className="right-container">
      <h1>Розовый ананас - экзотика для ценителей</h1>
      <p>Познакомьтесь с настоящим произведением природы — розовым<br/>
ананасом. Этот редкий фрукт не только поражает своим нежным<br/>
оттенком, но и обладает уникальным сладким вкусом с тонкими<br/>
нотками тропиков.
</p>
<a href="#order">
        <button id="prod">Заказать</button>
      </a>

    </div>
  </section>
);

export default Product;
