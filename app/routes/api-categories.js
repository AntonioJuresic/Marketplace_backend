const config = require('../../config');
const mongodb = require('mongodb');

module.exports = function (express, mongoClient) {
    const databaseURL = config.databaseurl;
    const databaseName = config.databasename;
    const collectionName = "categories";

    const apiRouter = express.Router();

    apiRouter.route('/')
        .get(function (req, res) {
            mongoClient.connect(databaseURL, function (err, client) {
                if (err) {
                    console.log(err);
                    res.json({ status: 400, description: "Database connection error." });
                } else {
                    let database = client.db(databaseName);
                    let categories = database.collection(collectionName);

                    categories.find({}).toArray(function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Get categories error." });
                        } else {
                            res.json({ status: 200, categories: result });
                        }
                    });
                }

                client.close();
            });

        }).post(function (req, res) {
            let category = {
                categoryName: req.body.categoryName
            };

            mongoClient.connect(databaseURL, function (err, client) {
                if (err) {
                    console.log(err);
                    res.json({ status: 400, description: "Database connection error." });
                } else {
                    let database = client.db(databaseName);
                    let categories = database.collection(collectionName)

                    categories.insertOne(category, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Insert category error." });
                        } else {
                            res.json({ status: 200, result });
                        }
                    });
                }
                client.close();
            });

        }).put(function (req, res) {
            let category = {
                _id: req.body._id,
                categoryName: req.body.categoryName
            }

            mongoClient.connect(databaseURL, function (err, client) {
                if (err) {
                    console.log(err);
                    res.json({ status: 400, description: "Database connection error." });
                } else {
                    let database = client.db(databaseName);
                    let categories = database.collection(collectionName)
                    let query = { _id: mongodb.ObjectID(category._id) };
                    let values = {
                        $set: {
                            categoryName: req.body.categoryName
                        }
                    }

                    categories.updateOne(query, values, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Insert category error." });
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
                    let categories = database.collection(collectionName)
                    let query = { _id: mongodb.ObjectID(_id) };

                    categories.findOne(query, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Get category error." });
                        } else {
                            res.json({ status: 200, category: result });
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
                    let categories = database.collection(collectionName)
                    let query = { _id: mongodb.ObjectID(_id) };

                    categories.deleteOne(query, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Delete category error." });
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