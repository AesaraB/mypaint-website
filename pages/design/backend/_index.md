+++
title = "Backend Documentation"
summary = "Developer guides and reference for MyPaint's backend code"
+++

Technical specifications

# Goals
- Solid software. Even the development branch should stay clear of obvious bugs
and glitches all the time.

# Contributor Responsibilities
- Please write code that matches what you see elsewhere. [Style guide]({{< ref "/design/contributing/style-guide" >}})
- [Git workflow]({{< ref "/design/contributing/git" >}})
- Contributed code must abide by our [Licensing Policy]({{< ref "/design/contributing/licenses" >}})
- [Keep these docs up to date]({{< ref "/design/contributing/documentation#developer-documentation" >}})
- [Documenting your code properly]({{< ref "/design/contributing/documentation#python" >}})

# Technology Overview
Here is a simplified (and somewhat outdated, sorry!) module dependency overview
(some "weak" dependencies are not shown):

![module](modules-simplified.png)

* [Less simplified version](modules-complex.png)

# Tooling
MyPaint (the painting application) is written in Python. MyPaint uses GTK for its
user interface, some of the more complicated bits are designed in Glade. Some parts
are coded in C++ for speed. Its brush engine is written as a portable C++ library.
- Building, Testing, & Packaging
    - Setup.py uses distutils
    - Tests use nose
    - GitHub actions for CI
- [GUI]({{< relref "gui" >}})
    - PyGObject (PyGI)
    - Parts of the GUI are constructed in GLADE, other parts in the Python code
- [Canvas]({{< relref "canvas" >}})
    - NumPy
    - Cairo
- [Brush engine]({{< relref "brush-engine" >}})
    - libmypaint

## Windows
MyPaint uses [MSYS2](https://msys2.github.io/) for porting onto the Windows platform.

# Pages in this Section
