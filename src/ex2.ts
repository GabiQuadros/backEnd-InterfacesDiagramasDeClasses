export interface IFormatoDeElemento {
  desenhar(): void;
  redimensionar(valor: number): void;
}

export class Circulo implements IFormatoDeElemento {
  raio: number;

  constructor(raio: number) {
    this.raio = raio;
  }
  desenhar() {
    let circulo = (2 * 3.14 * this.raio).toFixed(2);
    console.log(`circulo tamanho ${circulo}`);
  }

  redimensionar(tam: number) {
    let circuloR = tam * 2 * 3.14 * this.raio;
    console.log(`circulo redimencionado ${circuloR}`);
  }
}

export class Retangulo implements IFormatoDeElemento {
  comprimento: number;
  altura: number;

  constructor(comprimento: number, altura: number) {
    this.comprimento = comprimento;
    this.altura = altura;
  }

  desenhar() {
    let retangulo = this.comprimento * this.altura;
    console.log(`Retangulo tamanho ${retangulo}`);
  }

  redimensionar() {
    let retanguloR = this.comprimento * this.altura;
    console.log(`Retangulo redimencionado ${retanguloR}`);
  }
}
