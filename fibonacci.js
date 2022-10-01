function fibsRecursive(n, arr = [0, 1], prev = 0, current = 1) {
    if (n == 1) {
        return [0];
    }
    if (n-2 === 0) {
        return arr;
    }
    arr.push(prev + current);
    return fibsRecursive(n - 1, arr, current, prev + current);

}

function fibs(n) {
    if (n == 1) {
        return [0];
    }
    const arr = [0,1];
    for (let i = 0; i < n-2; i++){
        arr.push(arr[i] + arr[i + 1]);
    }
    return arr;
}

console.log(fibsRecursive(5));
console.log(fibs(5));