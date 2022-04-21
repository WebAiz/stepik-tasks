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

citiesOnly([
    {
        city: "Los Angeles",
        temperature: "  101 °F   ",
    },
    {
        city: "San Francisco",
        temperature: " 84 ° F   ",
    },
]); // ['Los Angeles', 'San Francisco']

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

tempForecasts([
    {
        city: "Pasadena",
        temperature: " 101 °F",
        state: "california",
        region: "West",
    },
]); //['38°Celsius in Pasadena, California']

const hasOddNumber = (arr) => {
    //your code
    return true;
}