import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Dropdown';
import './index.scss';

const btn = <button className="button">Toggle component</button>;

function Example() {
  return (
    <React.Fragment>
      <div className="container">
        <Dropdown align="left" toggle={btn}>
          <div className="content">
            <ul>
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
          </div>
        </Dropdown>
      </div>

      <div className="container">
        <Dropdown toggle={<button className="button">Toggle</button>}>
          <div className="content" style={{ minWidth: '500px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Dropdown>
      </div>
    </React.Fragment>
  );
}

ReactDOM.render(<Example />, document.getElementById('root'));
