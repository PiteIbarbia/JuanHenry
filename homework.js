//   1   1   0
//   2   1    0 -> posicion
// 110 = 1 * 2^2 + 1 * 2^1 + 0 * 2^0
// 110 =  4 +  2
// 110(2) = 6(10)

// ['1', '1', '0']
//  2    1    0

// array.length = 3 

function BinarioADecimal(num) {
  // tu codigo aca
  var array = num.split('');
  // var decimal = 0;

  // for(var i = 0; i < array.length; i++) {
  //   decimal = decimal + array[i] * Math.pow(2, array.length - 1 - i)
  // }
  // return decimal;

  var decimal = array.reduce(function(acc, curr, i) {
    return acc + curr * Math.pow(2, array.length - 1 - i)
  },0)

  return decimal;
}

// PASO 1
// array.length = 3
// decimal = 0
// decimal = 0 + 1 * Math.pow(2, 3 - 1 - 0) -> 2^2
// decimal = 4

// PASO 2
// array.length = 3
// decimal = 4
// decimal = 4 + 1 * Math.pow(2, 3 - 1 - 1)
// decimal = 4 + 1 * Math.pow(2, 1)
// decimal = 4 + 2 = 6

// PASO 3
// array.length = 3
// decimal = 6
// decimal = 6 + 0 * Math.pow(2, 3 - 1 - 2)
// decimal = 6 + 0 * Math.pow(2, 0)
// decimal = 6 + 0 = 6



// 9 / 2 = 4 (1) ---> 4.5 --> 4 - 1
// 4 / 2 = 2 (0)
// 2 / 2 = 1 (0)
// 1         (1)
// 9(10) = 1001(2)

// Paso 1
// num = 9
// ['1']

// Paso 2
// num = 4
// ['0', '1']

// Paso 3
// num = 2
// ['0', '0', '1']

// Paso 4
// num = 1
// ['1', '0', '0', '1']

// '1001'

function DecimalABinario(num) {
  // tu codigo aca
  var binario = [];
  while(num >= 1) { // num > 0
    var resto = num % 2; // 
    binario.unshift(resto);
    num = (num - resto) / 2; // (9 -1) = 8 / 2 = 4 => Math.floor(num / 2) 4
  }

  return binario.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}