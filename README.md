# Typography Showdown Extension

This file adds “curly quotes”, en– and em— dashes and ellipses… to the Showdown
JavaScript Markdown converter.

## Important!

The converter operates on the Markdown text, not the resulting HTML, so it
should be run before any other pre-converter extensions that might add HTML,
otherwise it’ll convert that HTML’s quotes into curly ones, which won’t be
valid.

## Limitations

There are a few of limitations that are not trivial to solve:

* Incorrectly uses left single quote for things like `Summer of '69` or `'twas the night before Christmas`
* Incorrectly uses right single and double quotes where &prime; (&amp;prime;) and &Prime; (&amp;Prime;) should be used, e.g. `A plank of wood 3' 6" long`

I'm honestly not sure how to work around these. The `'69` thing could possibly be fixed using a rule like `/'(\d{2}\b)/`, but that would then be wrong for actual quotes that start with a 2-digit number. Similarly, The second issue might be worked around using `/(\d+)'/` and `/(\d+)"/` but again, for quotes that end in numbers the result would be wrong.
