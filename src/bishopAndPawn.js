function solution(bishop, pawn) {
    const bishopX = bishop.charCodeAt(0) - 96;
    const bishopY = bishop.charCodeAt(1) - 48;
    const pawnX = pawn.charCodeAt(0) - 96;
    const pawnY = pawn.charCodeAt(1) - 48;

    return Math.abs(bishopX - pawnX) === Math.abs(bishopY - pawnY);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test bishopAndPawn

// alternative solution
