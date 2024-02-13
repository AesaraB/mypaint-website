+++
title = "UX/UI Specification"
mypaintver = "v3.0.0"
+++

This section describes the totality of MyPaint's UX/UI and where they're spawned
in the backend.

As MyPaint continues to grow and expand its feature set, the project
needs to ensure that MyPaint remains ***simple to use***, and ***intuitive*** from
the perspective of the user. The UX/UI documentation, alongside the [Human Interface Guidelines][hig],
are the primary source of reference for developers and designers when suggesting,
discussing, and prototyping new user-facing features for MyPaint.<!--more-->

# UX/UI Philosophy
On creating MyPaint, Martin Renold dreamt of a drawing application that could let you
*["Scribble Without Thinking"][mklink]*.
MyPaint has a more powerful toolset than what Martin originally imagined
for the application, yet a [respect for good design][philosophies] fostered in each
cycle of MyPaint's development has stopped MyPaint's UX/UI from becoming bloated and confusing.

## Polish
Frequently used interactions should be fine tuned.
- Allow the user to work in flow.
- Think about usability in milliseconds, react to every sensible input, and
optimize the presented information for fast recognition.

## Simplicity & Intuitivity
- MyPaint should make the act of drawing as simple as possible.
- A new user should immediately know how find to every feature in MyPaint.
    - *Deduction test:* Get a new user, describe a feature to them, and ask
them where they might find it.
    - *Induction test:* The user wants to do something that is a capability of
MyPaint, but has never used the capability before. Can they find our implementation
of the capability?
- Even at its most complex, MyPaint's UI should not feel crowded or overwhelming.
    - Advanced features should not be shown by default.

[sourceYNP]: https://www.core77.com/posts/101787/

## Adaptability
The user should be able to tailor their workflow
- The capabilities of MyPaint should scale with the needs of the user.
- Every part of the UI with few exceptions should be able to be moved or hidden.

[hig]: {{< ref "/design/hig" >}}
[mklink]: https://web.archive.org/web/20080517111220/http://mypaint.intilinux.com:80/?page_id=3
[philosophies]: http://web.archive.org/web/20150908043943/http://mypaint.intilinux.com/?page_id=56

# Getting Started
## Main Window
MyPaint's main window is the entry point from which all user interaction takes place.
{{< grid columns="4fr 1fr" align="center" >}}
{{< img caption="MyPaint main window layout" src="main-window.png" alt="A simplified and labelled graphic of MyPaint's UI">}}
{{< md >}}
1. [Canvas]({{< relref "canvas" >}})
2. [Panels]({{< relref "panels" >}})
3. [Top toolbar]({{< relref "toolbar-top" >}})
4. [Bottom toolbar]({{< relref "toolbar-bottom" >}})
5. [Menubar]({{< relref "menubar" >}})
{{< /md >}}
{{< /grid >}}
## Concepts
Concepts do XYZ

# Pages in this Section
