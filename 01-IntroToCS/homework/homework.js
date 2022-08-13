'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let decimal = 0 // primero inicio una variable en cero para almacenar mi resultado
  for (let i=0; i < num.length; i++){ // se inicia el for loop para iterar sobre la variable 'num'
    decimal += num[i]*2**(num.length -1 -i) } // se hace una operacion para sumar a la variable 'decimal'
                                              //  a cada numero se lo multipica por dos y a la vez se lo 
                                              // por la potencia de la posicion inversa de la secuencia 
                                              // numerica decimal.
                                              // se pone -1 y -i porque si no ponemos -i, en cada iteracion
                                              // va a tener la misma potencia de esta manera -i funciona 
                                              // como un modificador de iteracion.
    return decimal
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = ''
  while(num !== 0) {
    binario = num%2 + binario  
   num = Math.floor(num/2)
  }
  return binario

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}