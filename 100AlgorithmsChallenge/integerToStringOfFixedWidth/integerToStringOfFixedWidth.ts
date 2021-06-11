function integerToStringOfFixedWidth(digits: number, size: number): string {

    let strDigits: string = digits.toString();

    if (strDigits.length < size) {
        return addDigits(strDigits, size);
    } else if (strDigits.length > size) {
        return removeDigits(strDigits, size);
    } else {
        return strDigits;
    }

    function addDigits(str: string, targetLength: number): string {
        let padding: string = '';

        for (let i = 0; i < (str.length - targetLength); i++) {
            padding += '0';
        }
        return padding + str;
    }

    function removeDigits(str: string, targetLength: number): string {
        return str.slice(str.length - targetLength);
    }


}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
