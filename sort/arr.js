function getRandomArr(num){
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(~~(Math.random() * 100))
    }
    return arr;
}

/**
 * greater ->
 * @param arr
 */
function bubbleSort(arr,label){
    console.time(label)
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
    console.timeEnd(label)
    return arr;
}

let randomArr = getRandomArr(10);
let sortedArr = bubbleSort(randomArr,"1");
// let sortedArr2 = bubbleSort(randomArr,"2");
//
// console.log(sortedArr)
// console.log(sortedArr2)