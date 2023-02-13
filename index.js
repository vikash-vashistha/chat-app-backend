const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
const colors = require('colors')
var cors = require("cors");
const connectDB = require("./configs/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes")
const { notFound, errorHandler } = require("./middleware/errorMiddleware");


const app = express();
app.use(express.json());
dotenv.config();
connectDB();

app.use(cors());

// end points
app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound);
app.use(errorHandler);


// app.get("/", (req, res) => {
//   res.send("API is Running")
// })

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   const singleChat = chats.find((c) => c._id == req.params.id)
//   res.send(singleChat);
// });

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`.yellow.bold));