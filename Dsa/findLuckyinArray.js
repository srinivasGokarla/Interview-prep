var findLucky = function(arr) {
    let obj = [];

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] += 1;
        }
    }

    let maxLucky = -1;

    for (let key in obj) {
        let numKey = parseInt(key); // convert string to number
        if (obj[key] === numKey) {
            maxLucky = Math.max(maxLucky, numKey);
        }
    }

    return maxLucky;
};
