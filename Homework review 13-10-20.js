function BinarioADecimnal(num) {
    var array = num.split('');
    var decimal = array.reduce(function(acc, curr, i) {
        return acc + curr * Math.pow(2, array.length -1 - i)
    },0)

    return decimal;
}