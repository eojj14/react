import React from 'react';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

  render() {
    const { items } = this.state;

    return (
      <div className={classes.container}>
        {items && items.length > 0 &&
          (
            <ul className={classes.list}>
              {items.map((itm, idx) => {
                return (
                  <li
                    className={classes.listItem}
                    key={`li-${idx}`}
                  >
                    <FontAwesomeIcon
                      icon={['fas', 'minus']}
                      key={`fa-${idx}`}
                      className={classes.addIcon}
                      onClick={() => this.handleDelete(idx)}
                    />
                    {itm.title}
                  </li>
                )
              })}
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
          onClick={() => this.handleAdd({ title: `Item ${items.length + 1}` })}
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
    title: PropTypes.string.isRequired
  })).isRequired,
};

export default List;