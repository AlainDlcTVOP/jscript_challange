export function fermactor(n: number): number[] {

    let total = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < i; j++) {
            total = i ** 2 - j ** 2;

            if (total === n) {
                return [i, j];
            }
        }
    }

}

/*
- For n = 15, the output should be
fermactor(n) = [4, 1].
15 = 4^2 - 1^2. */

console.log(fermactor(15));