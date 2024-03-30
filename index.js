// function multiplyByTen(myArray) {
//     // Use the map() method to create a new array with each element multiplied by 10
//     const resultArray = myArray.map((data)=>{
//         return data;
        
//     })
//     return resultArray
// }

// // Sample Input 1
// const input1 = [12, 2, 2, 4, 1];
// const output1 = multiplyByTen(input1);
// console.log("Sample Output 1:", output1);

// Function to filter out even numbers from an array
function filterEvenNumbers(myArray) {
    // Use the filter() method to create a new array with only the even numbers
    const resultArray = myArray.filter((data) =>{
        return data ? data%2 === 0 : ""
    })
    return resultArray;
}

// Sample Input 1
const input1 = [12, 5, 7, 8, 3, 2];
const output1 = filterEvenNumbers(input1);
console.log("Sample Output 1:", output1);