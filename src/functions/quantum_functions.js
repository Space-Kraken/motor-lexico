import { codigos } from "./Palabras_reservadas";
export { values };

//? identificador valor
let values = {
  ident: 0,
  asings: 0,
  size: null,
  index: null,
  function: q0,
  errors: error_manager,
  output: "",
};

//? Arreglo de caracteres (alfabeto)
const keyWords = ["l", "c", "f", "i", "e", "n", "p", "t"];

//? patrone
const chars = [" ", "=", ";", "<"];
const opereadores = ["+", "/", "%", "*", "-", "="];
const relacionales = ["=", "<", ">"];
const logicos = ["|", "&", "!"];
const letters = /[^A-z]/;
const numbers = /[^0-9]/;
// const ids = /[^A-z]/;

function test() {
  return "hi from quantum functions";
}

function q0(code) {
  console.log(values.size + "/" + values.index);
  if (values.size > values.index) {
    if (code.charAt(values.index) === "") {
      //especial
      values.output += codigos[34].num + " ";
      values.index += 1;
    }
    if (keyWords.indexOf(code.charAt(values.index)) === -1) {
      q1(code);
    } else {
      values.output = "test a";
    }
    // switch (keyWords.indexOf(code.charAt(values.index))) {
    //   case -1:
    //     q1(code);
    //     // values.output += "ids";
    //     break;
    //   default:
    //     values.output += "palabra reservada";
    //     break;
    // }

    // //! <- sentencia de control
    // console.log(keyWords.indexOf(code.charAt(index)));
    // //! BORRAR AL TERMINAR->
    // if (keyWords.indexOf(code.charAt(index)) === -1) {
    //   //? automata de identificadores
    //   output += q1(code, size, index + 1);
    // } else {
    //   //? Automata de palabras clave
    //   output += "Automata de palabras reservadas";
    // }
  }
  //* Retorno de la cadena con el codigo modificado (codificado)
  return values.output;
}

function q1(code) {
  let boolean = true;
  let numero, letra;
  while (boolean) {
    numero = !code.charAt(values.index).match(numbers);
    letra = !code.charAt(values.index).match(letters);
    if (values.size > values.index) {
      if (letra || numero) {
        values.index++;
      } else {
        boolean = false;
        q2(code);
      }
    } else {
      boolean = false;
      error_manager(1, 0);
    }
  }
  values.index += 1;
  q0(code);
}
function q2(code) {
  switch (code.charAt(values.index)) {
    case "+":
      //especial
      values.output += (values.ident += 1) + " " + codigos[11].num + " ";
      break;
    case "/":
      values.output += (values.ident += 1) + " " + codigos[12].num + " ";
      break;
    case "%":
      values.output += (values.ident += 1) + " " + codigos[13].num + " ";
      break;
    case "*":
      values.output += (values.ident += 1) + " " + codigos[14].num + " ";
      break;
    case "-":
      //especial
      values.output += (values.ident += 1) + " " + codigos[15].num + " ";
      break;
    case "=":
      //especial
      values.output += (values.ident += 1) + " " + codigos[16].num + " ";
      break;
    default:
      q3(code);
      break;
  }
  values.index += 1;
  q0(code);
  // values.output += (values.ident += 1) + " ";
}
function q3(code) {
  switch (code.charAt(values.index)) {
    case ".":
      //especial
      values.output += (values.ident += 1) + " " + codigos[25].num + " ";
      break;
    case ",":
      //especial
      values.output += (values.ident += 1) + " " + codigos[26].num + " ";
      break;
    case ";":
      //especial
      values.output += (values.ident += 1) + " " + codigos[33].num + " ";
      break;
    default:
      // values.output += codigos[34].num + " ";
      q0(code);
      // values.index += 1;
      break;
  }
  values.index += 1;
  q0(code);
}

// // //? Automata de identificadores
// function q1(code) {
//   //? Variable temporal de retorno
//   // return "123" + index + " " + q0(code, size, index + 1);
//   //? Validacion del indice y el tamaño de la cadena NO BORRAR
//   if (values.size > values.index) {
//     //! <- Sentencia de control
//     console.log(
//       code.charAt(values.index) + " " + chars.indexOf(code.charAt(values.index))
//     );
//     //! BORRAR AL TERMINAR->

//     //? Validacion
//     if (chars.indexOf(code.charAt(values.index)) === -1) {
//       values.index += 1;
//       values.output += q1(code);
//     } else {
//       values.ident += 1;
//       values.index += 1;
//       values.output = values.ident + " " + q0(code);
//     }
//   } else {
//     values.output = "false";
//   }
// }
function error_manager(type, triger) {
  switch (type) {
    case 0:
      values.output = 'Error 0x01: Invalid start element: "' + triger + '"';
      break;
    default:
      values.output = "Unknow Error Found";
  }
  return values.output;
}
