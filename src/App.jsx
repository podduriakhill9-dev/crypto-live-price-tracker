import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchPrices = () => {
    const data = {
      bitcoin: { usd: 105000 },
      ethereum: { usd: 2500 },
      solana: { usd: 150 },
    };

    setPrices(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPrices();
  }, []);

  return (
    <div className="container">
      <h1>Crypto Live Price Tracker</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="cards">
          <div className="card">
            <h2>Bitcoin</h2>
            <p>${prices.bitcoin?.usd}</p>
          </div>

          <div className="card">
            <h2>Ethereum</h2>
            <p>${prices.ethereum?.usd}</p>
          </div>

          <div className="card">
            <h2>Solana</h2>
            <p>${prices.solana?.usd}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;