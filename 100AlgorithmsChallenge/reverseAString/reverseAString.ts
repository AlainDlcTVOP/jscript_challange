export function reverseAString(str: string): string {

    let reverseWord = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverseWord += str[i];
    }

    return reverseWord;

}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));