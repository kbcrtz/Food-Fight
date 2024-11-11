const express = require ("express");
const axios = require("axios");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());

app.get("/api/restaurants", async (req, res) => {
    const { latitude, longitude } = req.query;

  try {
    const response = await axios.get(
      `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&sort_by=best_match&limit=16&categories=restaurants`,
      {
        headers: {
          Authorization:
            "Bearer 0kaqZhi2aTavDYsHNIdRNuVKWMjrvH0IZEEwTquD0WlrAi04ozytfbVFwA4VBC0lAr1REqS1-iSgE86-Urmz_A4MgO_A4p4JewB9abFgZHb55HTWrRu9zR-uen7XZnYx",
        },
      }
    );
    res.json(response.data); // Send Yelp data to the client
  } catch (error) {
    res.status(500).send("Error fetching data from Yelp");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});