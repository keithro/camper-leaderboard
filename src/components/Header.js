import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__main">
        <svg className="header__icon">
          <use xlinkHref="images/sprite.svg#icon-freecodecamp" />
        </svg>
        FreeCodeCamp
      </h1>
      <h2 className="header__sub">Leaderboard</h2>
    </header>
  );
};

export default Header;
