// Array
let arr = ["黄", "金", "亮", "好"];
let str = 'huang';
// 属性

// 1.length

// console.log(arr.length) // 返回 4

// 2.Array.prototype 表示 Array 构造函数的原型，并允许您向所有Array对象添加新的属性和方法
// console.log(Array.prototype)

// 方法

// 1.Array.from() 方法从一个类似数组或可迭代的对象中创建一个新的数组实例。
// console.log(Array.from(arr)) //[ '黄', '金', '亮', '好' ]
// console.log(Array.from(str, (i) => { //[ 'hj', 'uj', 'aj', 'nj', 'gj' ]
//     i += 'j'
//     return i
// }))

// 2.Array.isArray() 用于确定传递的值是否是一个 Array。
// console.log(Array.isArray(arr))  //true
// console.log(Array.isArray(str))  //false

// 3.Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
//  Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个包含 7 个 undefined 元素的数组。
// console.log(Array.of(7))      // [7] 
// console.log(Array.of(1, 2, 3)) // [1, 2, 3]

// console.log(Array(7))          // [ , , , , , , ]
// console.log(Array(1, 2, 3))    // [1, 2, 3]

// 4.concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

{
// let arr1 = ["a", "b", "c"];
// let arr2 = ["d", "e", "f"];

// let arr3 = arr1.concat(arr2,arr);

// console.log(arr3);  // [ "a", "b", "c", "d", "e", "f" ]

// console.log(arr1);  // ["a", "b", "c"]

// console.log(arr2);  // ["d", "e", "f"]
}

// 5.copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。
{
    // let arr = ["黄", "金", "亮", "你","好"];
    // arr.copyWithin(1, 2, 3);
    // console.log(arr) //[ '黄', '亮', '亮', '你', '好' ]

// target(目标位置) === 1:"金"
// start(copy起始位置) === 2:"亮", 
// end(copy结束位置不包含该位置) === 3:"你"
}