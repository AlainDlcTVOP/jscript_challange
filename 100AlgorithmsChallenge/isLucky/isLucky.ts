export function isLucky(n: number): boolean {

    const lyckyN = n.toString(),
    const half = lyckyN.length;
}

function getTotal(n: string) {
    return n.split('').map((char) => parseInt(char)).reduce((num1, num2) => num1 + num2);
}


console.log(isLucky(1230));
console.log(isLucky(239017));