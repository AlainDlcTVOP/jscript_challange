export function seatsInTheater(nCols: number, nRows: number, col: number, row: number): number {

    const diffCol = nCols - col + 1;
    const diffRow = nRows - row;


    return diffCol * diffRow;


}

console.log(seatsInTheater(16, 11, 5, 3));