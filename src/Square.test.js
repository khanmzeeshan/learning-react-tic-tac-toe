import { render, fireEvent } from '@testing-library/react';
import Square from './Square';
//SQUARE: 
//The square should render with no value if the value prop is null

test('Render No Value = Empty Square', () => {
    const square = render(<Square value={null} />);
    const button = square.getByRole('button'); 
    expect(button.innerHTML).toBe(''); 
  });

//The square should render with the specified value if the prop is specified

test('Render Square with X', () => {
    const square = render(<Square value={'X'} />); 
    const button = square.getByRole('button'); 
    expect(button.innerHTML).toBe('X'); 
  });

//The square should call the provided onClick function when the underlying button is clicked

test('Called correct OnClick', () => {
    const onClick = jest.fn();
    const square = render(<Square value='X' onClick={onClick} />);
    const button = square.getByRole('button');
    
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
});