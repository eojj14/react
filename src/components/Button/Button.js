import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'reactstrap';
import getImage from '../../../images/index';
import classes from './Button.scss';

const Button = (props) => {
  const {
    href,
    target,
    text,
  } = props;

  return (
    <a
      href={href}
      target={target}
    >
      <button
        className={classes.container}
        type='button'
        style={{ backgroundImage: `url(${getImage('dog')})`, backgroundPosition: 'center' }}
      >
        {text}
        <FontAwesomeIcon icon={faCoffee} className={classes.icon} />
        <Badge color="secondary">New</Badge>
      </button>
    </a>
  );
};

Button.defaultProps = {
  target: '_blank'
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Button;
