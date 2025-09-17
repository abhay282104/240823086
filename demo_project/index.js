const express = require("express");
const mongoose = require("mongoose");
const songRoute = require("./Router/songRoute");

const app = express();
const PORT = 80;
app.use(express.json());
   
mongoose.connect(
  "mongodb+srv://songrahardik082_db_user:Hardik5304@cluster0.dfelcos.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/song", songRoute);

<<<<<<< HEAD

=======
>>>>>>> 2ae1bc4a6c5a624719c946c8d287a26609b7948f
app.listen(PORT, () => {
  console.log(`Server running at localhost:${PORT}/`);
});