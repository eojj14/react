import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import classes from './Button.scss';

const Button = (props) => {
  const {
    href,
    target,
    text,
    iconRight,
    iconLeft,
    onClick,
    disabled,
  } = props;

  const isLink = href && href !== null;
  const Container = isLink ? 'a' : 'div';

  return (
    <Container
      className={classNames(classes.container, {[classes.disabled]: disabled})}
      href={href}
      target={target}
    >
      <button
        type='button'
        onClick={onClick}
        disabled={disabled}
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
  onClick: null,
  disabled: false,
};

Button.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string,
  iconRight: PropTypes.array,
  iconLeft: PropTypes.array,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;
