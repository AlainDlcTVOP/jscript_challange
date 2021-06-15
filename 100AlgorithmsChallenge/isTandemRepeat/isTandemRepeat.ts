export function isTandemRepeat(inputString: string): boolean {

    const wordLength = inputString.length;

    if (wordLength % 2 === 0) {
        const firstHalv = inputString.slice(0, wordLength / 2);
        const secoundHalf = inputString.slice(wordLength / 2, wordLength);

        return firstHalv === secoundHalf;
    }


    return false;

}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
