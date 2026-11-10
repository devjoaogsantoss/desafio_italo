import Card from "../components/card.tsx";

export default function Produtos() {
  return (
    <div>
    <Card
      titulo="Desafio Italo 1"
      imagem="\public\images.jpg"
      descricao="Compre o time de Futsal do Leão"
      preco={100}
    />
    <Card
      titulo="Desafio Italo 2"
      imagem="\public\images.jpg"
      descricao="Compre o time de Futsal do Leão sub-12"
      preco={200}
    />
    <Card
      titulo="Desafio Italo 3"
      imagem="\public\images.jpg"
      descricao="Compre o time de Futsal do Leão sub-15"
      preco={300}
    />
    <Card
      titulo="Desafio Italo 4"
      imagem="\public\images.jpg"
      descricao="Compre o time de Futsal do Leão sub-17"
      preco={400}
    />
    <Card
      titulo="Desafio Italo 5"
      imagem="\public\images.jpg"
      descricao="Compre o time de Futsal do Leão sub-19"
      preco={500}
    />
    <Card
      titulo="Desafio Italo 6"
      imagem="\public\images.jpg"
      descricao="Compre o time de Futsal do Leão sub-21"
      preco={600}
    />

  </div>);
}