var note = [];

function mae() {
  let erro = true;
  let nota = Number(notas.value);

  if (Number.isNaN(nota) || nota > 10 || nota < 0) {
    error.innerHTML = `Pensando...`;
    erro = false;
    setTimeout(() => {
      alert(`Nota invalida`);
      error.innerHTML = `E isso é nota mlk?`;
      console.error(`Erro \nnota invalida`);
    }, "2000");
  }

  if (erro) {
    error.innerHTML = "Pensando...";

    if (notas.value == ``) {
      if (note[note.length - 1]!= 10) {
        setTimeout(() => {
          error.innerHTML = `<center>Eu não te criei pra tirar essas notas, um ${
            note[note.length - 1]
          }?! filho meu só tira 10!</center>`;
        }, "2000");
      } else {
        setTimeout(() => {
          error.innerHTML = `Não fez mais que tua obrigação com essa nota ${
            note[note.length - 1]
          }`;
        }, "2000");
      }
    } else {
      note.push(nota);

      if (note[note.length - 1] != 10) {
        setTimeout(() => {
          error.innerHTML = `<center>Eu não te criei pra tirar essas notas, um ${
            note[note.length - 1]
          }?! filho meu só tira 10!</center>`;
        }, "2000");
      } else {
        setTimeout(() => {
          error.innerHTML = `Não fez mais que tua obrigação com essa nota ${
            note[note.length - 1]
          }`;
        }, "2000");
      }
    }
  }
  notas.value = ``;
}

function vo() {
  let erro = true;
  let nota = Number(notas.value);

  if (Number.isNaN(nota) || nota > 10 || nota < 0) {
    error.innerHTML = `Pensando...`;
    erro = false;
    setTimeout(() => {
      alert(`Nota invalida`);
      error.innerHTML = `Vc tem certeza meu netinho?`;
      console.error(`Erro \nnota invalida`);
    }, "2000");
  }

  if (erro) {
    error.innerHTML = "Pensando...";

    if (notas.value == ``){
        setTimeout(() => {
          error.innerHTML = `Muito bem, que neto inteligente, porque tirou ${
            note[note.length - 1]
          }`;
        }, "2000");
    } else {
        note.push(nota);
        setTimeout(() => {
            error.innerHTML = `Muito bem, que neto inteligente, porque tirou ${
                note[note.length - 1]
            }`;
        }, "2000");
    }
  }
  notas.value = ``;
}
