export function fermactor(n: number): number[] {

    for (let i = 0; i < n; i++){
        for (let j = 0; j < i; j++){
            const total = i ** 2 - j ** 2;
            if (total === n) {
                return [i,j];
            }
        }
    }
    
   
}
    
    console.log(fermactor(15));


/*
- For n = 15, the output should be
fermactor(n) = [4, 1].
15 = 4^2 - 1^2. */

/*How do we solve problems ?
    1. Understand the problem.
        a.Restate the problem in your own words.
	Fermat's factorization
	If a · b = n  (where a ≤ b),
 	then there exist some c and d such that n = c^2 - d^2.
	only logic
	
    b.What are the inputs that go in the problem ?
   	poitiv int
c.What are the outputs that should come from the problem ?
array of numbers
d.Can the outputs be determined from the inputs ?
 yes
2. Explore concrete examples.

Fermat’s Factorization method is based on the representation of an odd integer as the difference of two squares. 
For an integer n, we want a and b such as
   
3. Break it down.
    a.Write out the steps you need to take in pseudocode.
    Nested loop to check the numbers
	1.take the first num loop
    2.take the seq agrument and loop
    3. then operate Fermat’s Factorization n = a^2 - b^2
    4. compare and return
4 . Solve / Simplify
5. Refactor
    - Kept O(n) linear time
        - Added TypeScript Syntax.
    - Removed unnecessary variable declaration.

*/
