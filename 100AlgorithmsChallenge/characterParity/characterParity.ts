export function characterParity(symbol: string): string {

    const complement = parseInt(symbol);

    return isNaN(complement) ? 'its not digit ' : complement % 2 === 0 ? 'is even' : 'is odd';
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
