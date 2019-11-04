const express = require('express')
const app = express()

//settimg view engine
app.set('view engine','ejs');

//middleware
app.use(express.static('./public'));
 

/*
    Routed
*/

//Get /

app.get('/', function (req, res) {
  res.render('home.ejs')
});
 
app.listen(3000,function(){
    console.log('server is live on port 3000')
});
