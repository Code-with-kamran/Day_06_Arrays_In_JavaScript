// Arrays 
let numArray = [1,2,3,4,5];
console.log(numArray);

console.log(numArray[0]);
console.log(numArray[numArray.length -1 ]);


// push method to remove an array
numArray.push(6);
numArray.push(9);
console.log(numArray);


// pop method to remove an array
numArray.pop();
console.log(numArray);


// shift Method to remove first element of the array

numArray.shift();
console.log(numArray);


// Unshift to add an element to the first index of array

numArray.unshift(55);
console.log(numArray);



// map  method  to double an array
let newArray = numArray.map((val)=>{
    return val*2;
});

console.log(newArray);

// filter method to create a new  array of even number

let evenArray = numArray.filter((val)=>{
    return (val % 2 == 0);
});
console.log(evenArray);

// reduce method to find sum
let sum = numArray.reduce((res,ele) =>{
    return res+ele;
})
console.log(`sum is ${sum} using reducer method`);

// iterate using for loop

for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);
    
}
//  iterate using foreach loop

numArray.forEach((Element) => {
    console.log(Element);
})


let arraytd = [[1,2,3,4,],[5,6,7,8],[1,2,3,4,],[5,6,7,8]];
arraytd.forEach((ele)=>{
    console.log(ele);
});

console.log(arraytd[3][2]);