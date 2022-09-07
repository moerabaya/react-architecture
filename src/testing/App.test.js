import React from 'react';
import ReactDOM from 'react-dom';
import Tests from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tests />, div);
});
