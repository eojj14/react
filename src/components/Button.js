import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.scss';

const Button = (props) => {

  const { 
    href,
    target = '_blank',
    text
  } = props;

  return (
    <a
      href = {href}
      target = {target}
    >
      <button
        className={classes.button}
        type = 'button'
      >
        {text}
      </button>
    </a>
  )
}

Button.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Button;