import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <svg className="header__icon">
          <use xlinkHref="images/sprite.svg#icon-freecodecamp" />
        </svg>
        FreeCodeCamp Leaderboard
      </h1>
    </header>
  );
};

export default Header;
