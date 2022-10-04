//!  Linear Search
// To search element with inbuilt function
// arr.indexOf(el)


let arr = [51, 25, 44, 65, 6, 73];
let el = 44;
let index = undefined
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
        console.log("Found at index ", i);
        //  it will not run after that 
        index=i
        break;
    }
}


console.log(index);