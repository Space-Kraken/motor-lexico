import { codigos, regKW } from "./Palabras_reservadas";
export { final };
let val;
let iden = 6000;
let vals = 7000;

function final(code) {
  val = code;
  for (let i = 0; i < 20; i++) {
    key_words();
  }
  for (let i = 0; i < 24; i++) {
    for (let b = 0; b < 100; b++) {
      repo(10 + i);
    }
  }
  for (let c = 0; c < 100; c++) {
    values(vals + c);
    ids(iden + c);
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
  // if (val.search(regKW[i].exp) !== -1) {
  //   val = val.replace(palabra, num);
  // } else {
  // }
}

function key_words() {
  for (let i = 0; i < 10; i++) {
    let palabra = codigos[i].valor;
    console.log(palabra);
    let num = codigos[i].num;
    console.log("Encotnrado?" + val.search(regKW[0].exp));
    if (val.search(regKW[i].exp) !== -1) {
      val = val.replace(palabra, num);
    } else {
    }
  }
}
