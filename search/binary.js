var arr = [1,3,8,9,12,15,16,22,108]
var index = -1;
// var f = (arr,t) => {
//     var left = 0;
//     var right = arr.length -1 ;
//     // var mid = right/2;
//     while(left <= right){
//         let mid = Math.floor((right + left) / 2);
//
//         if(t === arr[left]){
//             index = left
//             break;
//         }
//         if( t === arr[right]){
//             index = right
//             break;
//         }
//         if( t === arr[mid]){
//             index = mid
//             break;
//         }
//         if(arr[left] < t && t < arr[mid]){
//             right = mid -1
//         }else if(arr[mid] < t && t < arr[right]){
//             left = mid + 1
//         }else {
//             break;
//         }
//     }
//     return -1
// }

/**
 * 不需要考虑边缘,自然会找到
 * @param arr
 * @param t
 * @returns {number}
 */
var f = (arr,t) => {
    var left = 0;
    var right = arr.length -1 ;
    // var mid = right/2;
    while(left <= right){
        let mid = Math.floor((right + left) / 2);
        if( t === arr[mid]){
           return mid;
        } else if (t < arr[mid]){
            right = mid -1
        }else if(t < arr[right]){
            left = mid + 1
        }
    }
    return -1
}

console.log(f(arr,15));
