void main() {
  var listaEstudantes = ['Helena', 'Chico', 'Mario'];
  var quantidadeDeEstudantes = listaEstudantes.length;
  print(quantidadeDeEstudantes);

  var indice = 0;

  do {
    print(listaEstudantes[indice]);
    indice++;
  } while (indice < quantidadeDeEstudantes);
}
