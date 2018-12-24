const dataFile = require('./testdata');
this.name = "JS";

module.exports.printData = function () {
    console.log(`Data file is ${dataFile}`);
    console.log(`Users are ${dataFile.users}`);
    console.log(`User1 is ${dataFile.users.user1}`);
    console.log(`FirstName of User1 is ${dataFile.users.user1.firstName}`);
};
