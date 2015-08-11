var postcss = require('postcss');

var ANY = '_';

function getPatterns(str) {
    return str.replace(/=>|,|\s/g, '').split('|');
}

module.exports = postcss.plugin('postcss-match', function plugin() {
    return function process(css) {
        css.eachAtRule('match', function processMatch(rule) {
            var value = rule.params;
            var found = rule.some(function checkArm(child) {
                var patterns = getPatterns(child.selector);
                return patterns.some(function checkPattern(pattern) {
                    if (pattern === value || pattern === ANY) {
                        rule.replaceWith(child.nodes);
                        return true;
                    }
                });
            });
            if (!found) {
                rule.removeSelf();
            }
        });
    };
});
