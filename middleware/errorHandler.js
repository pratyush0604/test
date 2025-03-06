const { constants} = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode){
        case constants.VALIDATION_ERROR:
        case 400:
            res.json({ 
                title: "Validation Failed", 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json({ 
                title: "Not Found", 
                message: err.message, 
                stackTrace: err.stack
            });
        case constants.UNAUTHORIZED:
            res.json({ 
                title: "UNAUTHORIZED", 
                message: err.message, 
                stackTrace: err.stack
            });
        case constants.FORBIDDDEN:
            res.json({ 
                title: "FORBIDDDEN", 
                message: err.message, 
                stackTrace: err.stack
            });
        case constants.SERVER_ERROR:
            res.json({ 
                title: "SERVER_ERROR", 
                message: err.message, 
                stackTrace: err.stack
            });

        default:
            console.log("No Error, All good !");
            break;    
    }
};


module.exports = errorHandler;