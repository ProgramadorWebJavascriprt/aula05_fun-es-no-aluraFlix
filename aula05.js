// Terça-feira,28/09/2021{à tarde }das 13:42:00 as   h +|-
function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
      listarFilmesNaTela(filmeFavorito);
    } else {
      console.error("Endereço de filme inválido");
    }
  
    document.getElementById("filme").value = "";
  
    // console.log(campoFilmeFavorito);
  }
  function listarFilmesNaTela(filme) {
    console.log(filme);
  
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementolistaFilmes = document.getElementById("listaFilmes");
    elementolistaFilmes.innerHTML =
      elementolistaFilmes.innerHTML + elementoFilmeFavorito;
  }
  