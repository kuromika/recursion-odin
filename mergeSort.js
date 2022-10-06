function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        let left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
        let right = mergeSort(arr.slice(Math.floor(arr.length / 2), arr.length));
        return merge(left, right);
    }
}


function merge(arrA, arrB) {
    let i = 0;
    let j = 0; 
    const ordered = [];
    while (i < arrA.length && j < arrB.length) {
        if (arrA[i] < arrB[j]) {
            ordered.push(arrA[i]);
            i++;
        } else {
            ordered.push(arrB[j]);
            j++;
        }
    }
    for (; i < arrA.length; i++){
        ordered.push(arrA[i]);
    }
    for (; j < arrB.length; j++){
        ordered.push(arrB[j]);
    }
    return ordered;
}