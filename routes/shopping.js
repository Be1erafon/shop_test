module.exports = function(app, db) {

app.get('/shop', async (req,res) => {
  let resp = {}
  try{
    let collection = await db.Shop.findAll();
    resp.status = 'allow'
    resp.collection = collection
    res.send(resp);
  } catch(e){
     console.log(e)
     resp.status = 'error'
     res.send(resp);
  }
})

app.get('/shop/:id', async (req,res) => {
  let resp = {}
  try{
    let data = await db.Shop.findOne({ where: { id: req.params.id } });
    if(data != null){
      resp.status = 'allow'
      resp.id = req.params.id
      resp.collection = data
      res.send(resp);
    } else {
      resp.status = 'error'
      resp.params = 'not found id'
      resp.id = req.params.id
      res.send(resp);
    }
  } catch(e){
     console.log(e)
     resp.status = 'error'
     res.send(resp);
  }
})

app.post('/shop', async (req,res) => { 
  let resp = {}
try{
  if(req.body.name != '' && req.body.description != '' && req.body.price != ''){
    let newProduct = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    }
      let obj = await db.Shop.create(newProduct);
      resp.status = 'completed'
      resp.id = obj.dataValues.id
      res.send(resp);
    
  } else {
    console.log('Error');
    resp.status = 'error'
    resp.params = 'fields not filled correctly'
    res.send(resp);
  }

  } catch(e){
       console.log(e)
       resp.status = 'error'
       res.send(resp);
    }
})

app.delete('/shop/:id', async (req,res) => {
  let resp = {}
  try {
    let data = await db.Shop.findOne({ where: { id: req.params.id } });

    if(data){
      data.destroy();
      resp.status = 'deleted';
      resp.id = req.params.id
    } else {
      resp.status = 'error',
      resp.id = req.params.id,
      resp.params = 'data not found'
    }
      res.send(resp);
  } catch (e){
    resp.status = 'error',
    res.send(resp);
  }
})


}