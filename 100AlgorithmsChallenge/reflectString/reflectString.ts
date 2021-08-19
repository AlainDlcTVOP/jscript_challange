export function reflectString(inputString: string): string {

   
    const word = inputString.split('');
    const alphabet = {
        a: 'z', b: 'y', c: 'x', d: 'w',
        e: 'v', f: 'u', g: 't', h: 's',
        i: 'r', j: 'q', k: 'p', l: 'o',
        m: 'n', n: 'm', o: 'l', p: 'k',
        q: 'j', r: 'i', s: 'h', t: 'g',
        u: 'f', v: 'e', w: 'd', x: 'c',
        y: 'b', z: 'a'
    };
    let  holder ='';

    word.forEach((chars) => {
        holder += alphabet[chars];
    })

    return holder


}

console.log(reflectString("name"));
console.log(reflectString("kamel"));
console.log(reflectString("ponani"));
console.log(reflectString("lolo"));

/*How do we solve problems ?
    1. Understand the problem.
        a.Restate the problem in your own words.
	we want to take a string to an alphabet reflection
	like a=>z, b=>y,......
	
	
    b.What are the inputs that go in the problem ?
   	String
c.What are the outputs that should come from the problem ?
	String
d.Can the outputs be determined from the inputs ?
Yes
2. Explore concrete examples.


   
3. Break it down.
    a.Write out the steps you need to take in pseudocode.
	1. set alphabet word (lowercase in a object) 
	2. split the word 
    3. create a holder to empty string
 	5. loop then add to the empty string
	5. return the string

4. Solve / Simplify
5. Refactor
    - Kept O(n) linear time
        - Added TypeScript Syntax.
    - Removed unnecessary variable declaration.

*/
