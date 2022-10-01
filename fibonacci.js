function fibsRecursive(n, arr = [0, 1]) {
    if (n <= 2) {
        return arr;
    }
    arr.push(arr.length - 1 + arr.length - 2);
    return fibsRecursive(n - 1, arr);

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
