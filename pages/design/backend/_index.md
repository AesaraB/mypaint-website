+++
title = "Backend Documentation"
summary = "Developer guides and reference for MyPaint's backend code"
mypaintver = "v3.0.0"
+++

Technical specifications

# Goals
- Solid software. Even the development branch should stay clear of obvious bugs and glitches all the time.

# Technology overview
Here is a simplified (and somewhat outdated, sorry!) module dependency overview (some "weak" dependencies are not shown):

![module](modules-simplified.png)

* [Less simplified version](modules-complex.png)

## Dependencies
MyPaint (the painting application) is written in Python. MyPaint uses GTK for its
user interface, some of the more complicated bits are designed in Glade. Some parts
are coded in C++ for speed. Its brush engine is written as a portable C library.
- Building, Testing, & Packaging
    - Setup.py uses distutils
    - Tests use nose
    - GitHub actions for CI
- GUI
    - PyGObject (PyGI)
    -   Parts of the GUI are constructed in GLADE, other parts in the Python code
- [Canvas]({{< relref "canvas" >}})
    - NumPy
    - Cairo
- [Brush engine]({{< relref "brush-engine" >}})
    - libmypaint

# Building

# Pages in this Section
