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
      console.log("err");
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
    try {
      numero = !code.charAt(values.index).match(numbers);
      letra = !code.charAt(values.index).match(letters);
    } catch (error) {
      values.index += 1;
      continue;
    }
    if (values.size > values.index) {
      if (letra || numero) {
        values.index += 1;
      } else {
        blank_space_reducer(code)
          ? console.log("nothing")
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
      values.output += codigos[11].num + " ";
      break;
    case "/":
      values.output += codigos[12].num + " ";
      break;
    case "%":
      values.output += codigos[13].num + " ";
      break;
    case "*":
      values.output += codigos[14].num + " ";
      break;
    case "-":
      //especial
      values.output += codigos[15].num + " ";
      break;
    case "=":
      //especial
      values.output += codigos[16].num + " ";
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
      values.output += codigos[25].num + " ";
      break;
    case ",":
      //especial
      values.output += codigos[26].num + " ";
      break;
    case ";":
      //especial
      values.output += codigos[33].num + " ";
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

//Signos de agrupacion by Cris
function q4(code) {
  switch (code.charAt(values.index)) {
    case "(":
      values.output += (values.ident += 1) + " " + codigos[28].num + " ";
      break;
    case ")":
      values.output += (values.ident += 1) + " " + codigos[29].num + " ";
      break;
    case "{":
      values.output += (values.ident += 1) + " " + codigos[30].num + " ";
      break;
    case "{":
      values.output += (values.ident += 1) + " " + codigos[31].num + " ";
      break;
    case "}":
      values.output += (values.ident += 1) + " " + codigos[32].num + " ";
      break; 
    case "[":
      values.output += (values.ident += 1) + " " + codigos[33].num + " ";
        break;
    case "]":
      values.output += (values.ident += 1) + " " + codigos[34].num + " ";
          break;
    default:
      q0(code);
      break;
  }
  values.index += 1;
  q0(code);
}

//palabras reservadas by Cris
function q5(code) {
  switch (code.charAt(values.index)) {
    case "function":
      values.output += (values.ident += 1) + " " + codigos[1].num + " ";
      break;
    case "this":
      values.output += (values.ident += 1) + " " + codigos[2].num + " ";
      break;
    case "if":
      values.output += (values.ident += 1) + " " + codigos[3].num + " ";
      break;
    case "else":
      values.output += (values.ident += 1) + " " + codigos[4].num + " ";
      break;
    case "console":
      values.output += (values.ident += 1) + " " + codigos[5].num + " ";
      break; 
    case "info":
      values.output += (values.ident += 1) + " " + codigos[6].num + " ";
      break;
    case "error":
      values.output += (values.ident += 1) + " " + codigos[7].num + " ";
      break;
    case "log":
      values.output += (values.ident += 1) + " " + codigos[8].num + " ";
      break;
    case "var":
      values.output += (values.ident += 1) + " " + codigos[9].num + " ";
      break;
    case "let":
      values.output += (values.ident += 1) + " " + codigos[10].num + " ";
      break;
    case "const":
        values.output += (values.ident += 1) + " " + codigos[11].num + " ";
      break;
    default:
      q0(code);
      break;
  }
  values.index += 1;
  q0(code);
}

//Operadores aritmeticos by Cris
function q6(code) {
  switch (code.charAt(values.index)) {
    case "+":
      values.output += (values.ident += 1) + " " + codigos[12].num + " ";
      break;
    case "/":
      values.output += (values.ident += 1) + " " + codigos[13].num + " ";
      break;
    case "%":
      values.output += (values.ident += 1) + " " + codigos[14].num + " ";
      break;
    case "*":
      values.output += (values.ident += 1) + " " + codigos[15].num + " ";
      break;
    case "-":
      values.output += (values.ident += 1) + " " + codigos[16].num + " ";
      break; 
    case "=":
      values.output += (values.ident += 1) + " " + codigos[17].num + " ";
        break;
    default:
      q0(code);
      break;
  }
  values.index += 1;
  q0(code);
}
//Operadores relacionales by Cris
function q7(code) {
  switch (code.charAt(values.index)) {
    case "==":
      values.output += (values.ident += 1) + " " + codigos[18].num + " ";
      break;
    case "<":
      values.output += (values.ident += 1) + " " + codigos[19].num + " ";
      break;
    case ">":
      values.output += (values.ident += 1) + " " + codigos[20].num + " ";
      break;
    case "<=":
      values.output += (values.ident += 1) + " " + codigos[21].num + " ";
      break;
    case ">=":
      values.output += (values.ident += 1) + " " + codigos[22].num + " ";
      break; 
    default:
      q0(code);
      break;
  }
  values.index += 1;
  q0(code);
}
//Operadores Logicos by Cris
function q8(code) {
  switch (code.charAt(values.index)) {
    case "||":
      values.output += (values.ident += 1) + " " + codigos[23].num + " ";
      break;
    case "&&":
      values.output += (values.ident += 1) + " " + codigos[24].num + " ";
      break;
    case "!":
      values.output += (values.ident += 1) + " " + codigos[25].num + " ";
      break;
    default:
      q0(code);
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
