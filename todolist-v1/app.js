const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const staticUrl = __dirname + "/public";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
// config for css file
// app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(staticUrl));

let items = [];
let workItems = [];

app.get('/', (req, res) => {
  let today = new Date();

  let options = {
    weekday: "long",
    day: 'numeric',
    month: 'long'
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render('list', {
    listTile: day,
    newItemList: items
  });
});
app.post("/", (req, res) => {
  let item = req.body.newItem;
  if( req.body.listTile === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", {listTile: "Work List", newItemList: workItems});
})

app.post("/work", (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.listen(3000);

