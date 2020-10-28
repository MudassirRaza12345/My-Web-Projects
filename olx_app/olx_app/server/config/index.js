const configValues = require('./config');

module.exports = {

    getDB_Connection_URL : () => {
    return `mongodb://${ configValues.user_name }:${configValues.password}@ds125502.mlab.com:25502/server-mongodb`;
    }
}