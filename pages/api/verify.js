export default function handler(req, res) {
  const { code } = req.query;
  const mockData = {
    "BFT-2025-0001": {
      nome: "Olio extravergine sardo",
      produttore: "Azienda Agricola Nuraghe",
      origine: "Sardegna, Italia",
      dataProduzione: "2025-04-20",
      stato: "Certificato ✅",
    },
  };
  const prodotto = mockData[code] || { errore: "Codice non trovato" };
  res.status(200).json(prodotto);
}
