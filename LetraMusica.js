class LetraMusica {
  constructor() {
    this.ergueiAsMaos = `Erguei as mãos e dai glória a Deus
Erguei as mãos e dai glória a Deus
Erguei as mãos
E cantai como os filhos do Senhor`;

    this.osAnimaizinhos = `Os animaizinhos subiram de dois em dois
Os animaizinhos subiram de dois em dois`;

    this.oSenhorTemMuitosFilhos = `O senhor tem muitos filhos
Muitos filhos ele tem
Eu sou um deles, você também
Louvemos ao senhor`;

    this.bracoDireitoBracoEsquerdo = `Braço direito, braço esquerdo,
Perna direita, perna esquerda`;

    this.pularLinhaUmaVez = "\n";
    this.pularLinhaDuasVezes = "\n \n";
    this.fraseDivisao = "E atenção agora, porque";
  }

  getFrazeAlternavel(animal1, animal2) {
    return `O ${animal1}
E os ${animal2}, como os filhos do Senhor`;
  }

  getOsAnimaizinhosCompleto(animal1, animal2) {
    return `${this.osAnimaizinhos}${
      this.pularLinhaUmaVez
    }${this.getFrazeAlternavel(animal1, animal2)}`;
  }

  getParte1() {
    return `${this.ergueiAsMaos}${this.pularLinhaUmaVez}
${this.getOsAnimaizinhosCompleto("elefante", "passarinhos")}${
      this.pularLinhaDuasVezes
    }${this.getOsAnimaizinhosCompleto("minhoquinha", "pinguins")}${
      this.pularLinhaDuasVezes
    }${this.getOsAnimaizinhosCompleto("canguru", "sapinho")}${
      this.pularLinhaUmaVez
    }
Deus disse a Noé: Constrói uma arca
Deus disse a Noé: Constrói uma arca
Que seja feita
De madeira para os filhos do Senhor${this.pularLinhaUmaVez}
Por isso...!
${this.ergueiAsMaos}${this.pularLinhaUmaVez}
${this.ergueiAsMaos}${this.pularLinhaUmaVez}
${this.ergueiAsMaos}${this.pularLinhaUmaVez}
${this.fraseDivisao}${this.pularLinhaUmaVez}`;
  }

  getParte2() {
    return `${this.oSenhorTemMuitosFilhos}${this.pularLinhaUmaVez}
Braço direito${this.pularLinhaUmaVez}
${this.oSenhorTemMuitosFilhos}${this.pularLinhaUmaVez}
Braço direito, braço esquerdo${this.pularLinhaUmaVez}
${this.oSenhorTemMuitosFilhos}${this.pularLinhaUmaVez}
Braço direito, braço esquerdo, perna direita${this.pularLinhaUmaVez}
${this.oSenhorTemMuitosFilhos}${this.pularLinhaUmaVez}
${this.bracoDireitoBracoEsquerdo}${this.pularLinhaUmaVez}
${this.oSenhorTemMuitosFilhos}${this.pularLinhaUmaVez}
${this.bracoDireitoBracoEsquerdo}${this.pularLinhaUmaVez}
Balança a cabeça
${this.oSenhorTemMuitosFilhos}${this.pularLinhaUmaVez}
${this.bracoDireitoBracoEsquerdo}${this.pularLinhaUmaVez}
Balança a cabeça, dá uma voltinha
${this.oSenhorTemMuitosFilhos}${this.pularLinhaUmaVez}
${this.bracoDireitoBracoEsquerdo}
Balança a cabeça, dá uma voltinha
Dá um pulinho${this.pularLinhaUmaVez}
${this.oSenhorTemMuitosFilhos}${this.pularLinhaUmaVez}
${this.bracoDireitoBracoEsquerdo}
Balança a cabeça, dá uma voltinha
Dá um pulinho e abraça o irmão`;
  }

  getMusicaInteira() {
    return `${this.getParte1()}
${this.getParte2()}`;
  }

  // Esse método divide a música em duas partes, sendo o ponto de divisão a frase "E atenção agora, porque".
  dividirMusica() {
    const musicaCompleta = this.getMusicaInteira();
    const indexDivisao = musicaCompleta.indexOf(this.fraseDivisao); // O método aqui está sendo utilizado para encontrar a ocorrência da frase utilizada como ponto de divisão.

    // Aqui é verificado se o ponto de divisão foi encontrado.
    if (indexDivisao !== -1) {
      const parte1 = musicaCompleta.substring(0, indexDivisao); // Esse método está sendo utilizado para extrair parte da string.
      const parte2 = musicaCompleta.substring(
        indexDivisao + this.fraseDivisao.length
      );

      return { parte1, parte2 };
    } else {
      console.error(
        "A frase de divisão não foi encontrada na letra da música."
      );
      return null;
    }
  }

  imprimirParteSelecionada(parte) {
    const partes = this.dividirMusica();
    if (partes) {
      if (parte === "inteira") {
        return this.getMusicaInteira();
      } else if (parte === 1) {
        return this.getParte1();
      } else if (parte === 2) {
        return this.getParte2();
      } else {
        console.error("Parte não reconhecida. Use 'inteira', 1 ou 2.");
      }
    }
  }
}

module.exports = LetraMusica;
