const authenticationRouter = require("./api-authentication");
const advertisementsRouter = require("./api-advertisements");
const categoriesRouter = require("./api-categories");
const conditionsRouter = require("./api-conditions");
const placesRouter = require("./api-places");
const usersRouter = require("./api-users");

module.exports = function (express, mongodb) {
    let apiRouter = express.Router();

    apiRouter.get('/', function (req, res) {
        res.json({ message: 'Dobro dosli na nas API!' });
    });

    apiRouter.use("/authentication", authenticationRouter(express, mongodb));
    
    apiRouter.use("/advertisements", advertisementsRouter(express, mongodb));
    apiRouter.use("/categories", categoriesRouter(express, mongodb));
    apiRouter.use("/conditions", conditionsRouter(express, mongodb));
    apiRouter.use("/places", placesRouter(express, mongodb));
    apiRouter.use("/users", usersRouter(express, mongodb));

    return apiRouter;
};