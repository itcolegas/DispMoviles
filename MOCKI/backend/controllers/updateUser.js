const MongoClient = require('mongodb').MongoClient

const updateUser = async (req, res) => {
    const client = new MongoClient(process.env.MONGODB_URL, { useUnifiedTopology: true })

    console.log('updateUser')
        try {
            let date = `${new Date().getFullYear}-${new Date().getMonth + 1}`

            client.connect( (err) => {
                if (err) {
                    console.log(err)
                    res.send(err)
                }
                const db =  client.db('mocki')

                db.collection('users').findOneAndUpdate({ username: req.body.username }, { $push: { problems: date } })
                    .then( (result) => {
                        console.log(result)
                        res.send('updated succesfully')
                    })
                    .catch( (err) => {
                        console.log(err)
                        res.send('not updated succesfully')
                    })
            })
        } catch (err) {
            console.log(err);
            res.send(err)
        } finally {
            client.close()
        }
}

module.exports = { updateUser }