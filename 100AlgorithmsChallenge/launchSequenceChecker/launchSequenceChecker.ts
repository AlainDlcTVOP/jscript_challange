export function launchSequenceChecker(systemNames: string[], stepNumbers: number[]): boolean {
	
	const fire = {};
	const name = systemNames;
	const step = stepNumbers;

	for (let i = 0; i < name.length; i++){
		if (fire.hasOwnProperty(name[i])) {
			if (fire[name[i]] >= step[i]) {
				return false;
			}
		} else {
			fire[name[i]] = step[i];
		}
	}
	
	
	
	return true;
}

 console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1, 10, 11, 2, 12, 111]));
console.log(launchSequenceChecker(["stage_1", "stage_1", "stage_2", "dragon"], [2, 1, 12, 111]));
/*How do we solve problems ?
    1. Understand the problem.
        a.Restate the problem in your own words.
	
	we want to check the sequense 
	ex "stage_1", "stage_2", and "dragon" = [1, 2], [10, 12], and [11, 111]
	return true
	else return false
    seq = num
	
    b.What are the inputs that go in the problem ?
   	string and number array
c.What are the outputs that should come from the problem ?
	boolean
d.Can the outputs be determined from the inputs ?
Yes
2. Explore concrete examples.


   
3. Break it down.
    a.Write out the steps you need to take in pseudocode.
	1. create varabel to hold the value object
	2. loop then check if the string has own porperty
	4. check if the value is less then or equal the command
	5. if not return false
	6. else set the object = to the command 
	3. return true 

4. Solve / Simplify
5. Refactor
    - Kept O(n) linear time
        - Added TypeScript Syntax.
    - Removed unnecessary variable declaration.

*/


