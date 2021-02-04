export function addTwoDigits(n: any): number {

    const num = n.toString();
    return parseInt(num[1]) + parseInt(num[0]);
}

console.log(addTwoDigits(29));