import React, { useState } from 'react';
import './reviews.css';

const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [review, setReview] = useState('');
  const [name, setName] = useState('');

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setReview('');
    setName('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Спасибо, ${name}, за ваш отзыв: "${review}"`);
    setReview('');
    setName('');
    setIsModalOpen(false);
  };

  return (
    <section id="reviews">
      <h1>Отзывы наших клиентов</h1>
      <div className="reviews-container">
        <div className="review">
          <div className="avatar">
            <i className="fas fa-user-circle"></i>
          </div>
          <p>
            <strong>Анна, 32 года</strong><br />
            "Розовые ананасы — это любовь с первого взгляда! Заказала для праздника, и гости были в восторге."
          </p>
        </div>
        <div className="review">
          <div className="avatar">
            <i className="fas fa-user-circle"></i>
          </div>
          <p>
            <strong>Игорь, 41 год</strong><br />
            "Идеальный подарок! Никогда не думал, что ананас может быть таким стильным. Понравилось всё: от вкуса до упаковки."
          </p>
        </div>
        <div className="review">
          <div className="avatar">
            <i className="fas fa-user-circle"></i>
          </div>
          <p>
            <strong>Марина, 27 лет</strong><br />
            "Заказывала ананасы для фотосессии — это просто находка! Настоящий эксклюзив, который хочется попробовать снова и снова."
          </p>
        </div>
        <div className="review">
          <div className="avatar">
            <i className="fas fa-user-circle"></i>
          </div>
          <p>
            <strong>Олег, 35 лет</strong><br />
            "Решил удивить жену и угадал! Доставка быстрая, ананасы — произведение искусства. Рекомендую всем, кто хочет чего-то особенного."
          </p>
        </div>
      </div>
      <button type="button" onClick={handleOpenModal}>
        Оставить отзыв
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Оставьте отзыв</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <textarea
                placeholder="Напишите ваш отзыв здесь..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              ></textarea>
              <div className="modal-buttons">
                <button type="submit" className="submit-button">
                  Отправить
                </button>
                <button
                  type="button"
                  className="close-button"
                  onClick={handleCloseModal}
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;
