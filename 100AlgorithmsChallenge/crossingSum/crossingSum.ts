export function crossingSum(matrix: number[][], a: number, b: number): number {
    const culomTotal = matrix[a].reduce((a, b) => a + b);

    let rowCount = 0;

    for (let i = 0; i < matrix.length; i++) {
        rowCount += i !== a ? matrix[i][b] : 0;
    }

    return culomTotal + rowCount;

}

console.log(crossingSum([[1, 1, 1, 1],
[2, 2, 2, 2],
[3, 3, 3, 3]], 1, 3));