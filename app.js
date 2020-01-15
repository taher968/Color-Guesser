var express = require('express');
var app = express();

app.set("view engine","ejs");

app.get("/",function(req,res) {
    res.render("index");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
