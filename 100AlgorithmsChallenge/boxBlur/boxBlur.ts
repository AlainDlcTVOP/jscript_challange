export function boxBlur(image: number[][]): number[][] {

    const num = image.flat().reduce((a, b) => a + b);
   
    return [[Math.floor(num / image.flat().length)]];

}


// flat()
//Math.floor()

console.log(boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]]));
/*How do we solve problems ?
    1. Understand the problem.
        a.Restate the problem in your own words.
	image pixels 3 * 3 squre center is x
	we want to take the matrix and calkulate
	the fractions
	image = [[1, 1, 1], 
            [1, 7, 1], 
           	[1, 1, 1]]
	ex 1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) / 9 = 15 / 9 = ~rounded down~ = 1.
        An image is stored as a rectangular matrix of non-negative integers
    b.What are the inputs that go in the problem ?
      array[][] integer
c.What are the outputs that should come from the problem ?
   integer
d.Can the outputs be determined from the inputs ?
   Yes
2. Explore concrete examples.


   
3. Break it down.
    a.Write out the steps you need to take in pseudocode.
     we can use flat() method to create new array
    then we can use reduce() to calculate the array = 15
    return Math.floor(array / lengt)15/9 = Mathfloor = 1 
4. Solve / Simplify
5. Refactor
    - Kept O(n) linear time
        - Added TypeScript Syntax.
    - Removed unnecessary variable declaration.

*/