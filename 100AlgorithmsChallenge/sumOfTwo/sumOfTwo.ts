export function sumOfTwo(a: number[], b: number[], v: number): boolean {

    const hashMap = {};

    for (let num of a) {
        const dif = v - num;
        console.log(dif)
        hashMap[dif] = dif;
    }

    for (let num of b) {
        if (hashMap.hasOwnProperty(num)) {
           return true;
        }
    }

    return false;
}

 console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));