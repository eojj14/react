import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Item.scss';
import Button from '../Button/Button';

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: props.item,
    }

    this.handleTitle = this.handleTitle.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
    this.clearInputs = this.clearInputs.bind(this);

    this.titleRef = React.createRef();
    this.focus = this.focus.bind(this);

  }

  handleTitle(e) {
    const { item } = this.state;
    let newItem = item;
    newItem.title = e.target.value;

    this.setState({
      item: newItem
    })
  }

  handleCompleted(e) {
    const { item } = this.state;
    let newItem = item;
    newItem.completed = e.target.checked;

    this.setState({
      item: newItem
    })
  }

  handleDetails(e) {
    const { item } = this.state;
    let newItem = item;
    newItem.details = e.target.value;

    this.setState({
      item: newItem
    })
  }

  clearInputs() {
    this.setState({
      item: { title: '', details: '', completed: false }
    })
  }

  isDisabled() {
    const { item } = this.state;
    return !item || !item.title.trim();
  }

  focus() {
    this.titleRef.current.focus();
  }

  render() {
    const { item } = this.state;
    const { handleAddClick } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.headerRow}>
          <input
            autoFocus
            name='title'
            id='title'
            ref={this.titleRef}
            className={classNames(classes.title, { [classes.required]: this.isDisabled() })}
            type='text'
            placeholder='Title'
            value={item.title}
            onChange={(e) => this.handleTitle(e)}
          />
          <label htmlFor='completed' className={classes.completed}>
            <input
              id='completed'
              name='completed'
              type='checkbox'
              value='Completed'
              checked={item.completed}
              onChange={(e) => this.handleCompleted(e)}
            />
            Completed
          </label>
        </div>
        <div className={classes.detailRow}>
          <textarea
            className={classes.details}
            rows='6'
            placeholder='Details'
            value={item.details}
            onChange={(e) => this.handleDetails(e)}
          />
        </div>
        <Button
          tabIndex={0}
          text='Add Item'
          iconLeft={['fas', 'plus']}
          disabled={this.isDisabled()}
          onClick={() => { handleAddClick(item); this.clearInputs(); this.focus(); }}
        />
      </div>
    )
  }

}

Item.defaultProps = {
  handleAddClick: null,
  item: {
    title: '',
    completed: false,
    details: '',
  },
};

Item.propTypes = {
  handleAddClick: PropTypes.func,
  item: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    details: PropTypes.string,
  }),
};

export default Item;