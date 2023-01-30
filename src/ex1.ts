import { throws } from "assert";

export class Item {
  valor: number;
  nome: string;
  descricao: string;

  constructor(valor: number, nome: string, descricao: string) {
    this.valor = valor;
    this.nome = nome;
    this.descricao = descricao;
  }

  alterarValor(novoValorIten: number) {
    this.valor = novoValorIten;
    console.log(`O valor do ${this.nome} agora é R$${this.valor}`);
  }
}

export class Pedido {
  itens: Array<Item>;
  valorTotal: number;

  constructor(itens: Array<Item>, valorTotal: number) {
    this.itens = itens;
    this.valorTotal = valorTotal;
  }
}
