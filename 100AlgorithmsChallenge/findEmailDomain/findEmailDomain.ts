export function findEmailDomain(address: string): string {

    const findDomain = address.lastIndexOf('@');


    return address.slice(findDomain + 1, address.length);
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
