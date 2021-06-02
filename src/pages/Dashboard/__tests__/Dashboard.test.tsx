/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import Dashboard from '..';

describe('Render dashboard page', () => {
  it('shoule render button plus', () => {
    render(<Dashboard />);
    const plusButton = screen.getByRole('button', { name: /plus 1/i });
    expect(plusButton).toBeInTheDocument();
    fireEvent.click(plusButton);
    const resetResult = screen.getByTestId('dashboard-number');
    expect(resetResult.innerHTML).toBe('1');
    fireEvent.click(plusButton);
    expect(resetResult.innerHTML).toBe('2');
  });
  it('shoule render button reset', () => {
    render(<Dashboard />);
    const resetButton = screen.getByRole('button', { name: /reset/i });
    expect(resetButton).toBeInTheDocument();
    fireEvent.click(resetButton);
    const resetResult = screen.getByTestId('dashboard-number');
    expect(resetResult.innerHTML).toBe('0');
  });
});