function findval(arr) {
    let elem = arr[0], count = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === elem) {
            count++;
        } else {
            count--;
            if (count === 0) {
                elem = arr[i];
                count = 1;
            }
        }
    }

    // Optional verification step:
    let freq = arr.filter(x => x === elem).length;
    if (freq > Math.floor(arr.length / 2)) {
        return elem;
    } else {
        return null; // No majority element
    }
}
