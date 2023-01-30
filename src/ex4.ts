export class Filmes {
  nome: string;
  valor: number;
  genero: string;
  disponivel: boolean;

  constructor(
    nome: string,
    valor: number,
    genero: string,
    disponivel: boolean
  ) {
    this.nome = nome;
    this.valor = valor;
    this.genero = genero;
    this.disponivel = disponivel;
  }
}

export interface ILocadora {
  nome: string;
  filmes: Array<Filmes>;
  mostrarFilmesDisponiveis(): void;
}

export class Locadora implements ILocadora {
  endereco: string;
  nome: string;
  filmes: Array<Filmes>;

  constructor(endereco: string, nome: string, filmes: Array<Filmes>) {
    this.endereco = endereco;
    this.nome = nome;
    this.filmes = filmes;
  }

  mostrarEndereco() {
    console.log(this.endereco);
  }
  mostrarFilmesDisponiveis() {
    let fimesdisponiveis = this.filmes.filter((e) => {
      return e.disponivel == true;
    });
    console.log(fimesdisponiveis);
  }
}
