class Greeting {
    hello() {
        console.log("Hello")
        return this
    }

    salem() {
        console.log("Salem")
        return this
    }

    privet() {
        console.log("Privet");
        return this
    }
}

const greeting = new Greeting()
// greeting.salem().privet().salem()
////////////////////////
function wait(delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, delay)
    })
}

async function exec() {
    try {
        await wait(1000);
        console.log("Hello!"); // after 1 sec
        await wait(2000);
        console.log("Bye!"); // after 2 secs
    } catch (err) {
    }
}
exec()