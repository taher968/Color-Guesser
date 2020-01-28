// var express = require('express');
// var app = express();

// app.set("view engine","ejs");

// app.get("/",function(req,res) {
//     res.render("index");
// });


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Our app is running on port ${ PORT }`);
// });

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
})
