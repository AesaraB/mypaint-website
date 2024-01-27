+++
title = "Documentation"
summary = "This page is a guide on writing documentation for MyPaint projects"
+++

[Documentation][document.wiki]
[Website documentation wiki][web.wiki]

[web.wiki]: https://github.com/mypaint/mypaint.github.io/wiki
[document.wiki]: https://github.com/mypaint/mypaint/wiki/Writing-Documentation

# Creating/Modifying Markdown Files
Here's [a guide][md-guide] to writing markdown if you haven't already.

- Break lines at the word that *start* after the 80th column
- Pages have [summaries][hugo-summary] generated from page content or front matter,
try to avoid the first case here and instead use 2 or 3:
    1. Automatically at the 70th word
    2. At the position of the \<!\-\-more\-\-\> tag in the content.
    3. In front matter, using the ``summary`` key.

## Front Matter
[How to use front matter](https://gohugo.io/content-management/front-matter/).
This site's front matter is written in [TOML](https://toml.io/en/).

|Name|Value|Optional?|Description|
|:---|:----|:--------|:----------|
|title|String|No|Describe a title for the page|
|author|String|Yes|Describe an author for the page|
|date|[RFC 3339][rfc-3339]|Yes|Describe a creation/first published timestamp for the page|
|[summary][hugo-summary]|String|Yes|Define a summary instead of using page content|
|draft|Boolean|Yes|Describe the page as a [draft][hug-draft]. These aren't published in the production environment|
|siteNavURL|Path|Yes|Enable the site navigation widget in aside at the path described|

[rfc-3339]: https://datatracker.ietf.org/doc/html/rfc3339
[hugo-draft]: https://gohugo.io/methods/page/draft/
[hugo-summary]: https://gohugo.io/content-management/summaries/

### List Pages
|Name|Value|Optional?|Description|
|:---|:----|:--------|:----------|
|hideSummary|Boolean|Yes|Don't render the summary in the page body|
|hideList|Boolean|Yes|Don't render the list of pages|

## Shortcodes
[How to use Shortcodes](https://gohugo.io/content-management/shortcodes/)

### Hugo Shortcodes
|[``ref``][hugo-ref]|Inline|``0``: Path|Create an anchor to the specified path|
|[``relref``][hugo-relref]|Inline|``0``: Path|Create an anchor to the specified path *relative to the current directory|

[hugo-ref]: https://gohugo.io/methods/shortcode/ref/
[hugo-relref]: https://gohugo.io/methods/shortcode/relref/

### Custom Shortcodes
|Shortcode|Type|Parameters|Description|
|:--------|:---|:---------|:----------|
|``colour``|Content|``0``: oneof (red, yellow)|Change the colour of the contained text|
|``column``|Inline|[``rows``][css-rows], [``columns``][css-columns], [``align``][css-align]|Create a CSS Grid|
|``id``|Content|``0``: string|Enclose the contained text in a <span> tag with ID ``0``|
|``img``|Inline|``src``: path, ``caption``: string, [``float``][css-float], [``width``][css-max-width] |Insert an image|

[css-rows]: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
[css-columns]: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
[css-align]: https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
[css-float]: https://developer.mozilla.org/en-US/docs/Web/CSS/float
[css-max-width]: https://developer.mozilla.org/en-US/docs/Web/CSS/max-width
