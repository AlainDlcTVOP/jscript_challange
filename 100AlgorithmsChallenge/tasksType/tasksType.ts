export function tasksTypes(deadlines: number[], day: number): number[] {

    let [today, uppcoming, later] = [0, 0, 0];

    deadlines.forEach((deadlines) => {
        if (deadlines <= day) {
            today++;
        } else if (deadlines >= day + 1 && deadlines <= day + 7) {
            uppcoming++;
        } else {
            later++;
}
    });

    return [today, uppcoming, later];
    
}

 console.log(tasksTypes([1, 2, 3, 4, 5], 2));
 console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
