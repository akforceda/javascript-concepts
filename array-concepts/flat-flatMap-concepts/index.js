// ------------------------------------------usage of flat()--------------------------------- 
let multiDimensionalArray = [
    [[[1], [2], [3]]],
    [[[4], [5], [6]]],
    [[[7], [8], [9]]],
];

// both produce same results
// use 3 when you know the depth
console.log(multiDimensionalArray.flat(3));

// else use Infinity
console.log(multiDimensionalArray.flat(Infinity));

//output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

// ------------------------------------------usage of flatMap()------------------------------

// usage of flatMap()
let multi = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// flatMap works only for depth 1

console.log(multi.flatMap(elem => elem.slice(0,2)));
// output: [ 1, 2, 4, 5, 7, 8 ]

/* 
if depth is more than 1 then you can nest the flatMap()
    
    let multi = [
        [[1,2,3]],
        [[4,5,6]],
        [[7,8,9]]
    ];
    console.log(multi.flatMap(elem => elem.flatMap(elem => elem.slice(0,2))));
*/

let numbers = [1, 2, 3, 4];
let strings = ['one', 'two', 'three', 'four'];

console.log(numbers.map((elem,index) => [elem,strings[index]]));
// [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ], [ 4, 'four' ] ]

console.log(numbers.flatMap((elem,index) => [elem,strings[index]]));
// [ 1, 'one', 2, 'two', 3, 'three', 4, 'four' ]