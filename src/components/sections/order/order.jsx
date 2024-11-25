import React from 'react';
import './order.css'
const Order = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Имитация отправки данных
    alert(
      `Данные заказа:\n` +
      `Имя: ${data.firstName}\n` +
      `Фамилия: ${data.lastName}\n` +
      `Адрес: ${data.address}\n` +
      `Email: ${data.email}\n` +
      `Телефон: ${data.phone}\n` +
      `Количество: ${data.quantity}\n` +
      `Способ оплаты: ${data.paymentMethod}`
    );
  };

  return (
    <section id="order" className="order">
      <h2>Оформление заказа</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Имя</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            placeholder="Введите имя"
          />
        </div>

        <div>
          <label htmlFor="lastName">Фамилия</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            placeholder="Введите фамилию"
          />
        </div>

        <div>
          <label htmlFor="address">Адрес</label>
          <input
            type="text"
            id="address"
            name="address"
            required
            placeholder="Введите адрес"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Введите email"
          />
        </div>

        <div>
          <label htmlFor="phone">Телефон</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            pattern="^\+?[0-9]{10,15}$"
            placeholder="Введите номер телефона"
          />
        </div>

        <div>
          <label htmlFor="quantity">Количество</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            required
            min="1"
            placeholder="Введите количество"
          />
        </div>

        <div>
          <label htmlFor="paymentMethod">Способ оплаты</label>
          <select id="paymentMethod" name="paymentMethod" required>
            <option value="card">Карта</option>
            <option value="cash_on_delivery">При получении</option>
            <option value="sbp">СБП</option>
          </select>
        </div>

        <button type="submit">Оформить заказ</button>
      </form>
    </section>
  );
};

export default Order;
