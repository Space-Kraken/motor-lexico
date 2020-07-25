import { values } from "./quantum_functions";

//* Export de la Funcion/Estaddo inicial
export { Main };

//* Cadena del codigo funal
let encoded = "";

//! patrones
const letras = /[^A-z]/;

function Main(code) {
  values["ident"] = 5999;
  values["size"] = code.length;
  values["index"] = 0;
  values["output"] = "";
  if (
    code.charAt(0).match(letras) === null ||
    (code.charAt(0) === "/" && code.charAt(1) === "/")
  ) {
    encoded = values.function(code, code.length, 0);
    return encoded;
  } else {
    return values.errors(0, code.charAt(0));
  }
}
