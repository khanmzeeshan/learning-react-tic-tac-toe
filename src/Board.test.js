import { render, fireEvent } from '@testing-library/react';
import Board from "./Board"

//Task 1. The Board should get re-rendered on each click, with X's and O's appearing on alternating clicks.
test("Re-render board on each click", ()=> {
    //collect elements
    const board = render (<Board></Board>);
    const buttons = board.getAllByRole('button');

    const bu1 = buttons[0];
    const bu2 = buttons[1];
    const bu3 = buttons[2];
    const bu4 = buttons[3];

    //firevent
    fireEvent.click(bu1);
    expect(bu1.innerHTML).toBe('X');

    fireEvent.click(bu2);
    expect(bu2.innerHTML).toBe('O');

    fireEvent.click(bu3);
    expect(bu3.innerHTML).toBe('X');

    fireEvent.click(bu4);
    expect(bu4.innerHTML).toBe('O');


    
});




//Task 2. The status message that says "Next player: __" should alternate between saying "Next player: X" and "Next player: O", depending on whose turn it is. Implement and test this behaviour.


test('Implement correct next player', () => {
    //collect elements
    const onClick = jest.fn();
    const board = render (<Board/>);
    const curr_message = board.getByText('Next player: X');
    const buttons = board.getAllByRole('button');
    
  
    const bu1 = buttons[0];
    const bu2 = buttons[1];
    const bu3 = buttons[2];
    const bu4 = buttons[3];

  
    //expect(curr_message.innerHTML).toBe('Next player: O')
    //Start X
   // expect(curr_message.innerHTML).toBe('Next player: X')
    // From X to O
    fireEvent.click(bu1);
    expect(curr_message.innerHTML).toBe("Next player: O")
    // O to X
    fireEvent.click(bu2);
    expect(curr_message.innerHTML).toBe('Next player: X')


})