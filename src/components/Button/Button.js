import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Button.scss';

const Button = (props) => {
  const {
    href,
    target,
    text,
    iconRight,
    iconLeft,
  } = props;

  return (
    <a
      href={href}
      target={target}
    >
      <button
        type='button'
        className={classes.container}
      >
        {iconLeft && <FontAwesomeIcon icon={iconLeft} className={classes.iconLeft} />}
        {text && <div className={classes.text}>{text}</div>}
        {iconRight && <FontAwesomeIcon icon={iconRight} className={classes.iconRight} />}
      </button>
    </a>
  );
};

Button.defaultProps = {
  target: '_blank',
  iconRight: null,
  iconLeft: null,
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  text: PropTypes.string.isRequired,
  iconRight: PropTypes.array,
  iconLeft: PropTypes.array,
};

export default Button;
