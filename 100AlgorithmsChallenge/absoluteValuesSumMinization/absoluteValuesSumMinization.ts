export function absoluteValuesSumMinimization(a: number[]): number {
   
    let isEven = a.length % 2 == 0;
    
    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];

}

/*
Find the medium
hint use Math floor check is even and Tendary
 abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x) */

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));