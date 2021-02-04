export function adjacentElementsProduct(inputArray: number[]): number {

    let sumOfProduct = inputArray[0] * inputArray[1];



    for (let i = 1; i < inputArray.length - 1; i++) {

        let product = inputArray[i] * inputArray[i + 1];

        console.log(product);
        console.log(sumOfProduct);

        sumOfProduct = sumOfProduct < product ? product : product;
    }

    return sumOfProduct;


}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));