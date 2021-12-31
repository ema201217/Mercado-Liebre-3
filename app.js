const express = require("express");
const path = require("path")

const port = 4000;
const app = express();


/* middleware */
app.use(express.static(path.join(__dirname,"public")))

/* routes */
app.use("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/home.html"))
})

app.listen(port, () => console.log(`http://localhost:${port}`));

