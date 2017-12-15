import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Dropdown';
import './index.scss';

const btn = <button className="Button">Toggle component</button>;

function Example() {
  return (
    <div className="container">
      <Dropdown toggle={btn}>
        <div className="List">
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
  );
}

ReactDOM.render(<Example />, document.getElementById('root'));
