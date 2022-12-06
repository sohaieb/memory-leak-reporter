const config = require('./config');
const pre = require('./src/pre');
const actions = require('./src/actions');
const back = require('./src/back');

module.exports = {
    action: async (page) => await actions(page),
    back: async (page) => await back(page),
    url: () => config.test_url,
    beforeInitialPageLoad: async (page) => await pre(page),
    repeat: () => config.tests_count
};