var postcss = require('postcss');

function getPattern(str) {
    return str.replace(/=>|,|\s/g, '');
}

module.exports = postcss.plugin('postcss-match', function (opts) {
    opts = opts || {};

    // TODO: Customizable "any" pattern (e.g. change `_` to `default`)
    // TODO: Customizable delimiter (e.g. change `=>` to `:`)

    return function (css) {
        css.eachAtRule('match', function processMatch(rule) {
            var value = rule.params;
            var found;

            rule.each(function checkArm(child) {
                var pattern = getPattern(child.selector);
                if (pattern === value) {
                    found = child.nodes;
                }
            });

            if (found) {
                rule.replaceWith(found);
            } else {
                // TODO: Handle any case
                rule.removeSelf();
            }
        });
    };
});
