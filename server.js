// server.js (Express 4.0)
var express        = require('express');

var bodyParser     = require('body-parser');

var app            = express();


	
app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users

app.use(bodyParser()); 						// pull information from html in POST



var router = express.Router();

var products = [
  { name: 'Samsung Mobile Phone', desc: 'Awesome phone'},
  { name: 'Apple Mobile Phone', desc: 'Beautiful phone'},
  { name: 'Lenovo Mobile Phone', desc: 'Robust phone'},
  { name: 'HTC Mobile Phone', desc: 'Innovative phone'}
  

];
var lastId = 6;

router.get('/products', function(req, res) {
  res.send(products);
});

router.post('/product', function(req, res) {
  var item = {};

  item.name = req.body.name;
  item.desc = req.body.desc;
  
  products.push(item);
  res.send(products);
});



router.get('/product/:id', function(req, res) {
	if(req.params.id > products.length ){
		
		res.send({msg: 'Note not found'}, 404);
		
	}
	else {
		res.send(products[i]);
	}
  
  
});




app.use('/api', router);


	


app.listen(8000);
console.log('Open http://localhost:8000 to access the files now'); 			
