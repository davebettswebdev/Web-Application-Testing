import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Dashboard buttons are rendered', () => {
  const { getByText } = render(<App />);

  getByText('Strike');
  getByText('Ball');
  getByText('Foul');
  getByText('Hit');
});

test('Display renders', () => {
  const { getByText } = render(<App />);

  getByText('Strikes: 0');
  getByText('Balls: 0');
});

