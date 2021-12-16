import dotenv from "dotenv";
import express from "express";
import * as exphbs from "express-handlebars";
import store from "store";

dotenv.config();
const PORT = process.env.PORT;
var app = express();

function onclick() {
    /* var username = $("#usernameinput").val();
    var password = $("#passinput").val();

    console.log(username, password); */
}

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/auth/login', (req, res) => {
    res.render('login', {submit: (a, b) => {
        console.log(a, b)
    }});
});

app.post('/auth/lsubmit', (req, res) => {
    username = req.body.usernameinput;
    password = req.body.passinput;

    console.log(username, password);
});

app.get('/auth/signup', (req, res) => {
    res.render('signup');
});

app.get('/', function (req, res) {
    store.get('loggedin') ? res.render('home') : res.redirect('../auth/login');
    /* if(store.get('loggedin') === null) {
        console.log('Not Logged in');
        res.redirect('../auth');
    } else  {
        console.log('logged in');
        res.render('home');
    } */
});

app.listen(PORT, () => console.log(`App Started at PORT:${PORT}`));
