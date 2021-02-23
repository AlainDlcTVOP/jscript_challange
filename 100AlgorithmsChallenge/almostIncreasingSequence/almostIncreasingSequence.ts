export function almostIncreasingSequence(sequence: number[]): boolean {

    let count = 0;

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            count++;
            if (sequence[i] <= sequence[i - 2] && sequence[i - 1] <= sequence[i + 1]) {
                return false;
            }
        }
    }


    return count <= 1;


}

console.log(almostIncreasingSequence([1, 3, 2, 1]))
console.log(almostIncreasingSequence([1, 3, 2]))

//Return true if it is possible to remove
//one element from the array in order to get a strictly increasing sequence, otherwise return false.