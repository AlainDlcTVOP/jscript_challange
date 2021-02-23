import { add2 } from "../add/add";

export function addTwoDigits(n: any): number {

    const num = n.toString().split("");


    return parseInt(num[0]) + parseInt(num[1]);

}

console.log(addTwoDigits(29));


/*For n = 29, the output should be
addTwoDigits(n) = 11.

**Hint**
-   split()
-   parseInt()
-   toString()
-   reduce()
*/