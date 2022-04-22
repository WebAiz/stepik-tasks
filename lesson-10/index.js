// async function job() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("hello world"), 2000);
//     });
//     return await promise
// }

/////////////////
const job = (data) => {
    return new Promise((resolve, reject) => {
        if (typeof data !== 'number') return reject("error")
        if (data % 2 === 1) return setTimeout(() => resolve("odd"), 1000);
        if (data % 2 === 0) return setTimeout(() => reject("even"), 2000);
    })
};
// job(2)

///////////////////
const badResult = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log(i);
        }, 10);
    }
};


const solution = () => {
    for (var i = 0; i < 10; i++) {
        ((i) => setTimeout(function () {
            console.log(i);
        }, 10))(i)
    }
};
// solution()

const addAsync = (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Must provide two parameters')
        return resolve(a + b);
    })
};

//////////////
function foo(callback) {
    setTimeout(function () {
        callback("A");
    }, Math.random() * 100);
}

function bar(callback) {
    setTimeout(function () {
        callback("B");
    }, Math.random() * 100);
}

function baz(callback) {
    setTimeout(function () {
        callback("C");
    }, Math.random() * 100);
}

// (async function promise() {
//     const fooPromise = await new Promise((resolve, reject) => foo(resolve))
//     const barPromise = await new Promise((resolve, reject) => bar(resolve))
//     const bazPromise = await new Promise((resolve, reject) => baz(resolve));
//     console.log(fooPromise);
//     console.log(barPromise);
//     console.log(bazPromise);
// })()

const failNTimes = (n) => async (...v) => --n < 0 ? v : Promise.reject(Error(`x:${v}`));

const retry = (count, callback) => {
    return function cb(num) {
        callback()
    }
}


retry(0, ctx.failNTimes(0)(2)) // 2