export function areSimilar(a: number[], b: number[]): boolean {
    //SWAP reverse === 2

    const c: number[] = [];
    // change value
    let d: number[] = [];

    if (a.toString() === b.toString()) {
        return true;
    }

    console.log(c);
    console.log(d);

    for (let i = 0; i < a.length; i++) {
        // swap algo
        if (a[i] !== b[i]) {
            c.push(a[i]);
            d.push(b[i]);
        }
    }
    console.log(c);
    console.log(d);

    d = d.reverse();

    if (c.length === 2 && (c.toString() === d.toString())) {
        console.log(c);
        console.log(d);
        return true;
    }
    console.log(c);
    console.log(d);
    return false;

}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
