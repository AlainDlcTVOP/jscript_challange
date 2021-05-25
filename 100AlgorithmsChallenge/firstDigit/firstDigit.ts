export function firstDigit(inputString: string): string {
    const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const chars = inputString.split('');

    for (let i = 0; i < inputString.length; i++) {
        if (digit.includes(chars[i])) {
            return chars[i];
        }
    }


}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
