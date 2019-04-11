
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.js');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
 app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res) => {
    let items = db;
res.render('product',{
    items: items
})
});


app.get('/product-detail/:id', (req, res) => {
    let items = db;
    let productID = req.params.id;
    console.log(productID);

    let obj = {
        ID: "",
        name: "",
        image: '',
        about: "",
        price: ''
    };
    let callRender = (obj) => {
        res.render('product-detail',{
            items: items,
            curItem: obj
        }) ;
    }
    for(let i = 0; i <= items.length; i++){
        if (items[i]._id === productID){

            obj.ID  = items[i]._id;
            obj.name = items[i].name;
            obj.image = items[i].image;
            obj.about = items[i].about;
            obj.price = items[i].price;
            console.log(obj);
            callRender(obj);
        }
    }


});


const PORT = process.env.PORT || 6050;


app.listen(PORT);