//! Insertion in an Array 

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let pos = 2;
let elm = 34

for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= pos) {
        arr[i + 1] = arr[i]
        if (i == pos) {
            arr[i] = elm
        }
    }
}
console.log(arr);
