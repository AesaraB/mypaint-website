Some MyPaint internals are documented here, for a nice overview. **WARNING:** these docs are quite out of date now, and don't cover nested layers or recent changes to the code layout.

## Technology Overview

-   Mostly written in Python with PyGObject (PyGI)
-   Parts of the GUI are constructed in GLADE, other parts in the Python code
-   The brush engine itself is an independent library, written in C
-   Brush dabbing, area filling, and layer compositing code is written in C++, as a python extension module
-   The C++ dialect is fairly standard, with some inline templating for code composition, and some use of STL
-   Some of the C code (brushsettings) is generated with Python

## Code Overview

Here is a simplified (and somewhat outdated, sorry!) module dependency overview (some "weak" dependencies are not shown):

[[Development-Documentation-Mypaint-modules-simplified.png]]

* [Less simplified version](Development-Documentation-Mypaint-modules-complex.png)

## Pixel Format

MyPaint's internal pixel storage uses tiled surfaces where each tile is a square pixel array of side N (currently 64), organized top-to-bottom and left-to-right. These memory areas are also the data segment of a NumPy array of dimensions (N, N, 4), and the data type uint16. Pixels are stored as RGBA data using an unusual but speedy "15+1"-bit floating point value where 0x8000 (1\<\<15) represents 1.0 and 0x0000 represents 0.0. Pixel R, G, and B values are stored multiplied by the pixel's alpha component and are currently nonlinear with an assumed sRGB gamma curve.

- [Pixel Format blog entry](http://mypaint.intilinux.com/?p=19)

New code should use the inline functions defined in `fix15.hpp` for clarity.

In some (but not all) rendering contexts we ignore the backdrop's alpha for speed, and assume that it's always 1.0. Historically, MyPaint has always rendered layers over a solid background, but as of the current development master, this is changing.

## Surface Format and Rendering

[[Development-Documentation-Tiled-surface.png]]
[[Development-Documentation-Tiled-surface-incremental.png]]
 -- incremental screen updates during a stroke

MyPaint stores its pixel data inside tiles of a fixed size. The *TiledSurface* class allocates memory just for the tiles that you paint on. When the screen is updated, the tiles are composited into a temporary rectangular pixbuf, which is then passed to [Cairo](http://www.cairographics.org/) for rotated and zoomed rendering.

During painting, all tiles touched by the stroke are composited completely, but the update region is clipped to the bounding box of the new dabs.

## Brushes

MyPaint brush functionality is separated in a C library called [libmypaint](https://github.com/mypaint/libmypaint) that can be used in other applications.

## First Order Lowpass Filter

They are used in many places in the brush code but most importantly to filter the velocity. This is how it is done when reacting to timestamped events:

    fac = exp(-dt/T1); output = fac*output + (1-fac)*input;

* `dt`: time passed since last calculation
* `T1`: time constant. After this time, about 2/3 of the difference between input and output is gone.

If the input is a position, then

    filtered_velocity = input - output

## Brush Observers etc.

[[Development-Documentation-Brush-observers.png]]

That's how it is currently (subject to change)
