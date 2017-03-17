// let projectPath = '/Users/jarden/github/template-generater';
// let newPath = 'keymaps/AbcDef';
// let templatePath = '/Users/jarden/atom-template';

const path = require('path');
const changeCase = require('change-case');
changeCase.baseCase = changeCase.noCase;
const copy = require('copy');
const fs = require('fs');
const q = require('q');
const replaceInFile = require('replace-in-file');

const CHANGE_CASE_TYPE = ['base', 'camel', 'constant', 'dot', 'header',
    'lower', 'param', 'pascal', 'path', 'sentence',
    'snake', 'swap', 'title', 'upper'
];



function copyFiles(modulePath, templatePath) {
    // console.log(path.resolve(templatePath, '*'));
    let d = q.defer();
    copy(path.resolve(templatePath, '*'), modulePath, function(err, files) {
        if (err) {
            throw (err);
            return d.reject(err);
        }

        let filePaths = [];
        files.forEach(function(f) {
            filePaths.push(f.dest);
        });
        return d.resolve(filePaths);
    });

    return d.promise;
}

function updateFileName(files, moduleName) {
    let primises = [];
    files.forEach(function(f) {
        let d = q.defer();
        let newName = replaceAll(f, moduleName);
        fs.rename(f, newName, function(err) {
            if (err) {
                throw (err);
                return d.reject(err);
            }
            return d.resolve(files);
        });
        primises.push(d.promise);
    });
    return q.all(primises);
}

function updateFileContent(files, moduleName) {
    let options = {
        files: [],
        from: [],
        to: [],
        allowEmptyPaths: false,
        encoding: 'utf8'
    };
    files.forEach(function(f) {
        options.files.push(replaceAll(f, moduleName));
    });

    CHANGE_CASE_TYPE.forEach(function(type) {
        let t = type + 'Case';
        let pattern = new RegExp('{{' + type + '}}', 'g');
        options.from.push(pattern);
        options.to.push(changeCase[t](moduleName));
    });
    replaceInFile(options, (error, changedFiles) => {
        if (error) {
            return console.error('Error occurred:', error);
        }
        // console.log('Modified files:', changedFiles.join(', '));
    });

}



function replaceAll(old_string, base) {
    let new_string = old_string;

    CHANGE_CASE_TYPE.forEach(function(type) {
        let t = type + 'Case';
        let pattern = new RegExp('{{' + type + '}}', 'g');
        new_string = new_string.replace(pattern, changeCase[t](base));
    });

    return new_string;
}

function init(projectPath, newPath, templatePath) {
    // console.log(projectPath);
    // console.log(newPath);
    // console.log(templatePath);

    let moduleName = path.basename(newPath);
    let modulePath = path.resolve(projectPath, newPath);
    fs.stat(templatePath, function(err, stats) {
        if (err || !stats.isDirectory()) {
            templatePath = path.resolve(__dirname, '..', 'template');
        }
        start(modulePath, moduleName, templatePath);
    });

}

function start(modulePath, moduleName, templatePath) {
    copyFiles(modulePath, templatePath).then(function(files) {
        updateFileName(files, moduleName).then(function() {
            updateFileContent(files, moduleName);
        });
    });
}


// init(projectPath, newPath, templatePath);
module.exports = init;
