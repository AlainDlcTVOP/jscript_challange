export function alphabeticShift(inputString: string): any {

    const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'
        , 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const shiftedInput = inputString.split('');

    console.log(shiftedInput);

    for (let i = 0; i < shiftedInput.length; i++) {
        let index = 0;

        if (shiftedInput[i] !== 'z') {
            index = alphabet.indexOf(shiftedInput[i]) + 1;
            console.log(index);
        }
        shiftedInput[i] = alphabet[index];
    }

    return shiftedInput.join('');
}

console.log(alphabeticShift('crazy'));

/* -   split()
-   indexOf()
    - join()

*/