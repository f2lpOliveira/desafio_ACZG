const LetraMusica = require("./LetraMusica");
const prompt = require("prompt-sync")();

const letraMusica = new LetraMusica();

console.log(`Seja bem-vindo ao Desafio da música Erguei As Mãos!

Escolha uma das seguintes opções:

1 para ver a música inteira;
2 para ver a primeira parte da música;
3 para ver a segunda parte da música; ou
0 para sair do programa.

========================================
`);

while (true) {
  let mensagem = `
Escolha uma das seguintes opções:

1 para ver a música inteira;
2 para ver a primeira parte da música;
3 para ver a segunda parte da música; ou
0 para sair do programa.

========================================
`;
  let opcao = prompt("Digite a opção desejada: ");

  if (opcao == 0) {
    console.log("\n" + "Até a próxima!" + "\n");
    break;
  } else if (opcao == 1) {
    console.log("\n" + letraMusica.imprimirParteSelecionada("inteira"));
    break;
  } else if (opcao == 2) {
    console.log("\n" + letraMusica.imprimirParteSelecionada(1));
    break;
  } else if (opcao == 3) {
    console.log("\n" + letraMusica.imprimirParteSelecionada(2));
    break;
  } else {
    console.log("\n" + "Opção Inválida!" + "\n" + mensagem);
  }
}
