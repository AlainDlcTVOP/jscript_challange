export function containsCloseNums(nums: number[], k: number): boolean {

    for (let i = 0; i < nums.length; i++){
        for (let j = i; j < nums.length; j++){
            if (i !== j)
                if (nums[i] === nums[j])
                    if (Math.abs(i - j) <= k) {
                        return true;
                   }
        }
    }
    return false;

}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));

/*How do we solve problems ?
    1. Understand the problem.
        a.Restate the problem in your own words.
	we want to take the index an compare if 
	index[i] are equal index[j] or
	index !== index
	the index diffrent is 
	less then or equal to target K
	ex [0, 1, 2, 3, 5, 2] and k = 3 = true
	ex [0, 1, 2, 3, 5, 2] and k = 2 = false
    b.What are the inputs that go in the problem ?
    input array
c.What are the outputs that should come from the problem ?
  the out put should come out ass boolan expression
d.Can the outputs be determined from the inputs ?
  Yes
2. Explore concrete examples.

nested lopp and check
   
3. Break it down.
    a.Write out the steps you need to take in pseudocode.
	1 loop i lengt
	2 loop j lengt
	3 compare if i not equal j
	4 compare if i is equal j
	5 comapre with Math.abs()
	6 return boolan 
4. Solve / Simplify
5. Refactor
    - Kept O(n) linear time
        - Added TypeScript Syntax.
    - Removed unnecessary variable declaration.

*/