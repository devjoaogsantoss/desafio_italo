import { BrowserRouter, Routes, Route } from "react-router";

import Menu from "./components/menu.tsx";
import Home from "./pages/home.tsx";
import Produtos from "./pages/produtos.tsx";
import Sobre from "./pages/sobre.tsx";
import NaoEncontrada from "./pages/erro404.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}