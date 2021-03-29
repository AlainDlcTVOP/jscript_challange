export function arrayPreviousLess(items: number[]): number[] {

    const lessThanList: number[] = [];

    for (let i = items.length - 1; i >= 0; i--) {
        console.log(i);
        for (let j = i; j >= 0; j--) {
            console.log(j);
            if (items[i] > items[j]) {
                lessThanList.unshift(items[j]);
                console.log(lessThanList);
                break;
            } else if (j === 0) {
                lessThanList.unshift(-1);
                console.log(lessThanList);
            }
        }
    }

    return lessThanList;

}
//output [-1, 3, -1, 2, 4]
console.log(arrayPreviousLess([3, 5, 2, 4, 5]));