export function alphabeticShift(inputString: string): any {

    const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'
        , 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const s = inputString.split('');

    for (let i = 0; s.length; i++) {
        let index = 0;
        if (s[i] !== 'z') {
            index = alphabet.indexOf(s[i]) + 1;
        }

        s[i] = alphabet[index];
    }


    return s.join('');

}

console.log(alphabeticShift('crazy'));

/* -   split()
-   indexOf()
    - join()

*/