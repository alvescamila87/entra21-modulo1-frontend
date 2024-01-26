void main() {
  var listaEstudantes = ['Helena', 'Chico', 'Mario'];
  var quantidadeDeEstudantes = listaEstudantes.length;
  print(quantidadeDeEstudantes);

  for(var indice = 0; indice < quantidadeDeEstudantes; indice++) {

    // O modificador final define uma constante em laços de repetição
    final alunoCorrente = listaEstudantes[indice];
    print(alunoCorrente);

  }
}