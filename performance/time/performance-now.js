const performance = require("perf_hooks");

function counter(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);        
    }
}

let startTime = performance.performance.now();

counter(5);

let finalTime = performance.performance.now();

let duration = finalTime - startTime;
console.log(`The algorithm counter last ${duration}`);