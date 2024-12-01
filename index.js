const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const axios = require("axios");
const port = process.env.PORT || 9006;

app.use(cors());

app.get("/searching/:query", async (req, res) => {
  try {
    const query = req.params.query; // Get the query parameter from the URL
    console.log("yo yo: ", query);

    const { data } = await axios.get(
      `https://iosmirror.cc/search.php?s=${query}`,
      {
        headers: {
          authority: "iosmirror.cc",
          method: "GET",
          path: `/search.php?s=${query}`,
          scheme: "https",
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
          "accept-encoding": "gzip, deflate, br, zstd",
          "accept-language": "en-US,en;q=0.9",
          "cache-control": "max-age=0",
          "sec-ch-ua":
            '"Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "none",
          "sec-fetch-user": "?1",
          "sec-gpc": "1",
          "upgrade-insecure-requests": "1",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
          referer: "https://iosmirror.cc",
          Cookie: `cf_clearance=BIQ0n0Cwkd9KvLiOZTfJ4Kc.u7H3oDJN7n5Y_khmo_0-1733054243-1.2.1.1-rnPhvosdtLf_YFVyFYxOklstgKU41j6c0lzpFPZ2pi_q4E.PoShIwqxO48SxEeiVMYAUpeNhbehdeFEJKlYg6SaeGwjR07DQKtryyeoFUaFOtHR_pNaNXwo9yGSsZw2OjB9rrYl7YGJ3IIkhQAP6LAtKqFY_SPWL2mwbYk0ZlzqpRdiOL0J849FBHSP27gnVH4ynlD9BLRSn_ZzBGDkQ2mu19EmSAR9XFsvOnncpe_0JXuDQT5AFcJyrVXJ_bWEVnuSoC9eBOF5urMSvuLbFnHh7ZSRPtpsvYVK54SklDztLfNEIUFMKceTImPZgxYQZegojanGUOhw4ayZR.6uIiZdlqzd1q0PvJ6exbVrycTZ50JKqtOvE7zR33JaWb40U; t_hash_t=0c9e5ae59993567bffa9edfe8da0c512%3A%3Aaa4fe768113f499459163fde59995d7f%3A%3A1733054291%3A%3Ani; recentplay=81681292; 81681292=370%3A5871; t_hash=97a4a22b008ac9b0d7b310c1eda2ca57%3A%3A1733054473%3A%3Ani,`,
        },
      }
    );

    console.log("data is: ", JSON.stringify(data));
    return res.send(data);
  } catch (e) {
    console.error("Error fetching data:", e.message);
    res.status(500).send({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
module.exports = app;
