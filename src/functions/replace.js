import { codigos } from "./Palabras_reservadas";
export { final };
let val;
let iden = 6000;
let vals = 7000;

function final(code) {
  let finalC;
  val = code;
  for (let c = 0; c < 100; c++) {
    values(vals + c);
  }
  for (let i = 0; i < 34; i++) {
    for (let b = 0; b < 100; b++) {
      repo(i);
      ids(iden + b);
    }
  }
  return val;
}
function ids(i) {
  const regEx = /[A-z]+([0-9]|[A-z])*/;
  val = val.replace(regEx, i + " ");
}
function values(i) {
  const regEx = /["]+([A-z]|[0-9])*["]+/;
  if (val.search(regEx) === -1) {
  } else {
    val = val.replace(regEx, i);
  }
}

function repo(i) {
  let palabra = codigos[i].valor;
  let num = codigos[i].num;
  val = val.replace(palabra, num + " ");
}
