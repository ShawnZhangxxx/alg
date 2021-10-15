function getRandomArr(num){
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(~~(Math.random() * 1000))
    }
    return arr;
}

/**
 * greater ->
 * @param arr
 */
function insertSort(arr){
    for (let i = 0; i < arr.length   ; i++) {
        for (let j = i ; j > 0; j--){
            if(arr[j ] < arr[j - 1] ){
                let temp = arr[j];
                arr[j]  = arr[j -1]
                arr[j - 1] = temp;
            }else {
                break;
            }
        }
    }
    return arr;
}

let randomArr = getRandomArr(100000);
console.time("sortedArr")
let sortedArr = insertSort(randomArr);
console.timeEnd("sortedArr")
//计算机每秒计算10,000,000次 一千万次  n²
// console.log(sortedArr)
// console.log(sortedArr2)