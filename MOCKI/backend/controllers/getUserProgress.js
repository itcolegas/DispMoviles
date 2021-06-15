const MongoClient = require('mongodb').MongoClient

const getUserProgress = async (req, res) => {
    const client = new MongoClient(process.env.MONGODB_URL, { useUnifiedTopology: true })
    let user = req.params.user;
    console.log('getUserProgress')
    try {
        client.connect( (err) => {
            if (err) {
                console.log(err)
                res.send(err)
            }
            const db =  client.db('mocki')

            db.collection('users').find({username: user}).toArray(function(err, result) {
                if (err) {
                    console.log(err)
                    res.send(err)
                }
                console.log(result)
                res.json({users: result})
            })
        })
    } catch (err) {
        console.log(err);
        res.send(err)
    } finally {
        client.close()
    }
}

module.exports = { getUserProgress }