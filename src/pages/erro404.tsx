import { Link } from "react-router";

export default function NaoEncontrada() {
  return (
    <main>
      <h1>404 — Página não encontrada</h1>
      <p>Quando o endereço não existir.</p>
      <Link to="/">Voltar para a Home</Link>
    </main>
  );
}