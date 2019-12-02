const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'letswork'

const userInput = ''

MongoClient.connect(connectionURL, {useUnifiedTopology: true, useNewUrlParser: true}, (error, client) => {
    if(error){
       return console.log('cant connect to database')
    }

    //Delete task from all tasks
    db.collection('tasks').deleteOne({
        description: userInput
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    //Delete all the tasks that completed.
    db.collection('tasks').deleteMany({
        completion: true,
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})