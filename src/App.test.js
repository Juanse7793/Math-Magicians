import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Calculator from './pages/CalculatorP';

describe('App interaction', () => {
  it('renders the home page', () => {
    render(<App />);
    expect(document.body.textContent).toMatch(/Math Magicians/i);
  });

  it('contains the correct link to calculator page', () => {
    render(<App />);
    const navLinkCalculator = document.querySelector('[href="/calculator"]');
    expect(navLinkCalculator.innerHTML).toMatch(/Calculator/i);
  });

  it('displays 1 on calculator display when key 1 is clicked', () => {
    render(<Calculator />);
    const key1 = screen.getByText('1');
    const display = document.querySelector('.display');
    expect(key1.value).toBe('1');
    fireEvent.click(key1);
    expect(display.innerHTML).toBe('1');
  });
});
