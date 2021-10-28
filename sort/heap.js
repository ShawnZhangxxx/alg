function getRandomArr(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(~~(Math.random() * 1000))
    }
    return arr;
}

/**
 * greater -> 向下调整一次  大值在根部

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
            break;
        }
    }

}

/**
 *  * 核心思路: 最后一个小堆开始调整,直到建完整个堆
 * @param arr
 * @param low
 * @param high
 */

function sort(arr,low,high){
    //建堆 一个个局部调整
    let i = low;
    let index = Math.floor((high - 1)/2);
    for (let j = index ; j >= 0 ; j-- ) {
        fix(arr,j,high);
    }
    console.log("111",arr);

    //一个个出
    for (let j = high; j >= 0  ; j--) {
        let temp = arr[0];
        arr[0] = arr[j];
        arr[j] = temp;
        fix(arr,0,j-1)
    }

}

let randomArr = getRandomArr(10);
console.log(randomArr)
console.time("1")

sort(randomArr, 0,randomArr.length -1);
console.timeEnd("1")
console.log(randomArr)

// let sortedArr2 = bubbleSort(randomArr,"2");
//
// console.log(sortedArr)
// console.log(sortedArr2)