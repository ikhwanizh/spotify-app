const fs = require('fs');
const path = require('path');

function readConfig() {
    const configPath = path.join(__dirname, '..' , 'config' , 'development.json');
    const configJSON = fs.readFileSync(configPath);
    const config = JSON.parse(configJSON);
    return config;
}

module.exports = readConfig();