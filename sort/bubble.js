// var arr = require("./arr.js");
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
function bubbleSort(arr,label){
    for (let i = 0; i < arr.length - 1; i++) {
        let flag = 1 ;
        for (let j = 0; j < arr.length - i; j++){
            if(arr[j + 1] < arr[j] ){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j +1] = temp;
                flag = 0;
            }
        }
        if(flag){
            return arr;
        }
    }
    return arr;
}

let randomArr = getRandomArr(100000);
console.time("1")
let sortedArr = bubbleSort(randomArr,"1");
console.timeEnd("1")
console.time("2")
let sortedArr2 = bubbleSort(randomArr,"2");
console.timeEnd("2")
//
// console.log(sortedArr)
// console.log(sortedArr2)