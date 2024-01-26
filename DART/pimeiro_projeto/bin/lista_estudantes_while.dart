void main() {
  var listaEstudantes = ['Helena', 'Chico', 'Mario'];
  var quantidadeDeEstudantes = listaEstudantes.length;
  print(quantidadeDeEstudantes);

  var indice = 0;

  while (indice < quantidadeDeEstudantes) {
    print(listaEstudantes[indice]);
    indice++;
  }
}
