void main() {

  // variável, seu valor pode ser alterado no decorrer do programa
  var nomeEstudante = 'Helena';
  print(nomeEstudante);

  // Constante, seu valor não pode ser alterado
  const nomeDoEstudante = 'Helena';
  print(nomeDoEstudante);

  // A variável e a constante também podem ser declaradas com seu tipo
  // apesar de a IDE recomendar a forma apresentada acima
  String nomeDeEstudante = 'Helena';
  const String nomeDaEstudante = 'Helena';
  print('$nomeDeEstudante $nomeDaEstudante');

}