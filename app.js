const  express= require("express");
const cors = require("cors");

const contactsRouters =require("./app/routes/contact.route");
const app=express ();

app.use(cors());
app.use(express.json());

app.get("/", (req,res) =>{
     res.json({message: "welcome to contact book application."})
 });
app.use("/api/contacts", contactsRouters);


module.exports= app;