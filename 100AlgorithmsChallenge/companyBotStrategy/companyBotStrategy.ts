export function companyBotStrategy(trainingData: number[][]): number {

    let time = 0;
    let correct = 0;

    trainingData.forEach((data: number[]) => {
        if (data[1] === 1) {
            time += data[0];
            correct += data[1];
        }
    });

    return time / correct || 0;

}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy([[4, -1], [0, 0], [5, -1]]));
