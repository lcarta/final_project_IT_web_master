import express from 'express'
import cors from 'cors' // npm install cors

const app = express();
app.use(cors());    // sto abilitando le richieste multiorigine - SOLO in DEV

// app.use(express.static('public'));

const users = [{ "id": 0, "firstname": "Eric", "lastname": "Cartman", "email": "eric.cartman@gmail.com", "age": 9, "avatar": "https://static.miraheze.org/greatcharacterswiki/thumb/0/02/The-coon_.png/300px-The-coon_.png", "follows": [1, 4], "subscribedAt": 1682932800000 }, { "id": 1, "firstname": "Stan", "lastname": "Marsh", "email": "stan.marsh@yahoo.com", "age": 9, "avatar": "https://static.wikia.nocookie.net/southpark/images/c/c6/Stan-marsh-0.png", "follows": [0, 2, 3], "subscribedAt": 1682932920000 }, { "id": 2, "firstname": "Kyle", "lastname": "Broflovski", "email": "kyle.broflovski@gmail.com", "age": 9, "avatar": "https://static.wikia.nocookie.net/southpark/images/9/95/Kyle-broflovski.png/revision/latest/thumbnail/width/360/height/360?cb=20190411033301", "follows": [1, 3], "subscribedAt": 1682932980000 }, { "id": 3, "firstname": "Kenny", "lastname": "McCormick", "email": "kenny.mccormick@gmail.com", "age": 9, "avatar": "https://static.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png", "follows": [0, 1, 2], "subscribedAt": 1682933100000 }, { "id": 4, "firstname": "Butters", "lastname": "Stotch", "email": "butters.stoch@gmail.com", "age": 9, "avatar": "https://upload.wikimedia.org/wikipedia/en/0/06/ButtersStotch.png", "follows": [0, 3], "subscribedAt": 1682933220000 }, { "id": 5, "firstname": "Mr", "lastname": "Garrison", "email": "mr.garrison@gmail.com", "age": 60, "avatar": "https://static.wikia.nocookie.net/southpark/images/7/79/Mr._Herbert_Garrison.png", "follows": [4, 0, 6, 3, 7], "subscribedAt": 1682933220000 }, { "id": 6, "firstname": "Harrison", "lastname": "Yates", "email": "yates@sppd.gov", "age": 55, "avatar": "https://static.wikia.nocookie.net/southpark/images/a/af/Murphy-mitch-harris.png", "follows": [0, 5], "subscribedAt": 1682933700000 }, { "id": 7, "firstname": "Eric", "lastname": "Papi", "email": "eric.@papi.me", "age": 55, "avatar": "https://dilei.it/wp-content/uploads/sites/3/2022/12/enrico-papi.jpg", "follows": [], "subscribedAt": 1683020100000 }, { "firstname": "Ric", "lastname": "Mec", "age": 5, "avatar": "https://cdn.pixabay.com/photo/2025/02/20/07/51/ai-generated-9419220_1280.png", "id": 8 }]

app.get('/api/v1/users', (req, resp) => {
  console.log("qua", req.query)
  if (req.query.firstname) {
    console.log("dentro query")
    const userFound = users.filter((user) => {
      return user.firstname == req.query.firstname
    })
    resp
      .status(200)
      .send(userFound);
    return
  }
  resp
    .status(200)
    .send(users);
})

app.get('/api/v1/user/:id', (req, resp) => {

  const userFound = users.find((user) => {
    return user.id == req.params.id
  })

  resp
    .status(200)
    .send(userFound);
})



app.listen(3000);