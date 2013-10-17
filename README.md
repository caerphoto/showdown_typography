# Typography Showdown Extension

This file adds “curly quotes”, en– and em— dashes and ellipses… to the Showdown
JavaScript Markdown converter.

## Important!

The converter operates on the Markdown text, not the resulting HTML, so it
should be run before any other pre-converter extensions that might add HTML,
otherwise it’ll convert that HTML’s quotes into curly ones, which won’t be
valid.
