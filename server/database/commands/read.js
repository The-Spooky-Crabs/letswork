const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'letswork'

MongoClient.connect(connectionURL, {useUnifiedTopology: true, useNewUrlParser: true}, (error, client) => {
    if(error){
       return console.log('cant connect to database')
    }

    db.collection('tasks').findOne({ _id: new ObjectID("5de458dbbf92ba106f924157")}, (error, task) => {
        if(error){
            return console.log('Unable to find')
        }
        console.log(task)
    })

    db.collection('tasks').find( {completion: false}).toArray((error, task) => {
        console.log(task)
    })
    db.collection('tasks').find( {completion: false}).count((error, count) => {
        console.log(count)  
    })
})