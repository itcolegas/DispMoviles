const MongoClient = require('mongodb').MongoClient

const getQuestions = async (req, res) => {
    const client = new MongoClient(process.env.MONGODB_URL, { useUnifiedTopology: true })

    console.log('getQuestions')
    if(req.method == 'GET'){
        try {
            client.connect( (err) => {
                if (err) {
                    console.log(err)
                    res.send(err)
                }
                const db =  client.db('mocki')

                db.collection('questions').find().toArray(function(err, result) {
                    if (err) {
                        console.log(err)
                        res.send(err)
                    }
                    console.log(result)
                    res.json({questions: result})
                })
            })
        } catch (err) {
            console.log(err);
            res.send(err)
        } finally {
            client.close()
        }
    }
    else{
        try {
            let category = req.body.category == 'all' ? '' : req.body.category
            let difficulty = req.body.difficulty == 'all' ? '' : req.body.difficulty

            client.connect( (err) => {
                if (err) {
                    console.log(err)
                    res.send(err)
                }
                const db =  client.db('mocki')

                db.collection('questions').find({ category: new RegExp(category), difficulty: new RegExp(difficulty)}).toArray(function(err, result) {
                    if (err) {
                        console.log(err)
                        res.send(err)
                    }
                    console.log(result)
                    res.json({questions: result})
                })
            })
        } catch (err) {
            console.log(err);
            res.send(err)
        } finally {
            client.close()
        }
    }
}

module.exports = { getQuestions }