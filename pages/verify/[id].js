import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Verify() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/verify?code=${id}`)
        .then((res) => res.json())
        .then(setData);
    }
  }, [id]);

  if (!data) return <p className="text-center mt-10">Verifica in corso...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-2xl font-bold mb-4">Risultato verifica</h1>
      {"errore" in data ? (
        <p className="text-red-600">{data.errore}</p>
      ) : (
        <div className="bg-green-50 border p-4 rounded shadow-md">
          <p><b>Prodotto:</b> {data.nome}</p>
          <p><b>Produttore:</b> {data.produttore}</p>
          <p><b>Origine:</b> {data.origine}</p>
          <p><b>Data produzione:</b> {data.dataProduzione}</p>
          <p><b>Stato:</b> {data.stato}</p>
        </div>
      )}
    </div>
  );
}
