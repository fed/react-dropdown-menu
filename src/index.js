import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

class Dropdown extends React.Component {
  state = {
    open: false
  };

  toggle = () => {
    this.setState(
      prevState => ({
        open: !prevState.open
      }),
      () => {
        if (this.state.open) {
          window.addEventListener('click', this.handleClickOutside);
        } else {
          window.removeEventListener('click', this.handleClickOutside);
        }
      }
    );
  };

  /* If clicked element is not in the dropdown menu children, close menu */
  handleClickOutside = event => {
    const clickedOutside =
      event.target !== this.popover && !this.popover.contains(event.target);
    const clickedOnToggleElement = event.target === this.toggleElement;

    if (this.state.open && clickedOutside && !clickedOnToggleElement) {
      this.toggle();
    }
  };

  render() {
    const className = `Dropdown__popover ${this.state.open &&
      'Dropdown__popover--open'}`;

    // the menu is comprised of a toggle component and a popover body
    return (
      <React.Fragment>
        <button
          onClick={this.toggle}
          ref={toggle => {
            this.toggleElement = toggle;
          }}
        >
          Toggle component
        </button>
        <ul
          className={className}
          ref={popover => {
            this.popover = popover;
          }}
        >
          <li>
            <a href="https://google.com" target="_blank">
              Example 1
            </a>
          </li>
          <li>
            <button onClick={() => console.log('clicked')}>Button</button>
          </li>
          <li>Lorem ipsum</li>
        </ul>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Dropdown />, document.getElementById('root'));
