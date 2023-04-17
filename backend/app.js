const express = require('express');
const mongoose = require("mongoose");
const router = require("./routes/book-routes")

const app = express();
const cors = require('cors');
// Middlewares
app.use(express.json());

app.use("/books",router);
app.use(cors());

mongoose.connect("mongodb+srv://admin:2Q0o20PnAJvxmptR@cluster0.py2yyoa.mongodb.net/Book-Store?retryWrites=true&w=majority"
).then(()=>console.log("Connected to Database"))
.then(() => {
    app.listen(5000)
}).catch((err)=> console.log(err));