export function firstDuplicate(a: number[]): number {

    const firstDup = {};

    for (let num of a) {
        if (firstDup.hasOwnProperty(num)) {
            return num;
        }

        firstDup[num] = num;
    }

    return -1;
}

//hasOwnProperty
console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
