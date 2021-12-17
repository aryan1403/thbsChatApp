import dotenv from "dotenv";
import express from "express";
import * as exphbs from "express-handlebars";
import device from "express-device";
import Handlebars from "handlebars";
import {sendMsg, getAllMsg} from "./DB/db.mjs";

dotenv.config();
const PORT = process.env.PORT;
var app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

let username = process.env.name;

app.use(device.capture());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/auth/signup", (req, res) => {
  res.render("signup");
});

app.get("/auth/login", (req, res) => {
  res.render("login");
});

app.get("/home", async function (req, res) {
  let names = [];
  let msg = [];
  let data = await getAllMsg();
  let meow = [];

  data.forEach(e => {
    names = [...names, e.name];
    msg = [...msg, e.msg];
  });

  for (let i = 0; i < names.length; i++) {
    let mymsg = false;
    if(username === names[i]){
      mymsg = true;
    }
    let message = {
      mymsg: mymsg,
      sender: names[i],
      text: msg[i]
    };
    meow = [...meow, message];
  }
  res.render("home", {data: meow});
});

app.get("/", function (req, res) {
  res.render("getStarted");
});

app.post('/sendmsg', (req, res) => {
  const msg = req.body.msg + '';
  
  sendMsg(username, msg.toString());
  res.redirect('/home');
});

app.listen(PORT, () => console.log(`App Started at PORT:${PORT}`));
