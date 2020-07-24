export { ident, q0 };

//? identificador valor
let ident;

//? Arreglo de estados
const Q = [];

//? Arreglo de caracteres (alfabeto)
const V = ["l", "c", "f", "i", "e", "n", "p"];

//? Matriz de transicion
const M = [];

//? Arreglo de estados finales
const F = ["a"];

//? patrones
const numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const chars = [" ", "=", ";"];

function test() {
  return "hi from quantum functions";
}

function q0(code, size, index) {
  let output = "";
  if (size > index) {
    //! <- sentencia de control
    console.log(V.indexOf(code.charAt(index)));
    //! BORRAR AL TERMINAR->
    if (V.indexOf(code.charAt(index)) === -1) {
      //? automata de identificadores
      output += q1(code, size, index + 1);
    } else {
      //? Automata de palabras clave
      output += "Automata de palabras reservadas";
    }
  }
  //* Retorno de la cadena con el codigo modificado (codificado)
  return output;
  // if (numArray.some((element) => element === code.charAt(index))) {
  //   return 'err invalid position for element: "' + code.charAt(index) + '"';
  //   // return numArray.indexOf(code.charAt(index));
  // } else {

  // }
}

//? Automata de identificadores
function q1(code, size, index) {
  //? Variable temporal de retorno
  let output = "";
  // return "123" + index + " " + q0(code, size, index + 1);
  //? Validacion del indice y el tamaño de la cadena NO BORRAR
  if (size > index) {
    //! <- Sentencia de control
    console.log(code.charAt(index) + " " + chars.indexOf(code.charAt(index)));
    //! BORRAR AL TERMINAR->

    //? Validacion
    if (chars.indexOf(code.charAt(index)) === -1) {
      output = q1(code, size, index + 1);
    } else {
      ident = ident + 1;
      output = ident + " " + q0(code, size, index + 1);
    }
  } else {
    output = "false";
  }
  return output;
}
function q2() {}
function q3() {}
function q4() {}
function q5() {}
function q6() {}
function q7() {}
function q8() {}
function q9() {}
function q10() {}
function q11() {}
function q12() {}
function q13() {}
function q14() {}
function q15() {}
function q16() {}
function q17() {}
function q18() {}
function q19() {}
function q20() {}
function q21() {}
function q22() {}
function q23() {}
function q24() {}
function q25() {}
function q26() {}
