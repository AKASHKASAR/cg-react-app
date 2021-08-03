import { render, screen } from '@testing-library/react';
import App from './App';
import Calc from './components/training/Calc';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/);
  expect(linkElement).toBeInTheDocument(); // matcher 
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/);
  expect(linkElement).toBeInTheDocument();
});

// jasmine, jest 

describe(`Test Employee Component`, () => {

  it(`test Calc equals 10`, () => {
    let num = Calc();
    expect(num).toBe(10);
  });

  it(`test Calc not equals 5`, () => {
    let num = Calc();
    expect(num).not.toBe(5);
  });
});






