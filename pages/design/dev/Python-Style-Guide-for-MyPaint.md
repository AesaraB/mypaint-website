### General Python Coding

All contributed program code should be wrapped at 78 columns regardless of language. Python docstrings and commit messages should be wrapped at 72 columns.

We use four spaces per indent level for Python, C, C++, and shell, and two spaces per level for XML code.

* [PEP 8](http://www.python.org/dev/peps/pep-0008/) applies, with a few exceptions, documented in [setup.cfg](https://github.com/mypaint/mypaint/blob/master/setup.cfg). Please use [flake8](https://gitlab.com/pycqa/flake8) to check over your changes before sending a PR.
* Please try to follow the [Google Python Style Guide](http://google-styleguide.googlecode.com/svn/trunk/pyguide.html). It's well thought out and thorough, while not being onerous.
* Constantine Lignos's [Anti-Patterns in Python Programming](http://lignos.org/py_antipatterns/) covers some common coding pitfalls.
* Make your code pretty and readable! Brandon Rhodes's [A Python Æsthetic](http://rhodesmill.org/brandon/slides/2012-11-pyconca/) is a great place to start.

### Docstrings

We seem to be settling on [Sphinx](http://sphinx-doc.org/)'s [autodoc syntax](http://sphinx-doc.org/ext/autodoc.html#module-sphinx.ext.autodoc) for writing docstrings. Where it doesn't contradict, please follow [PEP 257](http://www.python.org/dev/peps/pep-0257/) too.

Python code should always have docstrings describing _what_ a public function or class does. We would like to use Sphinx's `autodoc` to generate API documentation one day, but conventions have not yet been settled for it. For now, please document parameters using Sphinx-style [info field lists](http://www.sphinx-doc.org/en/stable/domains.html#info-field-lists), and try not to use too much additional ReStructuredText markup.

```python
class Example (_ExampleBase):
    """Demonstrative example class."""

    def add_two(self, n1, n2):
        """Adds two numbers, or other objects.

        :param object n1: The first object to addify.
        :param object n2: The second object to addulate.
        :returns: The summified results of the two arguments.

        Any kind of object can be added provided it's supported
        by the builtin "+" operator. You might as well use that.

        """
        return n1 + n2
```

When it's not obvious what a bit of code is doing, add comments to explain _why_ you are doing something.

### Automated tests

We like to use `doctest` in Python code. There are a number of standalone test scripts too.

```python
def tested_func(a, b):
    """Multiplies two things.

    >>> tested_func(42, 3)
    126
    >>> tested_func("A", 4)
    'AAAA'
    """
    # Feel free to write tests before you write any code.
```

The doctests in `lib/` and `brushlib/` are run by [Travis-CI](https://travis-ci.org/mypaint/mypaint) whenever a new commit is made, because these are the tests which can run ‘headless’ (without a graphical user interface).

You can run the tests from the command line using the third-party `nose` tools.

```sh
$ sudo apt-get install python-nose
$ nosetests --with-doctest gui lib brushlib
```

Modules in `gui/` are difficult to write automated tests for, due to their GTK dependency. Tests which rely on GTK objects may not run on a headless system, so they're omitted from our Travis CI configuration. However, don't let that stop you from writing tests for your GUI code. You can use doctest as above, or write your own test driver for a module's widgets.

### Avoid visual indentation

Visual indentation makes it hard to maintain things,
and also ends up making things really cramped.

```python
# (don't do this)
x = run_function_with_really_long_name(argument1,
                                       argument2)
````

For functions that take a *lot* of arguments,
it's a good idea to do something like:

```python
# (this is better)
x = wow_this_sure_is_a_pretty_complicated_function(
    arg1, arg2,
    really_long_argument,
    named_arg = "something",
)
```

This is also recommended for long array/tuple/etc literals:

```python
x = [
    "something",
    "another thing",
    "etc",
]
```

### Strings

We now prefer [`str.format`](https://docs.python.org/3/library/stdtypes.html?highlight=str.format#str.format)
(and `unicode.format`)
over C-style `"%s"` interpolation.
It's much easier to read,
and far friendlier to our translators.

The exception to this rule is for
hard-coded status messages sent to the program's log output(s).
The standard `logging` module requires C-style formatting,
so please use `%r` there for interpolated objects.

### Localization

* Localize any string presented to the user in the GUI.
* Always provide contexts for translators.

We have a [custom gettext module](https://github.com/mypaint/mypaint/blob/master/lib/gettext.py)
which you can import for translation functions that resemble the C gettext macros.
For new code, please always provide contexts.
The context string can be a `str` literal,
and while we're using Python 2.7 at least,
it's visually helpful to write `unicode` literals for the source string.

```python
label.set_text(C_(
    # Context string:
    "some module: some dialog: label",
    # Source string ("msgid") to be translated:
    u"Long Unicode message to be translated. "
    u"Our source language is US English. "
    u"You can use formatting codes here, “{like_this}”."
)).format(
    like_this = "just like this",
)
```

They have to be used almost as if they were actual C macros,
meaning you must write the strings in the `C_()` call as literals.
However `intltool` knows about Python constructs and formatting codes.

Favour standard US English punctuation for new translated strings,
and use proper Unicode punctuation like `“…’–”` instead of `"...'-`.

The practicalities of quoting things like filenames for the user to see
mean that it's better to use double curly quotes
in preference to single quotes.
They're easier to see,
and the user is more likely to have filenames with apostrophes in them.
Also, please place punctuation outside the final quote.

### Don't commit commented-out code

Commented-out code, also known as dead code,
has the potential to cause a lot of harm
as commented-out code quickly becomes out of date and misleading.
We have version control anyway, so people can just look at the commit log.
