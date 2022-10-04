//!  Delete Element from an Array

// arr.splice(2,1)
//  it will delte that elemt from that index
let arr = [1, 2, 3, 4, 5, 6, 7]
let pos = 3

for (let i = pos; i < arr.length - 1; i++) {

    arr[i] = arr[i + 1]
}
arr.length = arr.length - 1

console.log(arr);