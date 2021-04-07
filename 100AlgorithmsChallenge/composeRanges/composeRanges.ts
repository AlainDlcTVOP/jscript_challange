export function composeRanges(nums: number[]): string[] {

    if (nums.length < 1) {
        return [];
    }
    const rangers: any[] = [{ start: nums[0], end: nums[0] }];
    for (let i = 1; i < nums.length; i++) {
        if (rangers[rangers.length - 1].end + 1 === nums[i]) {
            rangers[rangers.length - 1].end = nums[i];
        } else {
            rangers.push({ start: nums[i], end: nums[i] });
        }
    }

    for (let i = 0; i < rangers.length; i++) {
        if (rangers[i].start !== rangers[i].end) {
            rangers[i] = `${rangers[i].start}->${rangers[i].end}`;
        } else {
            rangers[i] = rangers[i].start.toString();
        }
    }



    return rangers;

}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));