> :busts_in_silhouette: This page is part of our series describing [[how you can help MyPaint grow|Contributing]].  
> :hammer_and_wrench: Technical level: moderate, but there's good HOWTOs.

For developing MyPaint on Windows, or just fixing bugs, we recommend MSYS2. We use it for our own Windows builds. MSYS2 is a developer environment based on Cygwin, but it's geared towards making native Windows software that doesn't require any special DLLs other than an MSVC runtime.

The MyPaint team do not maintain MSYS2, but we do contribute patches and builds back to it.

## What you need

* Permission to install software as Administrator.
* A little familiarity with using a computer's command line (not much).

## Installing MSYS2

* Follow the installation instructions at [http://msys2.org/](https://linkify.me/fTamOWN). This puts the development environment at `c:\msys32` or `c:\msys64` depending on which one you chose.

* Don't forget to update this installation from time to time. The instructions above explain how to do that.

* You'll need to be comfortable with opening its command-line shells. There are three. In our documentation on this wiki, we'll refer to them with the following icons so you know which shell to use.
  - :computer:**MINGW64** This environment is used for generating and running native .EXEs and .DLLs for 64-bit Windows.
  - :computer:**MINGW32** The same, but for 32-bit Windows.
  - :computer:**MSYS** This is the Cygwin-like basis for MSYS2. It has a special support DLL of its own.

## Add a basic development environment

You'll need to install some extras in order to get a reasonable developer environment. We recommend:

    $ pacman --sync --needed --noconfirm base-devel mingw-w64-{i686,x86_64}-toolchain git

## Further information

* [The MSYS2 project's wiki](https://github.com/msys2/msys2/wiki)
* [Native packages for MSYS2](https://github.com/Alexpux/MINGW-packages)