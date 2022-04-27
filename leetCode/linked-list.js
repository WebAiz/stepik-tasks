function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const num1 = convertToReverseNum(l1);
    const num2 = convertToReverseNum(l2);
    const tot = num1 + num2;
    return convertToLink(tot)
};

function convertToReverseNum(link) {
    const newArr = []
    while (link.next !== null) {
        newArr.push(link.value);
        link = link.next
    }
    console.log(newArr)
    const reversedArr = reverseArr(newArr);
    return convertToNum(reversedArr)
}

function reverseArr(arr) {
    const newArr = []
    for (const el of arr) {
        newArr.push(el)
    }
    return newArr
}

function convertToNum(arr) {
    return arr.join('')
}

function convertToLink(arr) {
    const initialLink = new ListNode()
    arr.reduce((acc, el) => {
        const newLink = new ListNode(el)
        if (acc === null) {
            initialLink.val = newLink.val;
            return initialLink
        } else {
            acc.next = newLink;
            return newLink
        }
    }, null)
    return initialLink
}