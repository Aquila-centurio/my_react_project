import React, { useState } from "react";
import "./contacts.css";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", phone: "", email: "", message: "" };

    // Проверка имени
    if (!formData.name) {
      newErrors.name = "Имя не может быть пустым";
      isValid = false;
    } else if (!/^[a-zA-Zа-яА-ЯёЁ]+$/.test(formData.name)) {
      newErrors.name = "Имя должно содержать только буквы";
      isValid = false;
    }

    // Проверка телефона
    if (!formData.phone) {
      newErrors.phone = "Телефон не может быть пустым";
      isValid = false;
    } else if (!/^\+7[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/.test(formData.phone) && !/^\+?\d{11}$/.test(formData.phone)) {
      newErrors.phone = "Телефон должен быть в формате +7XXXXXXXXXX или другом корректном формате";
      isValid = false;
    }

    // Проверка почты
    if (!formData.email) {
      newErrors.email = "Почта не может быть пустой";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Неверный формат почты";
      isValid = false;
    }

    // Проверка вопроса
    if (!formData.message) {
      newErrors.message = "Вопрос не может быть пустым";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Отправка формы - выводим данные в alert
      alert(`Форма отправлена:
Имя: ${formData.name}
Телефон: ${formData.phone}
Почта: ${formData.email}
Вопрос: ${formData.message}`);
    }
  };

  return (
    <div id="contacts">
      <div className="left-container">
        <div className="contact-info">
          <p>📍 <strong>Наш адрес:</strong><br />Екатеринбург, ул. Тропическая, д. 5</p>
          <p>📞 <strong>Телефон:</strong><br />+7 (900) 123-45-67</p>
          <p>📧 <strong>E-mail:</strong><br />hello@pinkpineapple.ru</p>
          <p>🕒 <strong>Часы работы:</strong><br />Пн—Пт: <span className="bold">9:00 — 20:00</span><br />Сб—Вс: <span className="bold">10:00 — 18:00</span></p>
          <p>Или оставьте сообщение через форму на<br/>сайте — мы ответим вам в течение часа!</p>
        </div>
      </div>

      <div className="right-container">
        <h1>Оставить обращение</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Имя
            <input 
              type="text" 
              name="name" 
              placeholder="Введите ваше имя" 
              value={formData.name} 
              onChange={handleChange} 
              className={errors.name ? "error-input" : ""}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </label>
          <label>
            Телефон
            <input 
              type="tel" 
              name="phone" 
              placeholder="Введите ваш телефон" 
              value={formData.phone} 
              onChange={handleChange} 
              className={errors.phone ? "error-input" : ""}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </label>
          <label>
            Почта
            <input 
              type="email" 
              name="email" 
              placeholder="Введите вашу почту" 
              value={formData.email} 
              onChange={handleChange} 
              className={errors.email ? "error-input" : ""}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </label>
          <label>
            Ваш вопрос
            <textarea 
              name="message" 
              placeholder="Введите ваш вопрос" 
              value={formData.message} 
              onChange={handleChange} 
              className={errors.message ? "error-input" : ""}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </label>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
