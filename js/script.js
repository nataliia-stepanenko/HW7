"use strict"
// 1
function sumTo(n){
    if (n===1){
    return n;
    } else {
    return n + sumTo(n-1);
    }
}
console.log(sumTo(4)); // 10
console.log(sumTo(3)); // 6

// 2
// function findShort(sentence){
//     let arr = sentence.split(' ');
//     let sorted = arr.sort((a, b) => a.length - b.length);
//     return sorted[0];
// }

// const sentence = "Lorem ipsum dolor sit amet";
// console.log(findShort(sentence)); // sit
// console.log(findShort("Hello world")); // Hello
// console.log(findShort("Hi")); // Hi
// console.log(findShort("She is David's sister")); // is