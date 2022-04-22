let arr = [1, 2, 3];
function log(a) {
    console.log(a);
}

function forEach(array, func) {
    for (const item of array) {
        func(item)
    }
}

// forEach(arr, log); // 1 2 3

////////////////////////////
const displayMethods = (obj) => {
    return Object.getOwnPropertyNames(obj).filter(function (p) {
        return typeof obj[p] === 'function';
    });
}
// console.log(displayMethods(Array));

////////////////////////////
const citiesOnly = (arrOfObj) => {
    return arrOfObj.map((arr) => arr.city)
}

// citiesOnly([
//     {
//         city: "Los Angeles",
//         temperature: "  101 °F   ",
//     },
//     {
//         city: "San Francisco",
//         temperature: " 84 ° F   ",
//     },
// ]); // ['Los Angeles', 'San Francisco']

//////////////
function capitalizeFirstLetter(string) {
    // string.charAt(0).toUpperCase() + string.slice(1);
    return string.replace(/\b\w/g, l => l.toUpperCase())
}

function getCelcius(deg) {
    const fahrenheit = deg.match(/-?\d+/g)
    const celcius = (fahrenheit - 32) * 5 / 9;
    return Math.floor(celcius)

}
const tempForecasts = (arr) => {
    return arr.map(item => {
        const degree = getCelcius(item.temperature);
        const state = capitalizeFirstLetter(item.state)
        return `${degree}°Celsius in ${item.city}, ${state}`
    })
}

// tempForecasts([
//     {
//         city: "Pasadena",
//         temperature: " 101 °F",
//         state: "california",
//         region: "West",
//     },
// ]); //['38°Celsius in Pasadena, California']

//////////////////
const adder = (arr, result) => {
    const initialValue = result || 0
    return arr.reduce((acc, item) => acc + item, initialValue)
}
///////////////////////////
const sumOrMul = (arr, result) => {
    const initialValue = result || 0
    return arr.reduce((acc, item) => {
        if (item % 2 === 0) {
            return acc * item
        } else {
            return acc + item
        }
    }, initialValue)
};

////////////////////////////
function isEmpty(obj) {
    if (Object.keys(obj).length === 0) return true;
    else {
        for (const [key, value] of Object.entries(obj)) {
            if (typeof value !== 'undefined') return false
        }
        return true
    }
}
// console.log(isEmpty({ a: undefined }))
console.log(isEmpty({ a: undefined, b: '' }))

/////////////////////
function isEqual2(obj1, ob2) {
    if ((obj1 && ob2 && typeof obj1 === 'object' && typeof ob2 === 'object')) {
        (Object.keys(obj1).length === Object.keys(ob2).length) &&
            Object.keys(obj1).reduce(function (isEq, key) {
                return isEq && isEqual2(ob2[key], ob2[key]);
            }, true)
    } else {
        (obj1 === ob2);
    }
}
///////////////////////
function invert(obj) {
    var result = {};
    for (var key in obj) {
        result[obj[key]] = key;
    }
    return result;
}

//////////////
function isPropertyExistFn(obj, key) {
    if (obj[key] !== undefined) return true
    return false
}

function zip(...arguments) {
    const result = arguments.reduce((newObj, nestedObj) => {
        for (const [key, value] of Object.entries(nestedObj)) {
            const isPopertyExist = isPropertyExistFn(newObj, key)
            if (!isPopertyExist) newObj[key] = value
        }
        return newObj
    }, {})
    return result

}
const objects = [
    { foo: 5, bar: 6 },
    { foo: 13, baz: -1 }, // foo - повторяющийся ключ
];

// zip(...objects);

/////////////////////