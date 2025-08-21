const express = require("express");

const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body; // Assuming the request body contains the person data

//     // Create a new Person document using the Mongoose model
//     const newPerson = new Person(data);
//     // newPerson.name=data.name;
//     // newPerson.age=data.age;
//     // newPerson.mobile=data.mobile;
//     // newPerson.email=data.email;
//     // newPerson.address=data.address

//     // save the new person to the database
//     const response = await newPerson.save();
//     console.log("data saved");
//     res.status(200).json(response);
//   } catch (error) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.get("/person", async (req, res) => {
//   try {
//     const data = await Person.find();
//     console.log("data fetched");
//     res.status(200).json(data);
//   } catch (error) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// POST Method to add a Menu Item
// app.post("/menu", async (req, res) => {
//   try {
//     const data = req.body;
//     const newMenu = new MenuItem(data);
//     const response = await newMenu.save();
//     console.log("data saved");
//     res.status(200).json(response);
//   } catch (error) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// GET Method to get the menu items
// app.get("/menu", async (req, res) => {
//   try {
//     const data = await MenuItem.find();
//     console.log("data fetched");
//     res.status(200).json(data);
//   } catch (error) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.get("/person/:workType", async (req, res) => {
//   try {
//     const workType = req.params.workType; // Extract the work type from the Url parameter
//     if (workType == "chef" || workType == "manager" || workType == "waiter") {
//       const response = await Person.find({ work: workType });
//       console.log("response fetched");
//       res.status(200).json(response);
//     } else {
//       res.status(404).json({ error: "Invalid work type" });
//     }
//   } catch (error) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");

// Use the routers
app.use("/person", personRoutes);
app.use("/menu", menuRoutes);


app.listen(PORT, () => {
  console.log("listening on port 3000");
});
