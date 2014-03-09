var filter = typography()[0].filter,
  e = {
    endash: '\u2013',
    emdash: '\u2014',
    lsquo:  '\u2018',
    rsquo:  '\u2019',
    ldquo:  '\u201c',
    rdquo:  '\u201d',
    hellip: '\u2026'
  };

var a1 = "\"Double outer quotes with 'single inner'\"";
var e1 = e.ldquo + "Double outer quotes with " + e.lsquo + "single inner" + e.rsquo + e.rdquo;
test(a1, function() {
  equal(filter(a1), e1, e1);
});

var a2 = "\"Double outer quotes with <a href='#' class=\"double quotes\">html</a>\"";
var e2 = e.ldquo + "Double outer quotes with <a href='#' class=\"double quotes\">html</a>" + e.rdquo;
test(a2, function() {
  equal(filter(a2), e2, e2);
});

var a3 = "'Single outer quotes with \"double inner\"'";
var e3 = e.lsquo + "Single outer quotes with " + e.ldquo + "double inner" + e.rdquo + e.rsquo;
test(a3, function() {
  equal(filter(a3), e3, e3);
});

var a4 = "'Single outer quotes with <a href=\"#\" class='single quotes'>html</a>'";
var e4 = e.lsquo + "Single outer quotes with <a href=\"#\" class='single quotes'>html</a>" + e.rsquo;
test(a4, function() {
  equal(filter(a4), e4, e4);
});

var a5 = "And here's a \"quote ending in a period.\"";
var e5 = "And here" + e.rsquo + "s a " + e.ldquo + "quote ending in a period." + e.rdquo;
test(a5, function() {
  equal(filter(a5), e5, e5);
});

var a6 = "It also works (\"with brackets\") and @\"anything that's not a 'word character'\"@.";
var e6 = "It also works (" + e.ldquo + "with brackets" + e.rdquo + ") and @" + e.ldquo + "anything that" + e.rsquo + "s not a " + e.lsquo + "word character" + e.rsquo + e.rdquo + "@.";
test(a6, function() {
  equal(filter(a6), e6, e6);
});

var a7 = "Some... ellipses -- and an en dash, and---em dashes.";
var e7 = "Some" + e.hellip + " ellipses " + e.endash + " and an en dash, and" + e.emdash + "em dashes.";
test(a7, function() {
  equal(filter(a7), e7, e7);
});

var a8 = "Support multilingual(unicode): \"여기서 말하는 '이것'은 무엇일까요?\"";
var e8 = "Support multilingual(unicode): " + e.ldquo + "여기서 말하는 " + e.lsquo + "이것" + e.rsquo + "은 무엇일까요?" + e.rdquo;
test(a8, function() {
  equal(filter(a8), e8, e8);
});
