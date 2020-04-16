
// const databaseSeeds = require('./databaseSeeds');

const express = require('express');

const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;


const bodyParser = require('body-parser');
const mongoose  = require("mongoose");
const methodOverride = require("method-override");
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
var uniqueValidator = require('mongoose-unique-validator');


app.set('view engine', 'hbs');
// app.set('view engine', 'ejs');
app.use(express.static("public"));



var DB_URL = require('./creds')


mongoose.connect( DB_URL , { useNewUrlParser: true }, ()=> {
  console.log('connected to Db')
}); //THIS CONNECTS TO DATABASE


hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});


hbs.registerHelper("setVar", function(varName, varValue, options) {
  options.data.root[varName] = varValue;
});



hbs.registerHelper('if_equal', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this)
    } else {
        return opts.inverse(this)
    }
})







var resultsSchema = new mongoose.Schema({
    keyword : String,
    title : String,
    body: String,
    link: String,
    phoneNumber: String,
    created: { type: Date, default: Date.now }
});

 var Result = mongoose.model("Results", resultsSchema);



app.get('/', (req,res) => {
  res.render('home')
})


app.get('/results', (req,res) => {
  var results = Object.values(req.query)
  console.log(results)


 Result.find( {keyword: {$in: results} } , function(err,results){
  // Result.find( { keyword: {$in: results }  } , function(err,results){

     if(err){
         console.log(err);
     } else{

         res.render("results" , {mood: req.query.mood ,
                                 transportation: req.query.transportation,
                                 food: req.query.food,
                                 housing: req.query.housing,
                                 help: req.query.help,
                                 other: req.query.other,

           results : results  })
         //maybe we can also push req.query, this will give us the actual keywords going to /results
         //maybe make results into an object so we can split it up

     }
   })
  })










app.get('/mission', (req,res) => {
  res.render('mission')
})



app.get('/contact', (req,res) => {
  res.render('contact')
})



app.get('/about', (req,res) => {
  res.render('about')
})




app.get('/*', (req,res) => {
  res.redirect('/')
})


app.listen(port, ()=>{
  console.log(`Server stated on port ${port}`)
})
