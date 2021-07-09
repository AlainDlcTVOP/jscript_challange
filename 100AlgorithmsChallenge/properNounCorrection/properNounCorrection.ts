export function properNounCorrection(noun: string): string {

    const firstChar = noun[0].toUpperCase();
    const restChar = noun.slice(1, noun.length).toLowerCase();


    return firstChar.concat(restChar);


}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));