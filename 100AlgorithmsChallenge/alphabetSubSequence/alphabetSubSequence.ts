export function alphabetSubsequence(s: string): boolean {

    /*  hint size property New Set
   charCodeAt()
   split() */
    //1. first spilt the string
    const word: string [] = s.split('');
    //2. save it a [] to push the word
    const seqWord: number[] = [];
    //3. loop then pass it to charCode()
    word.forEach((words) => {
        seqWord.push(words.charCodeAt(0));
    });
    //4. check if dub use new Set
    if (new Set(seqWord).size !== seqWord.length) {
        return false;
        }
    //5. check if the word is <= the next subSeq = a => b 
    for (let i = 0; i < seqWord.length - 1; i++){
        if (seqWord[i] >= seqWord[i + 1]) {
            return false;
        }
    }
    //6. return boolan
   
    return true;
  }
          


console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))

/*How do we solve problems ?
    1. Understand the problem.
        a.Restate the problem in your own words.
	the seqvens is ex ABCD = true
	BCE = false
    dont allow dublicate
	we want to check if the given string has alph order
	 
        
    b.What are the inputs that go in the problem ?
      String
c.What are the outputs that should come from the problem ?
    Boolean
d.Can the outputs be determined from the inputs ?
   Yes
2. Explore concrete examples.
Array sort : sort the alph
// program to sort words in alphabetical order

// take input
const string = prompt('Enter a sentence: ');

// converting to an array
const words = string.split(' ');

// sort the array elements
words.sort();

// display the sorted words
console.log('The sorted words are:');

for (const element of words) {
  console.log(element);
}
   
3. Break it down.
    a.Write out the steps you need to take in pseudocode.


    1 .first split the words
    2. sort()
    3. save the word in a [] so we can push it
    4. loop 
    5. check if a < b 
    6. then push
    7. return words
    

4. Solve / Simplify
5. Refactor
    - Kept O(n) linear time
        - Added TypeScript Syntax.
    - Removed unnecessary variable declaration.

*/