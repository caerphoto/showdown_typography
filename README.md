# showdown_typography [![Build Status](https://secure.travis-ci.org/yangpro/showdown_typography.png?branch=master)](https://travis-ci.org/yangpro/showdown_typography)

A Showdown extension that adds “curly quotes”, en– and em— dashes and ellipses… to the Showdown JavaScript Markdown converter.

This library forked from [https://github.com/caerphoto/showdown_typography](https://github.com/caerphoto/showdown_typography)

- Fix renderer messes with embedded HTML.
- Support multilingual(unicode).

You can also see a live demo [here](http://yangpro.github.io/showdown_typography/).

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

## License

MIT. See `LICENSE` in this directory.

