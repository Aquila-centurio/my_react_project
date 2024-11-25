import React, { useState } from 'react';
import './reviews.css'

const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [review, setReview] = useState('');

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Спасибо за ваш отзыв: "${review}"`);
    setReview('');
    setIsModalOpen(false);
  };

  return (
    <section id="reviews">
      <h1>Отзывы наших клиентов</h1>
      <div className="reviews-container">
        <p className="review">
          Анна, 32 года<br />
          "Розовые ананасы — это любовь с первого взгляда! Заказала для праздника, и гости были в восторге."
        </p>
        <p className="review">
          Игорь, 41 год<br />
          "Идеальный подарок! Никогда не думал, что ананас может быть таким стильным. Понравилось всё: от вкуса до упаковки."
        </p>
        <p className="review">
          Марина, 27 лет<br />
          "Заказывала ананасы для фотосессии — это просто находка! Настоящий эксклюзив, который хочется попробовать снова и снова."
        </p>
        <p className="review">
          Олег, 35 лет<br />
          "Решил удивить жену и угадал! Доставка быстрая, ананасы — произведение искусства. Рекомендую всем, кто хочет чего-то особенного."
        </p>
      </div>
      <button type="button" onClick={handleOpenModal}>
        Оставить отзыв
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Оставьте отзыв</h2>
            <form onSubmit={handleSubmit}>
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
