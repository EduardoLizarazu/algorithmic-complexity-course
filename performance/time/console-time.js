function counter(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);        
    }
}

console.time("same-string");

counter(5);

console.timeEnd("same-string");
