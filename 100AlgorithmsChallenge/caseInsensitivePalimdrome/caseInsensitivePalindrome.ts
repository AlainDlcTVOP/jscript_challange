export function isCaseInsensitivePalindrome(inputString: string): boolean {
    const origenal = inputString.toLowerCase();
    const revers = origenal.split('').reverse().join('');

    return origenal === revers;

}

/*-   join()
    - reverse()
    - toLowerCase()
    - split()*/
console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));