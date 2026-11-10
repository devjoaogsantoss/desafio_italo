import { Link } from "react-router";

export default function Menu() {
  return (
    <nav>
      <Link to="/">Home</Link>{" | "}
      <Link to="/produtos">Produtos</Link>{" | "}
      <Link to="/sobre">Sobre</Link>{" | "}
      <Link to="/contato">Contato</Link>
    </nav>
  );
}