export function circleOfNumbers(n: number, firstNumber: number): number {
    const circlenum = [];
    const halfNum = n / 2;

    for (let i = 0; i < n; i++) {
        circlenum.push(i);
    }

    if (firstNumber < halfNum) {
        return circlenum[firstNumber + halfNum];
    }

    return circlenum[firstNumber - halfNum];

}

console.log(circleOfNumbers(10, 2));