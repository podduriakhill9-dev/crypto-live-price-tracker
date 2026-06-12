import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const API_KEY = "CG-6xbSAE6iWEjc3q2EPyzoLqgQ";

app.get("/prices", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd",
      {
        headers: {
          "x-cg-demo-api-key": API_KEY,
        },
      }
    );

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch prices",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});