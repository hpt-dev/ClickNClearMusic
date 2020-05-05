const fs = require('fs-extra');
const { exec } = require('child_process');

try {
    // // build vue SPA 
    exec('npm run build',  {
        cwd: '../Web/'
    });

    //build nodejs server ts to js
    exec('npm run build',  {
        cwd: '../API/'
    }, function() {
        // Remove prev build and copy files to /prod
        fs.removeSync('../prod/');
        fs.copySync('../API/prod', '../prod/');
        fs.copySync('../API/node_modules', '../prod/node_modules');
        fs.copySync('../API/public', '../prod/public');
        fs.copySync('../API/data', '../prod/data');
        fs.removeSync('../prod/tests');
        fs.removeSync('../API/prod/');
    });
} catch (err) {
    console.log(err);
}
