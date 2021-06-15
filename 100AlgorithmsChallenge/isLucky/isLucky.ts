export function isLucky(n: number): boolean {

    const lyckyN = n.toString();
    const half = lyckyN.length / 2;

    const firstHalv = getTotal(lyckyN.substring(0, half));
    console.log(firstHalv)
    const secoundHalf = getTotal(lyckyN.substring(half, lyckyN.length));
    console.log(secoundHalf)

    return firstHalv === secoundHalf;
}
function getTotal(n: string) {
    return n.split('').map((char) => parseInt(char)).reduce((num1, num2) => num1 + num2);
}


console.log(isLucky(1230));
console.log(isLucky(239017));