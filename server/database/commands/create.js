const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'letswork'

const userInput = ''

MongoClient.connect(connectionURL, {useUnifiedTopology: true, useNewUrlParser: true}, (error, client) => {
    if(error){
       return console.log('cant connect to database')
    }
    db.collection('tasks').insertOne({
        discription: userInput,
        completion: false,
    }, (error, result) => {
        if(error){
            return console.log('Unable to insert task')
        }
        console.log(result.ops)
    })
})


