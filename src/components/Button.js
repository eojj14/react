import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'reactstrap';
import classes from './Button.scss';

const Button = (props) => {
  const {
    href,
    target = '_blank',
    text,
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
        <FontAwesomeIcon icon={faCoffee} />
        <Badge color="secondary">New</Badge>
      </button>
    </a>
  );
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Button;
