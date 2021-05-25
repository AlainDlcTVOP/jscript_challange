export function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {

    let dayz = 0;
    let totalheight = 0;

    while (totalheight < desiredHeight) {
        dayz++;
        totalheight += upSpeed;

        if (totalheight < desiredHeight) {
            totalheight -= downSpeed;
        }
    }


    return dayz;

}

console.log(growingPlant(100, 10, 910))