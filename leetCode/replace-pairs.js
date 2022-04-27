const s = "dcab"
const pairs = [[0,3],[1,2]]

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
    return this.substring(0, index) + replacement + this.substring(index + 1);
}
var smallestStringWithSwaps = function(s, pairs) {
    let newStr = s
    for(const [index1, index2] of pairs){
        const tempChar = newStr.charAt(index1)
        newStr = newStr.replaceAt(index1, newStr.charAt(index2));
        newStr = newStr.replaceAt(index2, tempChar);
    }
    return newStr
};
// console.log(smallestStringWithSwaps(s, pairs))


var isPalindrome = function(x) {
    if(x < 0) return false
    const text = x.toString();
    const getHalf = Math.floor(x/2);
    for(let i = 0; i < getHalf; i++){
        if(text.charAt(i) !== text.charAt(text.length - 1 - i)) return false
    }
    return true
};
console.log(isPalindrome(-121))