export function launchSequenceChecker(systemNames: string[], stepNumbers: number[]): boolean {

}

 console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1, 10, 11, 2, 12, 111]));
 console.log(launchSequenceChecker(["stage_1", "stage_1", "stage_2", "dragon"], [2, 1, 12, 111]));
/*How do we solve problems ?
    1. Understand the problem.
        a.Restate the problem in your own words.
	
	
    b.What are the inputs that go in the problem ?
   	
c.What are the outputs that should come from the problem ?

d.Can the outputs be determined from the inputs ?

2. Explore concrete examples.


   
3. Break it down.
    a.Write out the steps you need to take in pseudocode.
If n = pq is a factorization of n into two positive integers, Then, since n is odd, so p and q are both odd.
    Let, a = 1/2 * (p+q) and b = 1/2 * (q-p).
    Since a and b are both integers, then p = (a – b) and q = (a + b).
    So, n = pq = (a – b)(a + b) = a2 – b2
    In case of prime number, we go back until b = 1 in as one factor is 1 for a prime number.
    A while loop ensures this operation	

4. Solve / Simplify
5. Refactor
    - Kept O(n) linear time
        - Added TypeScript Syntax.
    - Removed unnecessary variable declaration.

*/