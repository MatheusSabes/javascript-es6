var possuiGraduacao = true;

if(possuiGraduacao) {
  console.log('é verdadeiro')
} else {
  console.log('é falso')
}

var nome = 'Dev'

if (nome) {
  console.log(nome)
}else {
  console.log('Nome não existe')
}

//negação
if (!nome) {
  console.log(nome)
}else {
  console.log('Nome não existe = if de negação')
}


var corFavorita = '';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.')
    break;
  case 'Verde':
    console.log('Olhe para a floresta')
    break;
  default:
    console.log('Feche os olhos.')
}