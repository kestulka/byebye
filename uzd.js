"use strict";

const multiDimensionsArr = [1, [3, [7,6]],8,[[6,[3], 11]],9]

// console.log(threeDimensionsArr.join(' '))

var newArray = [];
for(let i=0; i<multiDimensionsArr.length;++i){
    for(let j=0; j<multiDimensionsArr[i].length; ++j)
    newArray.push(multiDimensionsArr[i][j])
}
console.log(newArray)

var newArray2 = [].concat(...multiDimensionsArr)
console.log(newArray2)








