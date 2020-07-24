import { ident, q0 } from "./quantum_functions";

//* Export de la Funcion/Estaddo inicial
export { Main };

//* Cadena del codigo funal
let encoded = "";

//! patrones
const letras = /[^A-z]/;

function Main(code) {
  ident = 5999;
  if (code.charAt(0).match(letras) === null || code.charAt(0) === "/") {
    encoded = q0(code, code.length, 0);
    // console.log(code.length);
    return encoded;
  } else {
    return 'Error 0x01: invalid element: "' + code.charAt(0) + '"';
  }
}
