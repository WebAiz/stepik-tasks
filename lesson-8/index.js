////////////////////////////////////
class UrlСonstructor {
    constructor(url) {
        this.url = url
        this.params = {}
        this.construct()
    }

    construct() {
        const { baseUrl, rawParams } = this._separateBaseUrlAndParams(this.url)
        if (rawParams) this._handleRawParams(rawParams)
        const completeURL = this._appendParamsToURL(baseUrl)
        return encodeURI(completeURL);
    }

    removeAll() {
        this.params = {};
        const { baseUrl } = this._separateBaseUrlAndParams(this.url)
        this.url = baseUrl
        return this.url
    }

    _separateBaseUrlAndParams() {
        const [baseUrl, rawParams] = this.url.split("?")
        return { baseUrl, rawParams }
    }

    _separateParams(rawParams) {
        return rawParams.split("&")
    }

    _appendParamToParamsObj(url) {
        const [key, value] = url.split("=")
        this.params[key] = value
        return this.params
    }

    _handleRawParams(rawParams) {
        const list = this._separateParams(rawParams)
        for (const item of list) {
            this._appendParamToParamsObj(item)
        }
    }

    _appendParamsToURL(baseUrl) {
        let completeUrl = baseUrl + "?"
        for (const [key, value] of Object.entries(this.params)) {
            completeUrl = completeUrl + `${key}=${value}` + '&'
        }
        return completeUrl.slice(0, -1)
    }
}
const urlСonstructor = new UrlСonstructor("test.kz");
// const urlСonstructor = new UrlСonstructor("https://jmart.kz/products");
// const urlСonstructor = new UrlСonstructor("https://jmart.kz/products?category_id=2879");
// console.log(urlСonstructor.separateBaseUrlAndParams())
// console.log(urlСonstructor.separateParams('category_id=2879&brand_id=2'))
// console.log(urlСonstructor.parseParam('category_id=2879'))
// console.log(urlСonstructor.removeAll())
// console.log(urlСonstructor.construct())
// console.log(urlСonstructor.params.category_id = 1)
// console.log(encodeURI(myUrlWithParams.href)


/////////////////////////////////////
function Book(name) {
    this.name = name;
}

Book.prototype = {
    getName: function () {
        return this.name;
    },
    getUpperName: function () {
        return this.name.toUpperCase()
    }
};

var book = new Book("The Great Gatsby");
// console.log(book.getUpperName());

///////////////////////////////////////////
function isValid(date) {
    if (Object.prototype.toString.call(date) === "[object Date]") {
        if (isNaN(date)) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}
function isAfter(date, date2) {
    if (date.getTime() > date2.getTime()) {
        return true
    } else return false
}
function isBefore(date, date2) {
    if (date.getTime() < date2.getTime()) {
        return true
    } else return false
}
function isFuture(date) {
    const now = new Date()
    if (date.getTime() > now.getTime()) {
        return true
    } else return false
}
function isPast(date) {
    const now = new Date()
    if (date.getTime() < now.getTime()) {
        return true
    } else return false
}

let date = new Date();
let date2 = new Date("");

// console.log(isValid(date)); //true
// console.log(isValid(date2)); //false

/////////////////////////////////////////////
let is = {};
is.num = (n) => typeof n === 'number';
is.nan = (val) => Number.isNaN(val);
is.str = (val) => typeof val === 'string';
is.bool = (val) => typeof val === 'boolean';
is.undef = (val) => typeof val === 'undefined';
is.arr = (val) => Array.isArray(val);
is.obj = (val) => (typeof val === 'object' && !Array.isArray(val) && val !== null);
is.fun = (val) => typeof val === 'function';
is.truthy = (val) => !!val;
is.falsy = (val) => val ? false : true;


////////////////////

function Car(speed, brand) {
    this.speed = speed;
    this.brand = brand;
    this.status = function () {
        return this.brand + " running at " + this.speed + " km/h";
    };
}

Car.prototype.accelerate = function (speed) {
    this.speed = this.speed + speed
};

Car.prototype.brake = function (speed) {
    this.speed = this.speed - speed
};

let car = new Car(0, "Lada");
car.accelerate(20);
console.log(car.status()); // Lada running at 20 km/h
car.brake(5);
console.log(car.status()); // Lada running at 15 km/h

//////////////////////////////////////////////