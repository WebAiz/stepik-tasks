// async function job() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("hello world"), 2000);
//     });
//     return await promise
// }

/////////////////
const job = (data) => {
    return new Promise((resolve, reject) => {
        if (typeof data !== 'number') return reject('error');
        if (data % 2 === 1) return setTimeout(() => resolve('odd'), 1000);
        if (data % 2 === 0) return setTimeout(() => reject('even'), 2000);
    });
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
        }, 10))(i);
    }
};
// solution()

const addAsync = (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Must provide two parameters');
        return resolve(a + b);
    });
};

//////////////
function foo(callback) {
    setTimeout(function () {
        callback('A');
    }, Math.random() * 100);
}

function bar(callback) {
    setTimeout(function () {
        callback('B');
    }, Math.random() * 100);
}

function baz(callback) {
    setTimeout(function () {
        callback('C');
    }, Math.random() * 100);
}

async function awaitTimer(timerFn) {
    const letter = await new Promise((resolve, reject) => timerFn(resolve));
    console.log(letter);
    return awaitTimer;
}

// awaitTimer(foo).then(fn => fn(bar)).then(fn => fn(baz));

/////////////////////////////
const failNTimes = (n) => async (...v) => {
    console.log(--n);
    return --n < 0 ? v : Promise.reject(Error(`x:${v}`));
};

const retry = (count, callback) => {
    let attempts = count;
    return new Promise((resolve, reject) => {
        console.log('attempts', attempts);
        const response = callback;
        attempts--;
        resolve(response);
    });
};

retry(2, failNTimes(5)(2)).then(res => console.log(res)).catch(err => console.log("ERROR", err));


// retry(0, ctx.failNTimes(0)(2)); // 2

/////////////////////////

function resolveFn(cb, ...args) {
    return new Promise(resolve => {
        const response = cb(...args);
        resolve(response);
    });
}

function rejectFn(delay) {
    return new Promise((_, reject) => {
        setTimeout(function () {
            reject(new Error('timeout'));
        }, delay);
    });
}

const timeout = (delay, callback) => {
    return function (...args) {
        return Promise.race([resolveFn(callback, ...args), rejectFn(delay)]);
    };
};

function sum(a, b) {
    return a + b;
}

// timeout(300, sum)(2, 3)
//     .then((res) => console.log('RES', res))
//     .catch(err => console.log(err));

// console.log(timeout(300, sum)(2, 3));
