export function maxMultiple(divisor: number, bound: number): number {

    let reminder = bound % divisor;


    return bound - reminder;
}

console.log(maxMultiple(3, 10));