import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

export default class Dropdown extends React.Component {
  state = {
    open: false
  };

  open = () => {
    this.setState({ open: true }, () => {
      window.addEventListener('click', this.handleClickOutside);
    });
  };

  close = () => {
    this.setState({ open: false }, () => {
      window.removeEventListener('click', this.handleClickOutside);
    });
  };

  /* If clicked element is not in the dropdown menu children, close menu */
  handleClickOutside = event => {
    const clickedOutside =
      event.target !== this.popover && !this.popover.contains(event.target);
    const clickedOnToggleElement = event.target === this.toggleElement;

    if (this.state.open && clickedOutside && !clickedOnToggleElement) {
      this.close();
    }
  };

  render() {
    const toggleElement = React.cloneElement(this.props.toggle, {
      onClick: this.state.open ? this.close : this.open,
      ref: toggle => {
        this.toggleElement = toggle;
      }
    });
    const popoverElement = React.cloneElement(this.props.children, {
      className: `Dropdown__popover ${
        this.state.open ? 'Dropdown__popover--open' : ''
      }`,
      ref: popover => {
        this.popover = popover;
      }
    });

    return (
      <React.Fragment>
        {toggleElement}
        {popoverElement}
      </React.Fragment>
    );
  }
}
