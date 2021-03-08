export function alternatingSums(a: number[]): number[] {
    let even = 0;
    let odd = 0;

    a.forEach((element, index) => {
        if (index % 2 === 0) {
            even += element;
        } else {
            odd += element;
        }
    });

    return [even, odd];

}

console.log(alternatingSums([50, 60, 60, 45, 70]))