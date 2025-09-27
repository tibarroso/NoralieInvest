import React, { useState } from "react";
import CotacoesPWA from "./CotacoesPWA";

function App() {
  const [aba, setAba] = useState("cotacoes");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <header className="p-4 bg-gray-800 text-white flex justify-between">
        <h1 className="text-xl font-bold">NoralieInvest</h1>
        <nav className="flex gap-4">
          <button onClick={() => setAba("cotacoes")}>Cotações</button>
          <button onClick={() => setAba("carteira")}>Carteira</button>
          <button onClick={() => setAba("proventos")}>Proventos</button>
        </nav>
      </header>

      <main className="flex-1 p-4">
        {aba === "cotacoes" && <CotacoesPWA />}
        {aba === "carteira" && <div>📊 Aqui vai a carteira do usuário</div>}
        {aba === "proventos" && <div>💰 Aqui vai o resumo de proventos</div>}
      </main>

      <footer className="text-sm text-gray-500 mt-4 p-2 border-t">
        Desenvolvedor: Helquys Ande • +55 869 81250-154
      </footer>
    </div>
  );
}

export default App;