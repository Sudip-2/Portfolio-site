const express = require("express");
const cors = require("cors");
const mailRouter = require("./routes/mailsend");
const app = express();
const PORT = 8000;

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use("/api/mailSend", mailRouter);

app.listen(PORT, () => {
  console.log(`Server started at Port ${PORT}`);
});
