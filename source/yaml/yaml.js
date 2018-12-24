const yaml = require('js-yaml');
const fs = require('fs');
this.name = "YAML";

module.exports.printData = function () {
    try {
        const dataFile = yaml.safeLoad(fs.readFileSync('source/yaml/testdata.yml', 'utf8'));
        console.log(`Data file is ${dataFile}`);
        console.log(`Users are ${dataFile.users}`);
        console.log(`User1 is ${dataFile.users.user1}`);
        console.log(`FirstName of User1 is ${dataFile.users.user1.firstName}`);
    } catch (e) {
        console.log(e);
    }
};
