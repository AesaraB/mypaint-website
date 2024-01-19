> :pencil2: *Get writing:* make yourself a [Github](https://github.com) account, and edit pages right here on the wiki.  
> :rabbit: *Go deeper:* [find “docs” tasks in the issue tracker][docissues]

You can improve MyPaint by making instructions for people using it. Good documentation is vital for everyone. Here are some ideas:

* Make videos or tutorials for MyPaint's features.
  - Share links to what you create on the [[documentation index|Documentation]], or [[tell us about it|Community and Contacts]].
* Work on the [[v1.2 User Manual]].
* Edit and correct Markdown files in the source code.
* Create posts for the MyPaint website.
* [[Translate|Writing Documentation#Translations]] existing documentation.
* Fix [reported problems with the docs][docissues].

### User Manual

The [[v1.2 User Manual]] needs to be complete for the next release. This is a major task, and we'd appreciate your help. You can review or edit what we have already written, or write new pages. We want good instructions with examples and pictures.

### Language

Write clear English, at a level understandable by a 12 to 14 year old. There are tools on the web you can use to check how complex your writing is. For example, you can use the online [Hemingway editor](http://www.hemingwayapp.com/) and try not to go above a "grade 8" reading level.

We're not too fussy about what variety of English you use.

Avoid telling people to "just" or "simply" do things. This can alienate people who don't understand straight away. What is easy to you may not be easy for someone else.

### Wiki pages

Write wiki pages in [GitHub's flavour of Markdown](https://help.github.com/articles/github-flavored-markdown/). Make links from page to page using [double square brackets](https://help.github.com/articles/adding-links-to-wikis/). For more info, see [GitHub's wiki documentation](https://help.github.com/categories/wiki/).

If you need to put screenshots or diagrams on a wiki page, you'll notice that there is no upload button. The image button in the editor asks for an image URL instead. There's a workaround for this roadblock though: host wiki images on GitHub's content network. You can use a dirty, but well-known trick do do this: use the issue editor as an image uploader. Start composing a new Github issue, then drag your image file into the issue's editor. You can then cut and paste the resulting Markdown into the wiki editor.

Sometimes you'll see images hosted within the wiki itself, linked with double square brackets. This is OK, but it isn't recommended for new users.

Don't use the wiki for your art gallery. The exposure will be terrible, and there are [[far better alternatives now|Community-and-Contacts]].

### Translations

If a wiki page is complete, please consider translating it into other languages. Make a new page for each new language, and put the [language code](https://en.wikipedia.org/wiki/IETF_language_tag) at the start of the new page's name. For example, a page named "v1.2 Preferences" could be named "de v1.2 Einstellungen" for its German translation, and "zh-TW v1.2 偏好設定" for its translation into Chinese (Taiwan).

Don't use flag emoji to represent translations at the top of a page. The globe emoji have a consistent meaning. When linking to translations at the top of a page, write a line like:

```markdown
> :earth_asia: [[Deutsch|de v1.2 Einstellungen]], [[國語|zh-TW v1.2 偏好設定]].  
```
  > :earth_asia: Deutsch, 普通话.

There's no particular order for languages, and you can use any globe picture you like. To link back to the English text from a translation, write:

```markdown
> :earth_africa: [[English/other|v1.2 Preferences]].
```
  > :earth_africa: English/other.

Please consider [[translating MyPaint's program text|Translating MyPaint]] too.

[hem]: http://www.hemingwayapp.com/
[docissues]: https://github.com/mypaint/mypaint/issues?q=is%3Aopen+is%3Aissue+label%3Adocs