+++
title = "Building"
+++

### Testing and Bug Reporting
You can help us out a lot by [building and testing][test.wiki] new features, The
most effective feedback we get comes from people testing the development master
directly, who are willing to try things out and experiment by themselves.

[test.wiki]: https://github.com/mypaint/mypaint/wiki/Building-and-Testing

It's really helpful to us if lots of people
build and test the MyPaint development master directly.
If more people go hunting for bugs,
the more certain it is they will be reported.
Tracking the “master” development branch can be fiddly,
and you need to be familiar with the Linux command line
or its equivalent on your platform.

### Basic workflow

See the [BUILDING.md](https://github.com/mypaint/mypaint/blob/master/BUILDING.md) file
for general instructions, and also hints about how you should do things on different platforms.

1. **Install** the dependencies you need onto your computer.
   MyPaint relies on a lot of other programs and bits of code to work.
   This includes [_libmypaint_](https://github.com/mypaint/libmypaint), which you most likely also have to build from source.
2. **Clone** the MyPaint source repository into your own development copy.
   You’ll be keeping this clone up to date regularly to catch the newest changes.
   Your local builds of MyPaint happen in this folder.
3. **Build** the program.
   The brush engine and some parts of the main program are written in fast C code, so they will need compiling.
4. **Test** the results of the build.
   This can be done entirely within your cloned source tree.
   Generally you should test with throwaway fresh configurations,
   but if you’re brave you can
   run it against your regular program configuration instead.
5. **Report problems** you find, or fix them.
6. **Regularly update** your cloned source tree, to get new features as they’re added!

See [[Reporting Bugs]], [[Programming]], and [[Contributing Patches]] for the next steps.
The basic workflow above is also a good place to start
if you'd like to contribute [[artwork|Contributing Artwork]] for use in the program,
or for getting the understanding necessary for [[packaging Mypaint for new platforms|Packaging]].


# Windows
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

## Building
> :busts_in_silhouette: This page is part of our series describing [[how you can help MyPaint grow|Contributing]].  
> :hammer_and_wrench: Technical level: moderate/hard.  

Sometimes we'll need to fix problems in the multi-platform GUI toolkit that MyPaint is built on top of, called GTK. This component isn't maintained by the MyPaint developers, but it's an open-source project just like MyPaint and we like to contribute back upstream where we can simply because we benefit from it.

There are several debugging and testing tasks that need people to make local builds of GTK so they can mess around with them. For example, we commonly have to refer users reporting GTK problems to the upstream developers, and they may ask the reporters to test a patch for them because they don't have the required tablet hardware.

Making these local debug builds is now a lot easier, thanks to the fine folk who maintain [MSYS2](http://www.msys2.org/). If you've got some technical knowledge, you can help us help upstream to get bugs fixed!

### Step 1: install a basic MSYS2 environment

See [[Installing MSYS2 on Windows]]. Get it installed and fully updated.

### Step 2: build and install GTK from git

There is now a PKGBUILD available for MSYS2 which [downloads GTK from git](https://github.com/Alexpux/MINGW-packages/tree/master/mingw-w64-gtk3-git), and builds it into a temporarily installable package.  
In an :computer:**MSYS** terminal, type:

    $ cd /usr/src
    $ git clone https://github.com/Alexpux/MINGW-packages.git
    $ cd MINGW-packages/mingw-w64-gtk3-git
    $ makepkg-mingw --syncdeps --nobuild   # unpack but don't build

At this point, you can edit the unpacked source code in `src/gtk3`. From the normal Windows perspective, that path looks like `C:\msys32\usr\src\MINGW-packages\mingw-w64-gtk3-git\src\gtk3`.

    $ makepkg-mingw --force --holdver --noextract   # build without unpack

GTK takes about an hour per target to build, and `makepkg-mingw` normally builds for both `MINGW32` and `MINGW64`. To save time, you might want to limit the build command to a single target environment:

    $ MINGW_INSTALLS=mingw64  makepkg-mingw --force --holdver --noextract

The commands above need to be run in the MSYS shell.

The results of the final build command are `.pkg.tar.xz` files in the `mingw-w64-gtk3-git` folder. They can be discovered and installed with

    $ ls *.pkg.tar.xz
    $ pacman -U "mingw-w64-{{{ VARIOUS SPECIFICS HERE }}}.pkg.tar.xz"

Once the packages are installed, you can test the changes with an existing MyPaint package install, or with the `gtk3-demo` program that is part of the package you just installed. You'll need to change to one of the native :computer:**MINGW32** or :computer:**MINGW64** shells in order to run such tests.

In MSYS2, the `-git` packages normally conflict with the their corresponding stable packages (the ones without the `-git` suffix). This means that you'll often be asked be asked whether you want to replace the conflicting packages by "pacman -U". Say yes if you're asked.

To revert back to using a stable GTK3, run

    $ pacman -S mingw-w63-{i686,x86_64}-gtk3
