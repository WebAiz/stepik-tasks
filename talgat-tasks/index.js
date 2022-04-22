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
greeting.salem().privet().salem()