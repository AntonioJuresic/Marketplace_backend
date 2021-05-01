const config = require('../../config');
const mongodb = require('mongodb');
const crypto = require("crypto");

module.exports = function (express, mongoClient) {
    const databaseURL = config.databaseurl;
    const databaseName = config.databasename;
    const collectionName = "users";

    const apiRouter = express.Router();

    apiRouter.route('/')
        .get(function (req, res) {
            mongoClient.connect(databaseURL, function (err, client) {
                if (err) {
                    console.log(err);
                    res.json({ status: 400, description: "Database connection error." });
                } else {
                    let database = client.db(databaseName);
                    let users = database.collection(collectionName);

                    users.find({}).toArray(function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Get users error." });
                        } else {
                            res.json({ status: 200, users: result });
                        }
                    });
                }

                client.close();
            });

        }).post(function (req, res) {
            let password = req.body.password;

            let salt = crypto.randomBytes(128).toString('base64');
            let hashedPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512');

            console.log(hashedPassword);
            
            let user = {
                username: req.body.username,
                password: hashedPassword,
                salt: salt,
                email: req.body.email,
                admin: req.body.admin,

                name: req.body.name,
                surname: req.body.surname,
                dateOfBirth: req.body.dateOfBirth,

                streetName: req.body.streetName,
                streetNumber: req.body.streetNumber,
                placeNameFK: req.body.placeNameFK
            };

            mongoClient.connect(databaseURL, function (err, client) {
                if (err) {
                    console.log(err);
                    res.json({ status: 400, description: "Database connection error." });
                } else {
                    let database = client.db(databaseName);
                    let users = database.collection(collectionName)

                    users.insertOne(user, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Insert user error." });
                        } else {
                            res.json({ status: 200, insertedId: result.insertedId });
                        }
                    });
                }
                client.close();
            });

        }).put(function (req, res) {
            let user = {
                _id: req.body._id,
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                admin: req.body.admin,

                name: req.body.name,
                surname: req.body.surname,
                dateOfBirth: req.body.dateOfBirth,

                streetName: req.body.streetName,
                streetNumber: req.body.streetNumber,
                placeNameFK: req.body.placeNameFK
            }

            mongoClient.connect(databaseURL, function (err, client) {
                if (err) {
                    console.log(err);
                    res.json({ status: 400, description: "Database connection error." });
                } else {
                    let database = client.db(databaseName);
                    let users = database.collection(collectionName)
                    let query = { _id: mongodb.ObjectID(user._id) };
                    let values = {
                        $set: {
                            username: req.body.username,
                            password: req.body.password,
                            email: req.body.email,
                            admin: req.body.admin,

                            name: req.body.name,
                            surname: req.body.surname,
                            dateOfBirth: req.body.dateOfBirth,

                            streetName: req.body.streetName,
                            streetNumber: req.body.streetNumber,
                            placeNameFK: req.body.placeNameFK
                        }
                    }

                    users.updateOne(query, values, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Insert user error." });
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
                    let users = database.collection(collectionName)
                    let query = { _id: mongodb.ObjectID(_id) };

                    users.findOne(query, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Get user error." });
                        } else {
                            res.json({ status: 200, user: result });
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
                    let users = database.collection(collectionName)
                    let query = { _id: mongodb.ObjectID(_id) };

                    users.deleteOne(query, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.json({ status: 400, description: "Delete user error." });
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