export function shapeArea(n: number): number {

   /* 1. create varabel to hold the value
	2. loop the add the value with * 4
	3. return the value */

    let area = 1;

    for (let i = 1; i < n; i++){
        area += i* 4;
    }

    return area;
}

console.log(shapeArea(2));
console.log(shapeArea(3));

/*How do we solve problems ?
    1. Understand the problem.
        a.Restate the problem in your own words.
	
	if n = 2 output will be 5
	square add 1
	ex 3 = 13
	4*3 = 12 +1 etc
	
    b.What are the inputs that go in the problem ?
   	int
c.What are the outputs that should come from the problem ?
	positive int
d.Can the outputs be determined from the inputs ?
Yes
2. Explore concrete examples.


   
3. Break it down.
    a.Write out the steps you need to take in pseudocode.
	1. create varabel to hold the value
	2. loop the add the value with * 4
	3. return the value 

4. Solve / Simplify
5. Refactor
    - Kept O(n) linear time
        - Added TypeScript Syntax.
    - Removed unnecessary variable declaration.

*/