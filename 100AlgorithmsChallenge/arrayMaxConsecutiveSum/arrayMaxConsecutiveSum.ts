export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {

    let sum = 0;
    let max = 0;

    for (let i = 0; i < k; i++) {
        sum += inputArray[i];
    }
    console.log(inputArray.length);
    console.log(k)

    max = sum;

    for (let i = k; i < inputArray.length; i++) {
        sum -= inputArray[i - k];
        sum += inputArray[i];
        if (sum > max) {
            max = sum;
        }
    }

    return max;


}
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
/*For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
arrayMaxConsecutiveSum(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:
-   2 + 3 = 5;
-   3 + 5 = 8;
-   5 + 1 = 6;
-   1 + 6 = 7.

   Thus, the answer is 8 */
