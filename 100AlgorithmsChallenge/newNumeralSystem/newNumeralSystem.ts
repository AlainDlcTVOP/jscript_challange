export function newNumeralSystem(number: string): string[] {

    const numerals: string[] = [];
    let startChar = 65;
    let endChar = number.charCodeAt(0);

    while (startChar <= endChar) {
        const numral = `${String.fromCharCode(startChar)} + ${String.fromCharCode(endChar)}`;
        numerals.push(numral);
        startChar++;
        endChar--;

    }


    return numerals;

}

console.log(newNumeralSystem('G'));