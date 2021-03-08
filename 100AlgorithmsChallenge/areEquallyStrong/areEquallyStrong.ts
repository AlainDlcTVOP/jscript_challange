export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    //yourLeft, yourRight, friendsLeft, friendsRight
    const yourStrong = yourLeft <= yourRight ? yourLeft : yourRight;
    const yourWekness = yourLeft >= yourRight ? yourLeft : yourRight;
    const yourFriendStrong = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    const yourFriendWekness = friendsLeft >= friendsRight ? friendsLeft : friendsRight;


    return (yourStrong === yourFriendStrong && yourWekness === yourFriendWekness);
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
