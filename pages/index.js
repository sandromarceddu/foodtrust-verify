import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/verify/${code}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-yellow-50">
      <h1 className="text-3xl font-bold mb-6">Blockchain Food Trust</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          className="border rounded p-2 text-center mb-3"
          placeholder="Inserisci il codice prodotto"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
          Verifica
        </button>
      </form>
    </div>
  );
}
