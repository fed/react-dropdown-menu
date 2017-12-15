import React from 'react';
import classnames from 'classnames';
import './Dropdown.scss';

export default class Dropdown extends React.Component {
  static defaultProps = {
    align: 'center'
  };

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
    const clickedOnToggleElement = event.target === this.toggleRef;
    const clickedOutside =
      event.target !== this.popoverRef &&
      !this.popoverRef.contains(event.target);

    if (this.state.open && clickedOutside && !clickedOnToggleElement) {
      this.close();
    }
  };

  render() {
    const toggleElement = React.cloneElement(this.props.toggle, {
      onClick: this.state.open ? this.close : this.open,
      ref: node => {
        this.toggleRef = node;
      }
    });
    const popoverElement = React.cloneElement(this.props.children, {
      className: classnames(
        this.props.children.props.className,
        'Dropdown__popover',
        {
          'Dropdown__popover--open': this.state.open,
          'Dropdown__popover--left': this.props.align === 'left',
          'Dropdown__popover--center': this.props.align === 'center'
        }
      ),
      ref: node => {
        this.popoverRef = node;
      }
    });

    return (
      <span className="Dropdown">
        {toggleElement}
        {popoverElement}
      </span>
    );
  }
}
