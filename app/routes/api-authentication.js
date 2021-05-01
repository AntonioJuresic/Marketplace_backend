const config = require('../../config');
const mongodb = require('mongodb');
const crypto = require("crypto");

module.exports = function (express, mongoClient) {

    const databaseURL = config.databaseurl;
    const databaseName = config.databasename;
    const collectionName = "users";

    const authenticationRouter = express.Router();

    authenticationRouter.route("/")
        .post(function (req, res) {
            mongoClient.connect(databaseURL, function (err, client) {
                if (err) {
                    console.log(err);
                    res.json({ status: 400, description: "Database connection error." });
                } else {
                    let database = client.db(databaseName);
                    let users = database.collection(collectionName);

                    users.find({
                        username: req.body.username
                    }).toArray(function (err, rows) {
                        console.log(err);

                        if (rows.length > 0) {
                            let password = req.body.password;
                            let compare = false;

                            if (rows[0].salt) {
                                let hashedPassword = crypto.pbkdf2Sync(password, rows[0].salt, 10000, 64, 'sha512');
                                compare = hashedPassword.toString('hex') == rows[0].password.toString('hex');
                            }

                            if (compare == true) {
                                let returnedUser = {
                                    _id: rows[0]._id,
                                    username: rows[0].username,
                                    password: rows[0].password,
                                    email: rows[0].email,
                                    admin: rows[0].admin,

                                    name: rows[0].name,
                                    surname: rows[0].surname,
                                    dateOfBirth: rows[0].dateOfBirth,

                                    streetName: rows[0].streetName,
                                    streetNumber: rows[0].streetNumber,
                                    placeNameFK: rows[0].placeNameFK
                                };

                                res.json({ status: 200, user: returnedUser });
                            } else if (compare == false) {
                                res.json({ status: 403, description: "Password is wrong" });
                            }
                        } else {
                            res.json({ status: 404, description: "Username not found" });
                        }

                    });

                    client.close();
                }

            });
        })

    return authenticationRouter;
}