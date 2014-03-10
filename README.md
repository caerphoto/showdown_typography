# Typography Showdown Extension [![Build Status](https://secure.travis-ci.org/caerphoto/showdown_typography.png?branch=master)](https://travis-ci.org/caerphoto/showdown_typography)

This file adds “curly quotes”, en– and em— dashes and ellipses… to the Showdown
JavaScript Markdown converter.

The converter is based on the regexes I developed for my [Soda](http://soda.heroku.com/) document editor.

- Fix renderer messes with embedded HTML.
- Support multilingual(unicode).

## Use stand-alone

Stand-alone usage is as follows:

    var filter = typography()[0].filter;
    
    filter("\"Double outer quotes with 'single inner'\"");
    => “Double outer quotes with ‘single inner’”
    
    filter("\"Double outer quotes with <a href='#' class=\"double quotes\">html</a>\"");
    => “Double outer quotes with <a href='#' class="double quotes">html</a>”
    
    filter("'Single outer quotes with \"double inner\"'");
    => ‘Single outer quotes with “double inner”’
    
    filter("'Single outer quotes with <a href=\"#\" class='single quotes'>html</a>'");
    => ‘Single outer quotes with <a href="#" class='single quotes'>html</a>’
    
    filter("And here's a \"quote ending in a period.\"");
    => And here’s a “quote ending in a period.”
    
    filter("It also works (\"with brackets\") and @\"anything that's not a 'word character'\"@.");
    => It also works (“with brackets”) and @“anything that’s not a ‘word character’”@.
    
    filter("Some... ellipses -- and an en dash, and---em dashes.");
    => Some… ellipses – and an en dash, and—em dashes.
    
    filter("Support multilingual(unicode): \"여기서 말하는 '이것'은 무엇일까요?\"");
    => Support multilingual(unicode): “여기서 말하는 ‘이것’은 무엇일까요?”

## Important!

The converter operates on the Markdown text, not the resulting HTML, so it
should be run before any other pre-converter extensions that might add HTML,
otherwise it’ll convert that HTML’s quotes into curly ones, which won’t be
valid.

## Limitations

There are a few of limitations that are not trivial to solve:

* Incorrectly uses left single quote for things like `Summer of '69` or `'twas the night before Christmas`
* Incorrectly uses right single and double quotes where &prime; (&amp;prime;) and &Prime; (&amp;Prime;) should be used, e.g. `A plank of wood 3' 6" long`

I'm honestly not sure how to work around these. The `'69` thing could possibly be fixed using a rule like `/'(\d{2}\b)/`, but that would then be wrong for actual quotes that start with a 2-digit number, e.g. `87 years ago our fathers brought forth on this continent…`.

The `'twas` case could be handled with some specific rules for those types of
words.

Similarly, The second issue might be worked around using `/(\d+)'/` and `/(\d+)"/` but again, for quotes that end in numbers the result would be wrong. You could argue that quotes should end in commas or periods, but there are "over 9000" examples to the contrary.

