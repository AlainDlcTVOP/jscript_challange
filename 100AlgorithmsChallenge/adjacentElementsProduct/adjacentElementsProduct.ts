import { add2 } from "../add/add";

export function adjacentElementsProduct(inputArray: number[]): number {

    let largestProduct = inputArray[0] * inputArray[1];

    for (let i = 1; i < inputArray.length; i++) {
        const product = inputArray[i] * inputArray[i - 1];
        console.log(product);
        largestProduct = largestProduct < product ? product : largestProduct;
    }


    console.log(inputArray.length);


    return largestProduct;

}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

/*For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.
7 and 3 produce the largest product.*/