export function missingLetters(str: string): string {

    const alphapabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const chars = str.split('');

    if (chars[0] !== 'a') {
        return undefined;
    }
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== alphapabet[i]) {
            return alphapabet[i];
        }
    }


    return undefined;


}


console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));