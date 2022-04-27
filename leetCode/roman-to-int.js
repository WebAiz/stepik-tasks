var romanToInt = function (s) {
    let isIBefore = true;
    let isXBefore = true;
    let isCBefore = true;
    for (const letter of s) {
        let number = 0;


    }
};

function getNum(letter, number) {
    switch (letter) {
        case 'I': {
            return number += 1
        }
        case 'V': {
            return number += 5
        }
        case 'X': {
            return number += 10;
        }
        case 'L': {
            return number += 50;
        }
        case 'C': {
            return number += 100;
        }
        case 'D': {
            return number += 500;
        }
        case 'M': {
            return number += 1000;
        }
        default:
            break

    }
}

function getNumCountList(arr) {
    const newList = {}
    for (const num of arr) {
        if (newList.length === 0) newList[num] = 1;
        if (newList[num] !== undefined) newList[num] = newList[num] + 1;
        else newList[num] = 1;
    }
    return newList;
}

var majorityElement = function (nums) {
    let majorityKey = null;
    let majorityVal = 1;
    const list = getNumCountList(nums);
    for(const [key, value] of Object.entries(list)){
        // console.log(key, value, majorityKey, Number(key))
        if(majorityKey === null) majorityKey = Number(key);
        if(value > majorityVal) {
            majorityKey = Number(key);
            majorityVal = value
        }
    }
    return majorityKey

};
console.log(majorityElement([1, 1, 1, 2, 3, 2, 5]))