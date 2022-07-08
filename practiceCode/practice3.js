function bar(a=1) {
    arguments[0] = 100;
    return a;
}
console.log(bar());

//arguments, apply 응용

function sum(arg1, arg2) {
    return arg1 + arg2;
}


o1 = {val1:1, val2:2, val3:3, sum:sum}
o2 = {v1:10, v2:50, v3:100, v4:25, sum:sum}

function sum(){
    var _sum = 0;
    for(a in this){
        if (typeof this[a] !== 'function') 
            _sum += this[a];
    }
    return _sum;
}
console.log(sum.apply(o1))  //o1.sum()
console.log(sum.apply(o2))  //o2.sum()

console.log(o2.sum());