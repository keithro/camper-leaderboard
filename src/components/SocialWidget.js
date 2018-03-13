import React from 'react';

const SocialWidget = () => {
  return (
    <div className="social-widget">
      <a href="http://www.keithrodriguez.me/" className="social-widget__icon-box">
        <svg className="social-widget__icon">
          <use xlinkHref="images/sprite.svg#icon-laptop" />
        </svg>
        <span>my website</span>
      </a>
      <a href="https://github.com/keithro" className="social-widget__icon-box">
        <svg className="social-widget__icon">
          <use xlinkHref="images/sprite.svg#icon-github" />
        </svg>
        <span>github</span>
      </a>
      <a href="https://www.linkedin.com/in/keithrodriguez/" className="social-widget__icon-box">
        <svg className="social-widget__icon">
          <use xlinkHref="images/sprite.svg#icon-linkedin" />
        </svg>
        <span>linkedIn</span>
      </a>
    </div>
  );
};

export default SocialWidget;
