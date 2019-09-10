
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://neoc:sunsh1ne@letswork-xeqzx.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useUnifiedTopology:true, useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("LWDB").collection("LWDB");
    // perform actions on the collection object
    console.log("Connected!")
    client.close();
});

