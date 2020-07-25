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
function blank_space_reducer(code) {
  let bol = true;
  let find = false;
  while (bol) {
    if (code.charAt(values.index) === " ") {
      find = true;
      values.index += 1;
    } else {
      console.log(typeof code.charAt(values.index));
      find ? (values.output += codigos[34].num + " ") : (find = false);
      bol = false;
    }
  }
  return find;
}
function dellSkipLines(code) {}
function q0(code) {
  console.log(values.size + "/" + values.index);
  if (values.size > values.index) {
    if (keyWords.indexOf(code.charAt(values.index)) === -1) {
      q1(code);
    } else {
      values.output += "test a";
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
        values.index += 1;
      } else {
        blank_space_reducer(code)
          ? q0(code)
          : (values.output += (values.ident += 1) + " ");
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
      values.output +=
        codigos[34].num + " " + codigos[11].num + " " + codigos[34].num + " ";
      break;
    case "/":
      values.output +=
        codigos[34].num + " " + codigos[12].num + " " + codigos[34].num + " ";
      break;
    case "%":
      values.output +=
        codigos[34].num + " " + codigos[13].num + " " + codigos[34].num + " ";
      break;
    case "*":
      values.output +=
        codigos[34].num + " " + codigos[14].num + " " + codigos[34].num + " ";
      break;
    case "-":
      //especial
      values.output +=
        codigos[34].num + " " + codigos[15].num + " " + codigos[34].num + " ";
      break;
    case "=":
      //especial
      values.output +=
        codigos[34].num + " " + codigos[16].num + " " + codigos[34].num + " ";
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
      values.output +=
        codigos[34].num + " " + codigos[25].num + " " + codigos[34].num + " ";
      break;
    case ",":
      //especial
      values.output +=
        codigos[34].num + " " + codigos[26].num + " " + codigos[34].num + " ";
      break;
    case ";":
      //especial
      values.output += " " + codigos[33].num + " ";
      break;

    default:
      // values.output += codigos[34].num + " ";
      q0(code);
      // values.index += 1;
      break;
  }
  values.index += 1;
  blank_space_reducer(code);

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
