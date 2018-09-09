import React from 'react';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import classes from './List.scss';
import Button from '../Button/Button';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items,
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
  }

  handleAdd(item) {
    const { items } = this.state;
    let newItems = cloneDeep(items);

    newItems.push(item);

    this.setState({
      items: newItems,
    })
  }

  handleDelete(idx) {
    const { items } = this.state;
    let newItems = cloneDeep(items);

    newItems = newItems.slice(0, idx).concat(newItems.slice(idx + 1));

    this.setState({
      items: newItems,
    })
  }

  handleCompleted(idx) {
    const { items } = this.state;
    let newItems = cloneDeep(items);
    let newItem = newItems[idx];

    newItem.completed = !newItem.completed;

    this.setState({
      items: newItems,
    })
  }

  render() {
    const { items } = this.state;

    return (
      <div className={classes.container}>
        {items && items.length > 0 &&
          (
            <ul className={classes.list}>
              {items.map((itm, idx) => {
                return (
                  <div
                    className={classes.listItemGroup}
                    key={`item-group-${idx}`}
                  >
                    <FontAwesomeIcon
                      icon={['fas', 'times']}
                      className={classes.deleteIcon}
                      onClick={() => this.handleDelete(idx)}
                    />
                    <button
                      type='button'
                      className={classNames(classes.listItem, { [classes.listItemCompleted]: itm.completed})}
                      key={`list-item-${idx}`}
                      onClick={() => this.handleCompleted(idx)}
                    >
                      {itm.title &&
                      (
                        <div className={classes.title}>
                          {itm.title}
                          {itm.completed &&
                            (
                              <FontAwesomeIcon
                                icon={['fas', 'check']}
                                className={classes.completedIcon}
                              />
                            )}
                        </div>
                      )}
                      {itm.details && <div className={classes.details}>{itm.details}</div>}
                    </button>
                  </div>
                )})}
            </ul>
          )
        }
        {items && items.length == 0 &&
          (
            <div className={classes.noItems}>
              No items. Click
              <b> Add Item </b>
              to add one.
            </div>
          )
        }
        <Button
          text='Add Item'
          iconLeft={['fas', 'plus']}
          onClick={() => this.handleAdd({ title: `Item ${items.length + 1}`, completed: false, details: 'Some more details.' })}
          key='1'
        />
      </div>
    )
  }

}

List.defaultProps = {

};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    details: PropTypes.string,
  })).isRequired,
};

export default List;