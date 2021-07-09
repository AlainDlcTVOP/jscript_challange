export function sortByHeight(a: number[]): number[] {

    const arrayInd = a.filter((element) => {
        console.log(element)
        if (element !== -1) {
            return element;
        }
    }).sort((a, b) => a - b);

    let valIndex = 0;

    for (let i = 0; i < a.length; i++){
        if (a[i] !== -1) {
            a[i] = arrayInd[valIndex];
            valIndex++;
        }
    }
    
    return a;
}

 console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));