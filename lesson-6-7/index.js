function printPattern(a) {
    let stars = ''
    for (let i = 0; i < a; i++) {
        stars = stars + generateStars(i) + '\n'
    }

    //console.log(stars)
    return stars.trim()
}
function generateStars(a) {
    let stars = ''
    for (let i = 0; i <= a; i++) {
        stars = stars + '* '
    }
    return stars.trim()
}

// printPattern(5)

function fizzBuzz(a) {
    let i = 1;
    let str = ''
    while (i <= a && i > 0) {
        str = str + generateStr(i) + " "
        i++;
    }
    return str
}
function generateStr(a) {
    if (a % 3 === 0 && a % 5 === 0) {
        return 'FizzBuzz'
    }
    else if (a % 3 === 0) {
        return 'Fizz'
    }
    else if (a % 5 === 0) {
        return 'Buzz'
    }
    else return a
}

// fizzBuzz(5)

function isPlainObject(element) {

    if (
        typeof yourVariable === 'object' &&
        !Array.isArray(yourVariable) &&
        yourVariable !== null
    ) {
        executeSomeCode();
    }

}
// const cycle = { cycle: '' }
// console.log(cycle)

const src = { nested: { key: "value" } }
const path = "nested.key";

function get(src, path) {
    const paths = path.split('.');
    for (let i = 0; i < paths.length; i++) {
        try {
            src = src[paths[i]]
        } catch (e) {
            return undefined;
        }
    };
    // console.log(src)
    return src;
}


// get(src, path); // -> 'Andrii'

let arrayOfLetters = { list: ["a", "b", "c", "d", "e", "f"] };
const anotherArrayOfLetters = arrayOfLetters;
arrayOfLetters = {}
// console.log(anotherArrayOfLetters);

const indexOf = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) return i;
    }
    return -1
};

const lastIndexOf = (a, b) => {
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] === b) return i;
    }
    return -1
};

const includes = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) return true;
    }
    return false
};
// console.log(includes([1, 2, 3, 4, 5, 4, 3, 2, 1], 5))

const reverse = (a) => {
    if (typeof a === 'string' || a instanceof String) return handleStr(a)
    else if (Array.isArray(a)) return handleArr(a)
}

function handleArr(arr) {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}

function handleStr(str) {
    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str.charAt(i)
    }
    return newStr
}

const array1 = "Almaty";
// reverse(array1); // ["three", "two", "one"]

const operation = (a, b, operation) => {
    switch (operation) {
        case 'add': {
            return add(a, b)
        }
        case 'sub': {
            return sub(a, b)
        }
        case 'div': {
            return div(a, b)
        }
        case 'mult': {
            return mult(a, b)
        }
        default: break
    }
};

function add(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}
function div(a, b) {
    return a / b
}
function mult(a, b) {
    return a * b
}

// operation(1, 2, 'add')

function dayOfTheYear(date) {
    const date0 = new Date(2022, 0, 0);
    const numberOfDays = Math.ceil((date - date0) / 8.64e7)
    //console.log(numberOfDays)
    return numberOfDays;
}
dayOfTheYear(new Date(2022, 1, 1)); // 32

// if (-7) console.log('-7 is truthy') 

function canGetCount(n) {
    let count = n;
    function str() {
        if (count > 0) {
            count--;
            return 'yes'
        }
        else return 'no'
    }
    return str
}

// const getOne = canGetCount(2);

const object = {
    value: true,
    print() {
        function type() {
            return typeof this.value;
        }
        console.log(`${this.value} is ${type.bind(this)()}`);
        return type;
    },
};

// object.print(); // Поправьте замыкание

