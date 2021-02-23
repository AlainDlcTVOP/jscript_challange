export function alphabeticShift(inputString: string): any {

    let newStr = [];
    for (let i = 0; i < inputString.length; i++) {
        // Increment each letter by 1 to get the next letter, push it into array
        newStr.push(String.fromCharCode((inputString[i].charCodeAt(0) + 1)));
        console.log(newStr.length);
    }
    /* 
       After incrementing 'z' it becomes '}', need to handle this edge case
       Turns array containing answer into a string
       Handles 'z' edge case by using a RegEx to replace instances of '}' with 'a' 
    */
    let answer = newStr.join("").replace(/{/g, 'a');;

    return answer;
}

console.log(alphabeticShift('crazy'));

/* -   split()
-   indexOf()
    - join()

*/