export function addBorder(picture: string[]): any {

    let wall = '';

    const wallOfPicture = picture[0].length + 2;


    for (let i = 0; i < wallOfPicture; i++) {
        wall = wall.concat('*');
        console.log(wall);
    }

    picture.unshift(wall);
    picture.push(wall);


    for (let i = 1; i < picture.length - 1; i++) {
        picture[i] = '*'.concat(picture[i], '*');
    }

    console.log(wallOfPicture);

    return picture;

}


console.log(addBorder(["abc", "ded"]));