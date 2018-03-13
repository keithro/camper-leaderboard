import React from 'react';

const SocialWidget = () => {
  return (
    <div className="social-widget">
      <a href="http://www.keithrodriguez.me/" className="social-widget__icon-box">
        <svg className="social-widget__icon">
          <use xlinkHref="images/sprite.svg#icon-laptop" />
        </svg>
        my website
      </a>
      <a href="https://github.com/keithro" className="social-widget__icon-box">
        <svg className="social-widget__icon">
          <use xlinkHref="images/sprite.svg#icon-github" />
        </svg>
        github
      </a>
      <a href="https://www.linkedin.com/in/keithrodriguez/" className="social-widget__icon-box">
        <svg className="social-widget__icon">
          <use xlinkHref="images/sprite.svg#icon-linkedin" />
        </svg>
        linkedIn
      </a>
    </div>
  );
};

export default SocialWidget;
