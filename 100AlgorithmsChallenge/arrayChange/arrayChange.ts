export function arrayChange(inputArray: number[]): number {

    let count = 0;

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] >= inputArray[i + 1]) {
            const diff = (inputArray[i] + 1) - inputArray[i + 1];
            console.log(diff);
            inputArray[i + 1] = inputArray[i] + 1;
            console.log(diff);
            count += diff;
            console.log(count);
        }
    }

    return count;


}

console.log(arrayChange([1, 1, 1]));

/* On each move you are allowed to increase exactly one of its element by one.
Find the minimal number of moves required to obtain a strictly increasing sequence from the input.*/