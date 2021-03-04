export function alphabetSubsequence(s: string): boolean {

    //hints Set size property charAtCode = aski
    const chars: string[] = s.split('');
    const charValue: number[] = [];

    chars.forEach((char: string) => {
        charValue.push(char.charCodeAt(0));
    });
    console.log(charValue);
    if (new Set(charValue).size !== charValue.length) {
        return false;
    }
    console.log(charValue);

    for (let i = 0; i < charValue.length - 1; i++){
        if (charValue[i] >= charValue[i + 1]) {
            return false;
        }
    }
    console.log(charValue);
    return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
