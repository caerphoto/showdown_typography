//
// Replaces straight quotes with curly ones, -- and --- with en dash and em
// dash respectively, and ... with horizontal ellipses.
//

(function () {
    var typography = function (converter) {
        return [
            {
                type: "lang",
                filter: function (text) {
                    var fCodeblocks = {}, nCodeblocks = {}, iCodeblocks = {},
                        e = {
                            endash: '\u2013',
                            emdash: '\u2014',
                            lsquo:  '\u2018',
                            rsquo:  '\u2019',
                            ldquo:  '\u201c',
                            rdquo:  '\u201d',
                            hellip: '\u2026'
                        },

                        subs = [
                            ['\\.\\.\\.', e.hellip],
                            ["(^|[\\s\"])'", '$1' + e.lsquo],
                            ['(^|[\\s-])"', '$1' + e.ldquo],
                            ['---', e.emdash],
                            ['--', e.endash],
                            ["'($|[\\s\"])?", e.rsquo + '$1'],
                            ['"($|[\\s.,;:?!])', e.rdquo + '$1']
                        ],
                        i, l,
                        arr, re, sub;

                    // Extract fenced code blocks.
                    i = -1;
                    text = text.replace(/```((?:.|\n)+?)```/g,
                        function (match, code) {
                            i += 1;
                            fCodeblocks[i] = "```" + code + "```";
                            return "{gfm-js-fcb-" + i + "}";
                        });

                    // Extract indented code blocks.
                    i = -1;
                    text = text.replace(/((\n+([ ]{4}|\t).+)+)/g,
                        function (match, code) {
                            i += 1;
                            nCodeblocks[i] = "    " + code;
                            return "{gfm-js-ncb-" + i + "}";
                        });

                    // Extract inline code blocks
                    i = -1;
                    text = text.replace(/`(.+)`/g, function (match, code) {
                            i += 1;
                            iCodeblocks[i] = "`" + code + "`";
                            return "{gfm-js-icb-" + i + "}";
                        });

                    // Perform typographic symbol replacement.
                    for (i = 0, l = subs.length; i < l; i += 1) {
                        arr = subs[i];
                        re = new RegExp(arr[0], 'g');
                        sub = arr[1];
                        text = text.replace(re, sub);
                    }

                    // Ellipses.
                    text = text.replace(/\.{3}/g, "&hellip;");


                    // Restore fenced code blocks.
                    text = text.replace(/{gfm-js-fcb-([0-9]+)}/g, function (x, y) {
                        return  fCodeblocks[y];
                    });

                    // Restore indented code blocks.
                    text = text.replace(/{gfm-js-ncb-([0-9]+)}/g, function (x, y) {
                        return  nCodeblocks[y];
                    });

                    // Restore inline code blocks.
                    text = text.replace(/{gfm-js-icb-([0-9]+)}/g, function (x, y) {
                        return iCodeblocks[y];
                    });

                    return text;
                }
            }
        ];
    };

    // Client-side export
    if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.typography = typography; }
    // Server-side export
    if (typeof module !== 'undefined') module.exports = typography;
}());

