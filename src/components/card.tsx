type CardProps = {
  titulo: string;
  imagem: string;
  descricao: string;
  preco: number;
};

export default function Card({
  titulo,
  imagem,
  descricao,
  preco,
}: CardProps) {
  return (
    <article className="card">
      <img src={imagem} alt={titulo} />

      <h2>{titulo}</h2>

      <p>{descricao}</p>

      <strong>
        {preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </strong>
    </article>
  );
}