const path = require('path');
module.exports = {
    wfjobName: "wizzi.plugin.geop.job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    destPath: path.join(__dirname, 'dist'),
    plugins: [
        './wizzi-core/dist/index.js', 
        './wizzi-js/dist/index.js', 
        './wizzi-web/dist/index.js'
    ], 
    pluginsBaseFolder: path.join(__dirname, '..','..','..','wizzi','packages'), 
    schemas: [
        "geop"
    ],
    globalContext: {
        isPackageDeploy: true,
    },
};