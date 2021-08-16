export function centuryFromYear(year: number): number {

    const centry = year / 100;
    console.log(centry)

    if (year % 100 == 0) {
        return centry;
    }

    return Math.floor(centry)+1;
  
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(2120));
console.log(centuryFromYear(1805));
console.log(centuryFromYear(1450));
console.log(centuryFromYear(2520));

/*How do we solve problems ?
    1. Understand the problem.
        a.Restate the problem in your own words.
	Given a year , return the century it is in 4 digits year
	return ex 1907 = 20
	       ex 1700 = 17
    b.What are the inputs that go in the problem ?
     integer
c.What are the outputs that should come from the problem ?
  integer
d.Can the outputs be determined from the inputs ?
  yes
2. Explore concrete examples.

logic check if even all number are positiv
 divide with 100 to get year
 check if even
    use math floor
   
3. Break it down.
    a.Write out the steps you need to take in pseudocode.
4. Solve / Simplify
5. Refactor
    - Kept O(n) linear time
        - Added TypeScript Syntax.
    - Removed unnecessary variable declaration.

*/