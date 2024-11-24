import React from "react";


const Header = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <nav className="navigate">
        <ul className="nav-list">
          <li onClick={() => handleScroll("contacts")}>контакты</li>
          <li onClick={() => handleScroll("about")}>О нас</li>
          <li onClick={() => handleScroll("order")}>Заказ</li>
          <li onClick={() => handleScroll("main")}>Главная</li>
          <li onClick={() => handleScroll("product")}>Товары</li>
          <li onClick={() => handleScroll("our_advantages")}>Наши преимущества</li>
          <li onClick={() => handleScroll("reviews")}>Отзывы</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
