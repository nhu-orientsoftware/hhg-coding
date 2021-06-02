/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import Managerment from '../../Managerment';

describe('Render managerment page', () => {
  it('render add employee modal', () => {
    render(<Managerment />);
    const addBtn = screen.getByRole('button', { name: /Add new/i });
    expect(addBtn).toBeInTheDocument();
    fireEvent.click(addBtn);
    const maskClass = document.getElementsByClassName('add-employee-modal');
    const style = window.getComputedStyle(maskClass[0]);
    expect(style.display).toBe('block');
  });
});