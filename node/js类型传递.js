//我们把 person 的地址值传递给 obj 之后，obj 和 person 都指向了堆内存中的 同一块地址( a 地址 )，所以这里对 obj 进行添加或删除属性的操作，
// 都是在 a 地址上操作的，所以相应的变化会反映在 person 对象上。那么，当对 obj 重新赋值， 这时候就切断了 obj 和 a 地址之间的联系，
// 所以对 obj 上的任何操作也不会反映到 person 对象上。如果函数的参数是按引用传递的话， person 也会指向地址 b ,
// 然而事实上 person 指向的是地址 a 。 现在，抛弃你脑海中参数传递还有按引用传递的情况，


// 只有按值传递！ 对象也是传递地址的值传递,复制一份地址
function setName(obj) {
    // 这里 obj 和 person 指向内存中的同一块地址，a 地址
    obj.name = "Nicholas";

    // 这里 obj 指向了新对象所在的地址( b 地址)，切断了和 a 地址的联系
    obj = new Object();
    obj.name = "Greg";
}

var person = new Object();
setName(person);
console.log(person.name); //output: "Nicholas"




/**
 * 数组也是值传递 传递对象引用的副本，这样的传递方式又被称之为共享传递(call by sharing)。
 *
 * 数组 函数 对象都相当于 new Object() 对象  = {}  = []  都相当于赋值一个新地址 断了形参的地址联系 所以赋值不上
 * @param arr
 */
function a(arr){
    // arr = arr.slice(0,1).concat(2,3).concat(arr.slice(2,-1))
    arr = [1,2,3]  //相当于new
};

var arr = [1,2,3,4,5,6];

function b(){
    console.log(arr);
    a(arr);
    console.log(arr)
}
b();





