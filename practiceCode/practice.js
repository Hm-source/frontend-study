//.콜백함수

var numbers = [20, 10, 9,8,7,6,5,4,3,2,1]
numbers.sort();

console.log(numbers)


//sort(cumtom 함수)
function sortNumber(a, b) {
    console.log(a, b);
    console.log(b-a);
    return b-a;
}

console.log(numbers.sort(sortNumber))