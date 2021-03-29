export function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {

    inputArray.forEach((elemnt, index) => {
        if (elemnt == elemToReplace) {
            inputArray[index] = substitutionElem;
        }
    });

    return inputArray;

}

console.log(arrayReplace([1, 2, 1], 1, 3));