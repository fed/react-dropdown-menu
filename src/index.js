import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Dropdown';

const btn = <button>Toggle component</button>;

function Example() {
  return (
    <Dropdown toggle={btn}>
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
    </Dropdown>
  );
}

ReactDOM.render(<Example />, document.getElementById('root'));
