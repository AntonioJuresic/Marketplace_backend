const config = require('../../config');
const mongodb = require('mongodb');

module.exports = function (express, mongoClient) {
    const databaseURL = config.databaseurl;
    const databaseName = config.databasename;
    const collectionName = "advertisements";

    const apiRouter = express.Router();

    apiRouter.route('/')
        .get(function (req, res) {
            mongoClient.connect(databaseURL, function (err, client) {
                if (err) {
                    console.log(err);
                    res.json({ status: 400, description: "Database connection error." });
                } else {
                    let database = client.db(databaseName);
                    let advertisements = database.collection(collectionName);

                    advertisements.find({}).toArray(function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Get advertisements error." });
                        } else {
                            res.json({ status: 200, advertisements: result });
                        }
                    });
                }

                client.close();
            });

        }).post(function (req, res) {
            let advertisement = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,

                conditionNameFK: req.body.conditionNameFK,
                placeNameFK: req.body.placeNameFK,
                categoryNameFK: req.body.categoryNameFK,

                sellerUsernameFK: req.body.sellerUsernameFK,
                seller_idFK: req.body.seller_idFK,
            };

            mongoClient.connect(databaseURL, function (err, client) {
                if (err) {
                    console.log(err);
                    res.json({ status: 400, description: "Database connection error." });
                } else {
                    let database = client.db(databaseName);
                    let advertisements = database.collection(collectionName)

                    advertisements.insertOne(advertisement, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Insert advertisement error." });
                        } else {
                            res.json({ status: 200, insertedId: result.insertedId });
                        }
                    });
                }
                client.close();
            });

        }).put(function (req, res) {
            let advertisement = {
                _id: req.body._id,

                name: req.body.name,
                description: req.body.description,
                price: req.body.price,

                conditionNameFK: req.body.conditionNameFK,
                placeNameFK: req.body.placeNameFK,
                categoryNameFK: req.body.categoryNameFK,

                sellerUsernameFK: req.body.sellerUsernameFK,
                seller_idFK: req.body.seller_idFK,
            }

            mongoClient.connect(databaseURL, function (err, client) {
                if (err) {
                    console.log(err);
                    res.json({ status: 400, description: "Database connection error." });
                } else {
                    let database = client.db(databaseName);
                    let advertisements = database.collection(collectionName)
                    let query = { _id: mongodb.ObjectID(advertisement._id) };
                    let values = {
                        $set: {
                            name: req.body.name,
                            description: req.body.description,
                            price: req.body.price,
                            
                            conditionNameFK: req.body.conditionNameFK,
                            placeNameFK: req.body.placeNameFK,
                            categoryNameFK: req.body.categoryNameFK,
            
                            sellerUsernameFK: req.body.sellerUsernameFK,
                            seller_idFK: req.body.seller_idFK,
                        }
                    }

                    advertisements.updateOne(query, values, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Insert advertisement error." });
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
                    let advertisements = database.collection(collectionName)
                    let query = { _id: mongodb.ObjectID(_id) };

                    advertisements.findOne(query, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Get advertisement error." });
                        } else {
                            res.json({ status: 200, advertisement: result });
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
                    let advertisements = database.collection(collectionName)
                    let query = { _id: mongodb.ObjectID(_id) };

                    advertisements.deleteOne(query, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Delete advertisement error." });
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