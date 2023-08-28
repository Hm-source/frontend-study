const array = new Array(1000000).fill().map((v, i) => i)

const start = new Date()

let str = "";

$.each(array, (i, v) => {
    str += v
});

console.log(new Date() - start)

// reduce -> 181