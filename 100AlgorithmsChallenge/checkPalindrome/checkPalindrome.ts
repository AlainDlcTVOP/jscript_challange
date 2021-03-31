export function checkPalindrome(inputString: string): boolean {
    const originalWord = inputString.toLowerCase();
    const reverseWord = inputString.split('').reverse().join('');

    console.log(reverseWord)


    return originalWord === reverseWord;

}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
