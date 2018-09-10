import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import classes from './ListItem.scss';

const ListItem = (props) => {

  const {
    title,
    completed,
    details,
    idx,
    handleCompleted,
    handleDelete
  } = props;

  return (
    <div
      className={classes.listItemGroup}
      key={`list-item-group-${idx}`}
    >
      <FontAwesomeIcon
        icon={['fas', 'times']}
        className={classes.deleteIcon}
        onClick={() => handleDelete(idx)}
      />
      <button
        type='button'
        className={classNames(classes.listItem, { [classes.listItemCompleted]: completed})}
        key={`list-item-${idx}`}
        onClick={() => handleCompleted(idx)}
      >
        {title &&
        (
          <div className={classes.title}>
            {title}
            {completed &&
              (
                <FontAwesomeIcon
                  icon={['fas', 'check']}
                  className={classes.completedIcon}
                />
              )}
          </div>
        )}
        {details && <div className={classes.details}>{details}</div>}
      </button>
    </div>
  )
}

ListItem.defaultProps = {
  title: '',
  completed: false,
  details: '',
  idx: null,
  handleDelete: null,
  handleCompleted: null,
};

ListItem.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool,
  details: PropTypes.string,
  idx: PropTypes.number,
  handleDelete: PropTypes.func,
  handleCompleted: PropTypes.func,
};

export default ListItem;