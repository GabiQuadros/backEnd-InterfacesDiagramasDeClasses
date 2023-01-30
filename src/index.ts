import { Item, Pedido } from "./ex1";
import { Circulo, Retangulo } from "./ex2";
import { Filmes, Locadora } from "./ex4";

//ATIVIDADE 1

let alteracaoValor = new Item(15, "lapis", "escrever");
console.log(alteracaoValor);

alteracaoValor.alterarValor(25);

//ATIVIDADE 2

let setarTamanhoC = new Circulo(5);
setarTamanhoC.desenhar();
setarTamanhoC.redimensionar(9);

let setarTamanhoR = new Retangulo(5, 3);
let redimencionarTamanho = new Retangulo(10, 7);
setarTamanhoR.desenhar();
redimencionarTamanho.redimensionar();

//ATIVIDADE 4

let atributosLocadora = new Locadora(
  "Rua O vento levou, 45 - RS",
  "ParkVideo",
  [
    { nome: "Capitão América", valor: 10, genero: "Ação", disponivel: true },
    { nome: "Homem de Ferro", valor: 15, genero: "Ação", disponivel: false },
    { nome: "Hulk", valor: 20, genero: "Ação", disponivel: true },
    { nome: "Gente Grande", valor: 25, genero: "Comédia", disponivel: true },
  ]
);
atributosLocadora.mostrarEndereco();
atributosLocadora.mostrarFilmesDisponiveis();
