import { calculateWinner } from './helpers';

test('2 + 2 should return 4', () => {
    expect(2 + 2).toBe(5); // this test fails!
  });

  test('X is the winner, it has the top row', () => {
    // Arrange the test
    const squares = ['X', 'X', 'X', 'O', null, 'O', null, null, null];
    
    // Act
    const winner = calculateWinner(squares);
  
    // Assert
    expect(winner).toBe('X');
  });

  // TO DO: write 2 more test cases

  //TC 1: which O wins

  test('O wins middle column!', ()=> {
    const squares = ["X","O","X","O","O", "X","O","O"]
    // Act
    const winner = calculateWinner(squares);
  
    // Assert
    expect(winner).toBe('O');
  })

  //TC 2: Which no winner yet

  test('No winner yet', ()=> {
    const squares = ["X","X","O","O","O","X", "X","X","O"]
    // Act
    const winner = calculateWinner(squares);
  
    // Assert
    expect(winner).toBe(null);
  })
