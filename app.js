const express = require('express')
const app = express()
const port = 3000;
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');
var i1=[];
app.get("/",function(req,res){
    res.render("list",{newListItems:i1});
})
app.post("/",function(req,res){
   i=req.body.n;
   i1.push(i);
  res.redirect("/");
 // console.log(i);
})
app.delete("/delete/:index", function(req, res) {
  // get the index from the URL parameter
  const index = req.params.index;
  // check if the index is valid
  if (index >= 0 && index < i1.length) {
    // remove the item from the array using splice
    i1.splice(index, 1);
    // send back a success message
    res.json({msg: "Item deleted successfully"});
  } else {
    // send back an error message
    res.status(400).json({msg: "Invalid index"});
  }
});
app.listen(port, () => {
  console.log(`blog app listening on port http://localhost:${port}`)
})