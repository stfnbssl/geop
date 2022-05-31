const path = require('path');
module.exports = {
    wfjobName: "wizzi.plugin.geop.job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    destPath: path.join(__dirname, 'dist'),
    plugins: [
        'wizzi-core', 
        'wizzi-js', 
        'wizzi-web',
    ], 
    schemas: [
        "geop"
    ],
    globalContext: {
        isPackageDeploy: true,
    },
};