import React from 'react';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './List.scss';
import ListItem from '../ListItem/ListItem';
import Item from '../Item/Item';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items,
      showDetail: true,
      showCompleted: true,
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
    this.handleShowDetail = this.handleShowDetail.bind(this);
    this.handleShowCompleted = this.handleShowCompleted.bind(this);
  }

  handleAdd(item) {
    let { items } = this.state;

    if (!items) {
      items = [];
    }

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

  handleShowDetail() {
    const { showDetail } = this.state;

    this.setState({
      showDetail: !showDetail,
    })
  }

  handleShowCompleted() {
    const { showCompleted } = this.state;

    this.setState({
      showCompleted: !showCompleted,
    })
  }

  render() {
    const { items, showDetail, showCompleted } = this.state;

    return (
      [
        items && items.length > 0 &&
          (
          <FontAwesomeIcon
            key='showDetailIcon'
            onClick={this.handleShowDetail}
            icon={showDetail ? ['fas', 'caret-down'] : ['fas', 'caret-right']}
            className={classes.listIconDetail}
          />
        ),
        items && items.length > 0 &&
          (
          <FontAwesomeIcon
            key='showCompletedIcon'
            onClick={this.handleShowCompleted}
            icon={showCompleted ? ['fas', 'check'] : ['fas', 'times']}
            className={classes.listIconCompleted}
          />
        ),
        <div className={classes.container} key='List'>
          {items && items.length > 0 &&
            (
              <ul className={classes.list}>
                {items.map((itm, idx) => {
                  const { title, details, completed } = itm;

                  return (
                    (!showCompleted && !completed || showCompleted) &&
                    (
                      <ListItem
                        title={title}
                        details={details}
                        completed={completed}
                        idx={idx}
                        handleCompleted={this.handleCompleted}
                        handleDelete={this.handleDelete}
                        showDetail={showDetail}
                        key={`list-item-${idx}`}
                      />
                    )
                  )})}
              </ul>
            )
          }
          {((items && items.length == 0) || !items) &&
            (
              <div className={classes.noItems}>
                No items were found.
                <br />
                Fill out the form below and click
                <b> Add Item </b>
                to add one.
              </div>
            )
          }
          <hr className={classes.hr} />
          <Item handleAddClick={this.handleAdd} />
        </div>
      ]
    )
  }

}

List.defaultProps = {
  items: null,
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    details: PropTypes.string,
  })),
};

export default List;