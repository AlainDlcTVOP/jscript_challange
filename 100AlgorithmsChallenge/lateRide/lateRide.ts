export function lateRide(n: number): number {

    const hour = Math.floor(n / 60);
    const minute = n % 60;
    const time = hour.toString().concat(minute.toString()).split('').map((char) => parseInt(char));


    return time.reduce((a, b) => a + b);

}

console.log(lateRide(240));
console.log(lateRide(808));
