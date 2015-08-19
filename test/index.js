var fs      = require('fs');
var path    = require('path');
var test    = require('tape');
var postcss = require('postcss');
var plugin  = require('../');

var FIXTURES_DIR = './test/fixtures';

function isTestFixture(filename) {
    return filename.match(/^((?!\.expected).)*\.css$/);
}

function expectedName(filename) {
    return filename.replace(/\.css$/, '.expected.css');
}

function getFixture(filename) {
    return fs.readFileSync(path.join(FIXTURES_DIR, filename), 'utf8');
}

function getTestName(filename) {
    return filename.replace(/(-|\.css$)/g, ' ');
}

function processCss(source, resultHandler, errorHandler) {
    postcss(plugin()).process(source)
        .then(resultHandler)
        .catch(errorHandler);
}

function runTest(filename) {
    var input = getFixture(filename);
    var expected = getFixture(expectedName(filename));
    processCss(input, function handleResult(result) {
        test(getTestName(filename), function (t) {
            t.plan(2);
            t.equal(result.css, expected, 'output matches expected');
            t.equal(result.warnings().length, 0, 'no warnings');
            t.end();
        });
    }, function handleError(error) {
        console.error(error);
    });
}

var tests = fs.readdirSync(FIXTURES_DIR).filter(isTestFixture);
tests.forEach(runTest);
