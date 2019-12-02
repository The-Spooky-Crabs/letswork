const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'letswork'

const taskIDInput = ''

MongoClient.connect(connectionURL, {useUnifiedTopology: true, useNewUrlParser: true}, (error, client) => {
    if(error){
       return console.log('cant connect to database')
    }

    db.collection('tasks').updateOne({
        _id: new ObjectID(taskIDInput)
    },{
        $set:{
            completion: true,
        }
    }).then((result) => {
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})