// Merge two array 
let arr1 = [1, 2, 4, 2, 42, 35]
let arr2 = [41, 25, 44, 27, 82, 135]

let arr3 = []

// Sol 1 

for (let i = 0; i < arr1.length; i++) {
    arr3[i] = arr1[i]
}

for (let i = 0; i < arr2.length; i++) {
    arr3[arr1.length + i] = arr2[i]
}



//  Sol 2 




console.log(arr3);