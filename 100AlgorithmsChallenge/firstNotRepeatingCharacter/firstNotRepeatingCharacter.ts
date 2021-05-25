export function firstNotRepeatingCharacter(s: string): string {
    let char: string[] = s.split('');
    let dup = {};
    let answer = '_';
    let indexAnswer = Number.MAX_SAFE_INTEGER;

    char.forEach((element, index) => {
        if (!dup.hasOwnProperty(element)) {
            dup[element] = {
                count: 1,
                index
            };
        } else {
            dup[element].count++;
            dup[element].index = index;
        }
    });

    for (const key in dup) {
        if (dup[key].count === 1 && dup[key].index < indexAnswer) {
            answer = key;
            indexAnswer = dup[key].index;
        }
    }

    return answer;


}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
