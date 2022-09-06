# bishopAndPawn

Given the positions of a white `bishop` and a black `pawn` on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

![bishop](src/bishop.png)

## Example

For `bishop = "a1"` `and pawn = "c3"`, the output should be
`solution(bishop, pawn) = true`.

![ex1](src/ex1.png)

For `bishop = "h1"` and `pawn = "h3"`, the output should be
`solution(bishop, pawn) = false`.

![ex2](src/ex2.png)

## Input/Output

- [execution-time-limit] 4 seconds (js)

- [input] string bishop

Coordinates of the white bishop in the chess notation.

Each square of the chessboard is identified by a unique coordinate pair—a letter and a number. The vertical columns of squares from white's left to the right are labeled `'a'` through `'h'`. The horizontal rows of squares are numbered `1` to `8` starting from white's side of the board. Thus each square has a unique identification as a string consisting of two characters: the first is the column label, and the second in the row number.

![algebraic_notation](src/242px-SCD_algebraic_notation.svg.png)

Guaranteed constraints:
`bishop.length = 2`,
`'a' ≤ bishop[0] ≤ 'h'`,
`1 ≤ bishop[1] ≤ 8`.

- [input] string pawn

Coordinates of the black pawn in the same notation.

Guaranteed constraints:
`pawn.length = 2`,
`'a' ≤ pawn[0] ≤ 'h'`,
`1 ≤ pawn[1] ≤ 8`.

- [output] boolean

`true` if the bishop can capture the pawn, `false` otherwise.
