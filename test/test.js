var postcss = require('postcss');
var expect  = require('chai').expect;
var fs      = require('fs');

var plugin = require('../');

var src = fs.readFileSync('./test/case.css', 'utf8');
var exp = fs.readFileSync('./test/case.expected.css', 'utf8');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe('postcss-match', function () {

     // Write tests here

    it('does something', function (done) {
        test(src, exp, { }, done);
    });

});
