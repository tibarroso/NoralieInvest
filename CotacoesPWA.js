import React, { useEffect, useState } from "react";

function CotacoesPWA() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch("https://brapi.dev/api/quote/PETR4")
      .then((res) => res.json())
      .then((data) => setDados(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Cotações</h2>
      {dados ? (
        <pre className="bg-gray-200 p-2 rounded">{JSON.stringify(dados, null, 2)}</pre>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default CotacoesPWA;