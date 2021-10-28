function getRandomArr(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(~~(Math.random() * 100))
    }
    return arr;
}

/** 归并排序
 * greater -> [100,98]
 * @param arr
 */
function merge(arr, low, mid, high) {
    let temp = [];
    let i = low;
    let j = mid + 1;
    while (i <= mid && j <= high) {
        if (arr[i] > arr[j]) {
            temp.push(arr[i]);
            i++;
        } else {
            temp.push(arr[j]);
            j++
        }
    }
    while (i <= mid) {
        temp.push(arr[i]);
        i++
    }
    while (j <= high) {
        temp.push(arr[j]);
        j++
    }
    console.log("333", arr, low, mid, high, temp)

    for (let k = low; k <= high; k++) {
        arr[k] = temp[k - low];
    }
    console.log("444", arr)

}

// console.log(merge([
//     33, 28, 8, 20, 39,
//     49, 48, 0, 57, 56
// ],0 ,0, 1))
/** 归并排序
 * greater ->
 * @param arr
 */
function mergeSort(arr, low, high) {
    if (low < high) {//至少有两个元素,递归
        var mid = Math.floor((low + high) / 2);
        mergeSort(arr, low, mid);

        console.log("111", arr.slice(low, mid + 1));
        mergeSort(arr, mid + 1, high);
        console.log("222", arr.slice(mid + 1, high + 1));
        merge(arr, low, mid, high)
        console.log("555", arr)

    }
}


let randomArr = getRandomArr(10);
console.time("sortedArr");
let sortedArr = mergeSort(randomArr, 0, randomArr.length - 1);
console.timeEnd("sortedArr")
console.log(randomArr)
//计算机每秒计算10,000,000次 一千万次  n²
// console.log(sortedArr)
// console.log(sortedArr2)