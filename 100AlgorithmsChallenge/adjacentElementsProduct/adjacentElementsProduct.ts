export function adjacentElementsProduct(inputArray: number[]): number {

    let sumOfProduct = inputArray[0] * inputArray[1];

    for (let i = 1; i < inputArray.length - 1; i++) {
        let product = inputArray[i] * inputArray[i + 1];

        console.log(product);

        sumOfProduct = product ? product : product;
        console.log(sumOfProduct);
    }

    return sumOfProduct;

}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

/*For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.
7 and 3 produce the largest product.*/