"use strict";

const js = require("./source/js/js");
const json = require("./source/json/json");
const yaml = require("./source/yaml/yaml");

[js, json, yaml].forEach((technology) => {
    console.log(`----------- Printing ${technology.name} example -----------`);
    technology.printData();
    console.log(`*********** Finished ${technology.name} example ***********`);
});
