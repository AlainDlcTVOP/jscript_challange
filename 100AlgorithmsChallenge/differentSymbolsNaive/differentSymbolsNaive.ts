export function differentSymbolsNaive(s: string): number {

    const uniqkey = s.split('');
    const charArray = {};

    uniqkey.forEach((char) => {
        charArray[char] = 1;

    });


    return Object.keys(charArray).length;


}

console.log(differentSymbolsNaive('cabca'));
