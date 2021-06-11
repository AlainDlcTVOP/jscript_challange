export function largestOfFour(nums: number[][]): number[] {

    const highistNum: number[] = [];

    for (let numberGrup of nums) {
        let larget = 0;
        for (let numbers of numberGrup) {
            larget = larget < numbers ? numbers : larget;
        }
        highistNum.push(larget)
    }



    return highistNum;

}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));