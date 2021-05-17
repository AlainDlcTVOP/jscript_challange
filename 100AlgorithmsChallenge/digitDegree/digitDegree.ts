export function digitDegree(n: number): number {
    let count = 0;
    let currentNum = n;

    if (n <= 9) {
        return 0;
    } else {
        while (1) {
            count++;
            currentNum = getDigit(currentNum);
            if (currentNum <= 9) {
                break;
            }
        }
    }


    return count;

}

function getDigit(num: number): number {
    const nums = num.toString().split('').map((element) => parseInt(element));
    return nums.reduce((a, b) => {
        return a + b;
    });
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));