function getRandomArr(num){
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(~~(Math.random() * 10000))
    }
    return arr;
}

/**
 * greater ->
 * @param arr
 */
function quickSort(arr,left,right) {
    if(left < right && right > 0 ){
        let pivot =   partition(arr,left,right);
        quickSort(arr,left,pivot-1);
        quickSort(arr,pivot + 1,right);
    }
}

function partition(arr,left,right) {
    let pivot = Math.floor(Math.random() * (right - left + 1) + left);
    let j = left;
    let v = arr[pivot]
    swap(arr,left,pivot);
    for (let i = left + 1; i <= right; i++) {
        if(arr[i] <  v){
              j ++;
              swap(arr,j,i)
        }
    }
    swap(arr,left,j);
    return j;
}

function swap(arr,left,right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp
}

let randomArr = getRandomArr(100000);
console.time("sortedArr");
let sortedArr = quickSort(randomArr,0,randomArr.length -1);
console.timeEnd("sortedArr")
//计算机每秒计算10,000,000次 一千万次  n²
// console.log(sortedArr)
// console.log(sortedArr2)