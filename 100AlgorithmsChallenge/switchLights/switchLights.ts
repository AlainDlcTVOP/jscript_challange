export function switchLights(a: number[]): number[] {

    let origenalLights = [...a];
    
    for (let i = 0; i < origenalLights.length; i++){
        if (a[i] === 1) {
            origenalLights = swithLg(origenalLights, i);
        }
    }
    return origenalLights
}

function swithLg(lights: number[], currentIndex: number): number[]{
    for (let i = 0; i < currentIndex + 1; i++){
        lights[i] = lights[i] === 1 ? 0 : 1;
    }

    return lights;
}

 console.log(switchLights([1, 1, 1, 1, 1]));
 console.log(switchLights([0, 0]));