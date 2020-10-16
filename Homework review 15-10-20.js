function counter() {
    var contador = 0;
    return function() { // return Contador++
      contador = contador + 1;
      return contador;
    }
  }
  
  function cacheFunction(cb) {
    var cache = {}
    return function(arg) {
      if(cache.hasOwnProperty(arg) === true){
        return cache[arg];
      }
      var resultado = cb(arg);  // 25
      cache[arg] = resultado;
      return resultado;
    }
  }
  //cache = {
  //  5: 25,
  //}
  //var elevaCuadrado = functio(x) { return x * x}
  //var cacheFn = cache (elevaCuadrado)
  //cacheFn(5)
  //cacheFn(5) -> Busco en el cache -> No tengo -> cb(5) -> cache = {5: 25} -> 25
  //cacheFn(5) -> cb(5) NO!!!
  //cacheFn(5) -> Busco en el cache si tengo el 5 -> si tengo -> Devuelvo 25