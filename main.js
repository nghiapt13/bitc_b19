// 1.1
// function BinhPhuong1(x){
//     x = x *x;
//     console.log(x);
// }
// BinhPhuong1(5);



// 1.2
// function BinhPhuong(x){
//     return x *x
// }
// console.log(BinhPhuong(5))


// 2.1
// arr = [8,13,6,23,15,28];

// function logMin(){
//     const min = arr[0];

//     for(let i = 0; i < arr.length; i++){
//         if (min > arr[i]){
//             min = arr[i];
//         }
//     }
//     console.log(min);
// }
// logMin();


// Bài 1
alert("Bài 1");
function Year(year){
    return "Thế kỉ hiện tại là thế kỉ " + (Math.floor((year - 1)/100) +1);
}
alert(Year(prompt("Nhập năm:")));

// Bài 2
alert('Bài 2 nè')
const arr = ["Xin","chào","mình","tên","là"];
function arr2(arr){
    return arr.join(' ');
}
alert(arr2(arr)+ " Nghĩa");

// Bài 3 (chép mạng :)) )
alert('Bài 3 chép mạng :))');
alert('Ở trong console nhóe');
let arr3 = [23, 0, "bitc", false, true, NaN, 12, "hi", undefined, [], ""];

function removeFalsey(arr3) {
    // newly created array
    let newArr = [];

    // Iterate the array using the forEach loop
    arr3.forEach((k) => {
        // check for the truthy value
        if (k) {
            newArr.push(k);
        }
    });
    // return the new array
    return newArr;
}

console.log(removeFalsey(arr3));