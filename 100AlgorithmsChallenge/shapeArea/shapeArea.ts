export function shapeArea(n: number): number {

    let area = 1;

    for (let i = 1; i < 10; i++){
                 console.log( i)
               console.log( i*4)
        console.log(area += i*4)
       
    }

    return area;

}

console.log(shapeArea(10));
console.log(shapeArea(5));