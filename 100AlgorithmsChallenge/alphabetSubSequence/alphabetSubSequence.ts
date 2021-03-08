export function alphabetSubsequence(s: string): boolean {

    //-   size property-   charCodeAt() - split()

    const char: string[] = s.split('');
    const charValue: number[] = [];

    char.forEach((chars: string) => {
        charValue.push(chars.charCodeAt(0)) + 1;
    });

    if (new Set(charValue).size !== charValue.length) {
        return false;
    }

    for (let i = 0; i < charValue.length - 1; i++) {
        charValue[i] = charValue[i + 1];
    }
    console.log(charValue);

    return true;




}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
