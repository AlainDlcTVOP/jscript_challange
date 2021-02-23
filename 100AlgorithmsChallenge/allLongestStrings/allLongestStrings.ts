export function allLongestStrings(inputArray: string[]): any[] {

    let longestString = 0;
    let wordLength = [];

    inputArray.forEach((word: string) => {
        longestString = longestString < word.length ? word.length : longestString;
        console.log(longestString);
        console.log(word);
        console.log(word.length);
    });

    inputArray.forEach((word: string) => {

        if (longestString === word.length) {
            wordLength.push(word);
        }

    });
    console.log(longestString);


    console.log(wordLength);
    return wordLength;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));

/*Given an array of strings, return another array containing all of its longest strings.

** Example **

    For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"]. */