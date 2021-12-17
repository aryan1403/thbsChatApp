import mongoose from "mongoose";

const username = process.env.username;
const password = process.env.password;

const uri = "mongodb+srv://admin:12345@cluster0.dxduq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(
  uri,
  (err) => {
    if(err) {
      console.log(err);
    } else {
      console.log('Connnected');
    }
  }
);

const msgS = mongoose.Schema({
  name: String,
  msg: String,
});
const meowModel = mongoose.model("msgS", msgS);
export async function sendMsg(n, m) {
  const doc = new meowModel({name: n, msg: m});

  await doc.save();
}
export async function getAllMsg() {
  return await meowModel.find({});
}
// export default Message = mongoose.model(`Message`,{ name : String, message : String})

/* const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export function registerUser(email, pass) {
  client.connect((err) => {
    const collection = client.db("chatapp").collection("users");
    const document = new Document("email", email).append("password", pass);

    collection.insertOne(document);
  });
}

export function send(name, msg) {
  client.connect((err) => {
    const collection = client.db("chatapp").collection("messages");
    const document = {name: name, msg: msg};
    collection.insertOne(document);
  });
}

export function getAllMessages() {
  client.connect((err) => {
    const collection = client.db("chatapp").collection("messages");
    
    return collection.find({});
  });
}

export function login(email, password) {
  client.connect((err) => {
    const collection = client.db("chatapp").collection("users");

    let meow =
      collection.find({}, { email: email, password: password }).count > 0
        ? true
        : false;

    client.close();

    return meow;
  });
}
 */
