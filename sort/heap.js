function getRandomArr(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(~~(Math.random() * 1000))
    }
    return arr;
}

/**
 * greater -> 向下调整
 * @param arr
 */
function fix(arr, low, high) {
    var temp = arr[low];
    var i = low;
    var j ;
    while ( (2* i + 1) <= high) {
        j = 2 * i + 1
        if ((2*i + 2 <= high) && arr[2 * i + 2] > arr[2 * i + 1]) {
            j = j + 1;
        }
        if (temp < arr[j]) {
            arr[i] = arr[j];
            arr[j] = temp;
            i = j;
        } else {
            return arr;
        }
    }
}

function sort(arr){
    //建堆

}

let randomArr = getRandomArr(10);
console.log(randomArr)

console.time("1")

let sortedArr = fix(randomArr, 0,randomArr.length -1);
console.timeEnd("1")
console.log(sortedArr)

// let sortedArr2 = bubbleSort(randomArr,"2");
//
// console.log(sortedArr)
// console.log(sortedArr2)