import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Закрываем меню после выбора на мобильных устройствах
    }
  };

  return (
    <header className="header">
      <button className="burger" onClick={toggleMenu} aria-label="Toggle menu">
        ☰
      </button>
      <nav className={`navigate ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li onClick={() => handleScroll("main")}>Главная</li>
          <li onClick={() => handleScroll("about")}>О нас</li>
          <li onClick={() => handleScroll("our_advantages")}>Наши преимущества</li>
          <li onClick={() => handleScroll("product")}>Товары</li>
          <li onClick={() => handleScroll("Galery")}>Фото</li>
          <li onClick={() => handleScroll("order")}>Заказ</li>
          <li onClick={() => handleScroll("reviews")}>Отзывы</li>
          <li onClick={() => handleScroll("contacts")}>Контакты</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
