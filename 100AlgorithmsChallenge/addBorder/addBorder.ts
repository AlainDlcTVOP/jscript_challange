export function addBorder(picture: string[]): any {

    const lengthOfWall = picture[0].length + 2;
    let wall = '';

    for (let i = 0; i < lengthOfWall; i++) {
        wall = wall.concat('*');
    }
    console.log(wall);
    picture.unshift(wall);
    picture.push(wall);

    for (let i = 1; i < picture.length - 1; i++) {
        picture[i] = '*'.concat(picture[i], '*');
    }

    console.log(picture.length);
    return picture;

}

console.log(addBorder(["abc", "ded"]));
/* picture = ["abc",
           "ded"]
the output should be

    addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"] */

