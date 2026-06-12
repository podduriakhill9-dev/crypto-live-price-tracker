import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPrices = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd"
      );

      const data = await response.json();

      setPrices(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();

    const interval = setInterval(() => {
      fetchPrices();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>Crypto Live Price Tracker</h1>

      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

      {!loading && !error && (
        <div className="cards">
          <div className="card">
            <h2>Bitcoin</h2>
            <p>${prices.bitcoin.usd}</p>
          </div>

          <div className="card">
            <h2>Ethereum</h2>
            <p>${prices.ethereum.usd}</p>
          </div>

          <div className="card">
            <h2>Solana</h2>
            <p>${prices.solana.usd}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;