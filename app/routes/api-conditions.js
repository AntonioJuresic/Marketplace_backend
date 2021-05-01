const config = require('../../config');
const mongodb = require('mongodb');

module.exports = function (express, mongoClient) {
    const databaseURL = config.databaseurl;
    const databaseName = config.databasename;
    const collectionName = "conditions";

    const apiRouter = express.Router();

    apiRouter.route('/')
        .get(function (req, res) {
            mongoClient.connect(databaseURL, function (err, client) {
                if (err) {
                    console.log(err);
                    res.json({ status: 400, description: "Database connection error." });
                } else {
                    let database = client.db(databaseName);
                    let conditions = database.collection(collectionName);

                    conditions.find({}).toArray(function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Get conditions error." });
                        } else {
                            res.json({ status: 200, conditions: result });
                        }
                    });
                }

                client.close();
            });

        }).post(function (req, res) {
            let condition = {
                conditionName : req.body.conditionName
            };

            mongoClient.connect(databaseURL, function (err, client) {
                if (err) {
                    console.log(err);
                    res.json({ status: 400, description: "Database connection error." });
                } else {
                    let database = client.db(databaseName);
                    let conditions = database.collection(collectionName)

                    conditions.insertOne(condition, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Insert condition error." });
                        } else {
                            res.json({ status: 200, insertedId: result.insertedId });
                        }
                    });
                }
                client.close();
            });

        }).put(function (req, res) {
            let condition = {
                _id: req.body._id,
                conditionName: req.body.conditionName
            }

            mongoClient.connect(databaseURL, function (err, client) {
                if (err) {
                    console.log(err);
                    res.json({ status: 400, description: "Database connection error." });
                } else {
                    let database = client.db(databaseName);
                    let conditions = database.collection(collectionName)
                    let query = { _id: mongodb.ObjectID(condition._id) };
                    let values = {
                        $set: {
                            conditionName: req.body.conditionName
                        }
                    }

                    conditions.updateOne(query, values, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Insert condition error." });
                        } else {
                            res.json({ status: 200, modifiedCount: result.modifiedCount });
                        }
                    })
                }
                client.close();
            });
        }).delete(function (req, res) {
            res.json({ status: 400, description: "Body in DELETE request." });
        });


    apiRouter.route("/:id")
        .get(function (req, res) {
            mongoClient.connect(databaseURL, function (err, client) {
                if (err) {
                    console.log(err);
                    res.json({ status: 400, description: "Database connection error." });
                } else {
                    let _id = req.params.id;
                    let database = client.db(databaseName);
                    let conditions = database.collection(collectionName)
                    let query = { _id: mongodb.ObjectID(_id) };

                    conditions.findOne(query, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Get condition error." });
                        } else {
                            res.json({ status: 200, condition: result });
                        }
                    });
                }
                client.close();
            });
        })
        .delete(function (req, res) {
            mongoClient.connect(databaseURL, function (err, client) {
                if (err) {
                    console.log(err);
                    res.json({ status: 400, description: "Database connection error." });
                } else {
                    let _id = req.params.id;
                    let database = client.db(databaseName);
                    let conditions = database.collection(collectionName)
                    let query = { _id: mongodb.ObjectID(_id) };

                    conditions.deleteOne(query, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Delete condition error." });
                        } else {
                            res.json({ status: 200, deletedCount: result.deletedCount });
                        }
                    });
                }
                client.close();
            });
        });

    return apiRouter;
};