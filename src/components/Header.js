import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <svg className="header__icon">
          <use xlinkHref="images/sprite.svg#icon-freecodecamp" />
        </svg>
        FreeCodeCamp
      </h1>
      <h2>Leaderboard</h2>
    </header>
  );
};

export default Header;
