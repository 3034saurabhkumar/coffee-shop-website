const express = require("express")
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res) => {
    res.render("index");
})
.get("/menu",(req,res) => {
    res.render("menu");
})
.get("/reservation",(req,res) => {
    res.render("reservation");
})
.get("/blog",(req,res) => {
    res.render("blog");
});

app.listen(3000,()=>{
    console.log("Server is running at port 3000.");
});