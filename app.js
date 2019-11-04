const express = require('express')
const app = express()

//settimg view engine
app.set('view engine','ejs');
 

/*
    Routed
*/

//Get /

app.get('/', function (req, res) {
  res.render('hoe.ejs')
});
 
app.listen(3000,function(){
    console.log('server is live on port 3000')
});
