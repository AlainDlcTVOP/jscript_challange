export function sumAllPrimes(num: number): number {

    let primes: number[] = [];

    for (let i = 2; i <= num; i++){
        let isPrime = true;
        console.log(i)
        for (let j = 2; j <= i; j++){
            console.log(j)
             console.log(i % j == 0 && j != i)
            if (i % j == 0 && j != i)
                isPrime = false;
        }
        if (isPrime == true)
            primes.push(i);

    }

    return primes.reduce((total, element) => { return total + element });
}

console.log(sumAllPrimes(5));
//console.log(sumAllPrimes(977));

/*
How do we solve problems?
1. Understand the problem.
   a. Restate the problem in your own words.
       -Find the sum of all prime numbers, up to and including the given number
   b. What are the inputs that go in the problem?
       -a number
   c. What are the outputs that should come from the problem?
       -a number
   d. Can the outputs be determined from the inputs?
       -Yes, no extra resoucres needed.
   e. How should i label important pieces of data?
2. Explore concrete examples.
   sumAllPrimes(10) should return 17.
   sumAllPrimes(977) should return 73156.
3. Break it down.
   a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
   -Kept O(n^2) Quadratic Time.
       ***After research, there is no possible way to determine if a number is prime with a more
          effiecient time complexity.
   -took advantage of single line if-statements.
   -added TypeScript Syntax.

*/