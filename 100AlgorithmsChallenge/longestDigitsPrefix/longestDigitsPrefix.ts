export function longestDigitsPrefix(inputString: string): string {

    const char = inputString.split('');
    let prefix = '';


    for (let char of inputString) {
        const num = parseInt(char)
        if (isNaN(num)) {
            break;
        }

        prefix += char;
    }

    return prefix;

}

console.log(longestDigitsPrefix('123aa1'));