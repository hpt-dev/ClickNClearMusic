const fs = require('fs-extra');
const childProcess = require('child_process');

try {
    // build vue SPA 
    childProcess.exec('npm run build',  {
        cwd: './Web/'
    });
    // build nodejs server ts to js
    childProcess.exec('npm run build',  {
        cwd: './API/'
    });
    // Remove prev build and copy files to /prod
    fs.removeSync('../prod/');
    fs.copySync('../API/prod', '../prod/');
    fs.copySync('../API/node_modules', '../prod/node_modules');
    fs.copySync('../API/public', '../prod/public');
    fs.copySync('../API/data', '../prod/data');
    fs.removeSync('../prod/tests');
} catch (err) {
    console.log(err);
}
