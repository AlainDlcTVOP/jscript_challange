export function makeArrayConsecutive2(statues: number[]): number {

    let count = 0;
    const sortedArray = statues.sort((a, b) => a - b);
    const min = sortedArray[0];
    const max = sortedArray[sortedArray.length - 1];

    for (let i = min; i < max; i++) {
        if (!statues.includes(i)) {
            count++;
        }
    }

    return count;

}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));