const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://abhisavaliya2004_db_user:abhi12@cluster0.eiewsia.mongodb.net/demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const studentSchema = new mongoose.Schema({
  name: String,
  department: String,
  startYear: Number,
  endYear: Number,
  enrollment: Number,
  address: String,
});

const Student = mongoose.model("Student", studentSchema);

console.log("MongoDB connected successfully");

const student = new Student({
  name: "Abhi Patel",
  department: "Computer Science",
  startYear: 2020,
  endYear: 2024,
  enrollment: 240823086,
  address: "marutichowk, rajkot",
});

student
  .save()
  .then(() => {
    console.log("Student saved successfully");
  })
  .catch((error) => {
    console.error("Error saving student:", error);
  });