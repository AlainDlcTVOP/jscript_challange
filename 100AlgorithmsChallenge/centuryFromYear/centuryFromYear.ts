export function centuryFromYear(year: number): number {

    const centry = year / 100;

    if (year % 100 === 0) {
        return centry;
    }

    return Math.floor(centry + 1);
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));