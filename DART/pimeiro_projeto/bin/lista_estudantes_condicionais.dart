void main() {
  var listaEstudantes = ['Helena', 'Chico', 'Mario', 'José', 'Maria'];
  var quantidadeDeEstudantes = listaEstudantes.length;

  if(quantidadeDeEstudantes < 2) {
    listaEstudantes.add('João');
    print(listaEstudantes);
  } else {
    print('Não é possível inserir mais alunos nesta turma');
  }
}
