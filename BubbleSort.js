let arr = [1, 24, 4, 2];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
        console.log(arr);
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        //  swap no. using destructuring it will only work in javascript 
    //   [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}
// console.log(arr);
