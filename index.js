const http = require("http");
const express = require("express");

const app = express();

app.use(express.json());

app.post("/bfhl", (req, res) => {
  const { arr } = req.body;

  const evenNo = arr.filter(
    (item) => Number.isInteger(item) == true && parseInt(item) % 2 == 0
  );
  const oddNo = arr.filter(
    (item) => Number.isInteger(item) == true && parseInt(item) % 2 != 0
  );
  const str = arr
    .filter((item) => Number.isInteger(item) == false)
    .map((item) => {
      return item.toUpperCase();
    });

  res.status(200).json({
    is_success: true,
    user_id: "rohan_bindal_21032003",
    email: "rohan0603.be20@chitkara.edu.in",
    roll_number: "2010990603",
    odd_numbers: oddNo,
    even_numbers: evenNo,
    alphabets: str,
  });
});

const server = http.createServer(app);

server.listen(4000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Started Successfully");
  }
});

