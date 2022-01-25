function counter(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);        
    }
}

function repeat(array) {
    let arrayRepeat = array;
    return arrayRepeat;
}

function numberToString(array) {
    let result = array.map(item => item.toString());
    return result;
}

console.log(numberToString([1, 2, 3]));

function twoDimensional(value) {
    let x = new Array(value);
    for (let i = 0; i < value; i++) {
        x[i] = new Array(value).fill(0);        
    }
    return x;
}
console.log(twoDimensional(5));