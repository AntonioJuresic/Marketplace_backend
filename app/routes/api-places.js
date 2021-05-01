const config = require('../../config');
const mongodb = require('mongodb');

module.exports = function (express, mongoClient) {
    const databaseURL = config.databaseurl;
    const databaseName = config.databasename;
    const collectionName = "places";

    const apiRouter = express.Router();

    apiRouter.route('/')
        .get(function (req, res) {
            mongoClient.connect(databaseURL, function (err, client) {
                if (err) {
                    console.log(err);
                    res.json({ status: 400, description: "Database connection error." });
                } else {
                    let database = client.db(databaseName);
                    let places = database.collection(collectionName);

                    places.find({}).toArray(function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Get places error." });
                        } else {
                            res.json({ status: 200, places: result });
                        }
                    });
                }

                client.close();
            });

        }).post(function (req, res) {
            let place = {
                placeName: req.body.placeName
            };

            mongoClient.connect(databaseURL, function (err, client) {
                if (err) {
                    console.log(err);
                    res.json({ status: 400, description: "Database connection error." });
                } else {
                    let database = client.db(databaseName);
                    let places = database.collection(collectionName)

                    places.insertOne(place, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Insert place error." });
                        } else {
                            res.json({ status: 200, result });
                        }
                    });
                }
                client.close();
            });

        }).put(function (req, res) {
            let place = {
                _id: req.body._id,
                placeName: req.body.placeName
            }

            mongoClient.connect(databaseURL, function (err, client) {
                if (err) {
                    console.log(err);
                    res.json({ status: 400, description: "Database connection error." });
                } else {
                    let database = client.db(databaseName);
                    let places = database.collection(collectionName)
                    let query = { _id: mongodb.ObjectID(place._id) };
                    let values = {
                        $set: {
                            placeName: req.body.placeName
                        }
                    }

                    places.updateOne(query, values, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Insert place error." });
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
                    let places = database.collection(collectionName)
                    let query = { _id: mongodb.ObjectID(_id) };

                    places.findOne(query, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Get place error." });
                        } else {
                            res.json({ status: 200, place: result });
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
                    let places = database.collection(collectionName)
                    let query = { _id: mongodb.ObjectID(_id) };

                    places.deleteOne(query, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Delete place error." });
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