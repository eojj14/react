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
    onClick,
  } = props;

  const isLink = href && href !== null;
  const isClick = onClick && onClick !== null;
  const Container = isLink ? 'a' : 'div';

  return (
    <Container
      className={classes.container}
      href={isLink ? href : null}
      target={isLink ? target : null}
    >
      <button
        type='button'
        onClick={isClick ? onClick : null}
      >
        {iconLeft && <FontAwesomeIcon icon={iconLeft} className={classes.iconLeft} />}
        {text && <div className={classes.text}>{text}</div>}
        {iconRight && <FontAwesomeIcon icon={iconRight} className={classes.iconRight} />}
      </button>
    </Container>
  );
};

Button.defaultProps = {
  target: '_blank',
  href: null,
  text: '',
  iconRight: null,
  iconLeft: null,
  onClick: null
};

Button.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string,
  iconRight: PropTypes.array,
  iconLeft: PropTypes.array,
  onClick: PropTypes.func
};

export default Button;
