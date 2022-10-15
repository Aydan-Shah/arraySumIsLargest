function ArraySum(arr) {
    let tempArr = arr.sort((a,b) => {
        return a-b;
    })
    let largest = tempArr.pop();
    // return largest;
    let number = 0;
    tempArr.forEach(item=>number += item);
    return largest === number;
}

console.log(ArraySum([1,2,4,6,13])) // true
console.log(ArraySum([1,2,4,34,22])) //false