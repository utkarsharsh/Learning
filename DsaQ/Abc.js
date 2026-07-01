const fs = require("fs");

console.log("1. Start");

setTimeout(() => {
    console.log("2. setTimeout");
}, 0);

setImmediate(() => {
    console.log("3. setImmediate");
});

Promise.resolve().then(() => {
    console.log("4. Promise");
});

process.nextTick(() => {
    console.log("5. nextTick");
});

fs.readFile(__filename, () => {
    console.log("6. File Read");

    process.nextTick(() => {
        console.log("7. nextTick inside fs");
    });

    Promise.resolve().then(() => {
        console.log("8. Promise inside fs");
    });

    setTimeout(() => {
        console.log("9. setTimeout inside fs");
    }, 0);

    setImmediate(() => {
        console.log("10. setImmediate inside fs");
    });
});

console.log("11. End");

// 1. Start
// 11. End
// 5. nextTick
// 4. Promise
// 2. setTimeout
// 3. setImmediate
// 6. File Read
// 7. nextTick inside fs
// 8. Promise inside fs
// 10. setImmediate inside fs
// 9. setTimeout inside fs