+++
title = "Building"
related = "/design/backend/build-process"
+++

Building MyPaint from source gives testers and developers the most bleeding edge
feature set MyPaint has to offer. For most use cases, the end user will not need
this guide: MyPaint is packaged in Flathub, as an AppImage, and in many popular
distributions.<!--more-->

# Overview of this Page
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
The MyPaint project builds for Windows using [MSYS2][MSYS2], a development environment
based off of [Cygwin][cygwin] and focused on creating native Windows software that
doesn't depend on special DLLs other than an MSVC runtime.

[MSYS2]: https://www.msys2.org/
[cygwin]: https://www.cygwin.com/

## What you need
* Permission to install software as Administrator.
* A rudimentary understanding of the [command line interface][wiki-cli]

[wiki-cli]: https://en.wikipedia.org/wiki/Command-line_interface

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

# Building MyPaint from Source

**Table of Contents**

* [Install libmypaint and mypaint-brushes](#install-libmypaint-and-mypaint-brushes)
* [Install third-party dependencies](#install-third-party-dependencies)
  - [Debian and derivatives](#debian-and-derivatives)
  - [Red Hat and derivatives](#red-hat-and-derivatives)
  - [OpenSUSE](#opensuse)
  - [Windows MSYS2](#windows-msys2)
  - [OSX MacPorts](#osx-macports)
 * [Fetch the source](#fetch-the-source)
 * [Migration from SCons](#migration-from-scons)
 * [Running the build script](#running-the-build-script)
   - [Demo mode](#demo-mode)
   - [Managed install and uninstall](#managed-install-and-uninstall)
   - [Installing locally](#building-and-installing-locally)
 * [Updating to the latest source](#updating-to-the-latest-source)

## Install libmypaint and mypaint-brushes

MyPaint depends on its brushstroke rendering library,
[**libmypaint**](https://github.com/mypaint/libmypaint).
<details>
  <summary>Which version of libmypaint should I build against?</summary>

When building the latest master, the rule of thumb is to build against
the latest master of libmypaint.

Stable releases should be built against a
compatible stable releases of libmypaint.

If you need to build a commit from the commit history, use `git log`
after having checked out the commit, and search for libmypaint to infer
which commit of libmypaint you should build against.
This is not always specified explicitly, but should always be inferable by
cross-referencing the commit log of libmypaint (by date or keyword search).
</details>

MyPaint also depends on the default brush collection
[**mypaint-brushes**](https://github.com/mypaint/mypaint-brushes).
These have to be built from scratch for most systems, see the links
below for details on how to do this.

* [Generic libmypaint build instructions][LIB]
* [Generic mypaint-brushes build instructions][BRUSH]
* [Debian-style package builder for libmypaint][LIBDEB]
* [MyPaint's Ubuntu PPA (__not currently updated__)][PPA]

Windows [MSYS2](http://msys2.org) users have pre-packaged options available
for libmypaint-1.3.0 (newer versions currently have to be built from source):

    pacman -S mingw-w64-i686-libmypaint
    pacman -S mingw-w64-x86_64-libmypaint

> ### Using optimization flags
> MyPaint and libmypaint benefit dramatically from autovectorization and other
> compiler optimizations. You may want to set your CFLAGS before compiling:
>
> `
export CFLAGS='-Ofast -ftree-vectorize -fopt-info-vec-optimized -march=native -mtune=native -funsafe-math-optimizations -funsafe-loop-optimizations'
`
>
> To avoid potential glitches, make sure to compile both libmypaint
> and MyPaint using the same optimization flags.

[LIBDEB]: https://github.com/mypaint/libmypaint.deb
[LIB]: https://github.com/mypaint/libmypaint/blob/master/README.md
[BRUSH]: https://github.com/mypaint/mypaint-brushes/blob/master/README.md
[PPA]: https://launchpad.net/~achadwick/+archive/ubuntu/mypaint-testing

## Install third-party dependencies

MyPaint has several third-party dependencies. They all need to be
installed before you can build it.

- setuptools
- pygobject
- gtk3 (>= 3.12)
- python (>= 2.7.4)
- swig (>= 3)
- numpy
- librsvg2 (and its svg gdk-pixbuf loader)
- pycairo (>= 1.4)

Some dependencies have specific versions for Python 2 and Python 3.
Install the ones for the Python version you will use to build MyPaint.
Apart from the use of disk space, there is usually no harm in installing
both sets.

### Debian and derivatives

For Debian, Mint, or Ubuntu, issue the following commands to install the
external dependencies.

    sudo apt-get install -y \
    git swig gettext g++ gir1.2-gtk-3.0 libgtk-3-dev \
    libpng-dev liblcms2-dev libjson-c-dev python-gi-dev \
    librsvg2-common

    # For python 2
    sudo apt-get install -y \
    python-setuptools python-dev python-numpy python-gi-cairo

    # For python 3
    sudo apt-get install -y \
    python3-setuptools python3-dev python3-numpy python3-gi-cairo

If this doesn't work, try older names for the development packages, such
as `libjson0-dev`, or `libpng12-dev`.

### Red Hat and derivatives

For yum-enabled systems, the following should work. This has been tested
on a minimal CentOS 7.3 install, and Fedora 30.

    sudo yum install -y git swig gettext gcc-c++ libpng-devel lcms2-devel \
    json-c-devel gtk3 gtk3-devel gobject-introspection pygobject3-devel \
    librsvg2

    # For python 2
    sudo yum install -y python-setuptools python-devel numpy

    # For python 3
    sudo yum install -y python3-setuptools python3-devel python3-numpy

### OpenSUSE

Issue  the following commands to install the external dependencies.

    sudo zypper install \
    git swig gcc-c++ gobject-introspection gtk3-devel \
    libpng16-devel liblcms2-devel libjson-c-devel \
    librsvg-2-2 gettext-tools

    # For python3
    sudo zypper install \
    python311-setuptools python311-devel python311-numpy-devel \
    python311-pycairo python311-gobject-devel \

### Windows MSYS2

Use the following commands when building in [MSYS2](http://msys2.org).
For 32-bit targets, use "i686" in place of the "x86_64".

    pacman -S --noconfirm --needed git base-devel
    pacman -S --noconfirm --needed  \
      mingw-w64-x86_64-toolchain     \
      mingw-w64-x86_64-pkg-config     \
      mingw-w64-x86_64-python2-numpy   \
      mingw-w64-x86_64-gtk3            \
      mingw-w64-x86_64-pygobject-devel \
      mingw-w64-x86_64-lcms2           \
      mingw-w64-x86_64-json-c           \
      mingw-w64-x86_64-librsvg           \
      mingw-w64-x86_64-hicolor-icon-theme \
      mingw-w64-x86_64-python2-cairo      \
      mingw-w64-x86_64-python2-gobject    \
      mingw-w64-x86_64-mypaint-brushes2

### OSX MacPorts

To use Frameworks Python (currently 2.7.8) while satisfying the other
dependencies from Macports, use:

    export PKG_CONFIG_PATH=/opt/local/Library/Frameworks/Python.framework/Versions/2.7/lib/pkgconfig/
    export CFLAGS="-I/opt/local/include"

    sudo port install gtk3
    sudo port install py27-numpy
    sudo port install py27-scipy
    sudo port install py27-pyobjc-cocoa    # optional, for i18n support
    sudo port install py27-gobject3
    sudo port install json-c
    sudo port install lcms2
    sudo port install hicolor-icon-theme
    sudo port install librsvg

These commands are poorly tested, and may be incomplete.
Please send feedback if they're not working for you.

## Fetch the source

Start by cloning the source from git. This will create a new directory
named `mypaint`. Keep this folder around so you don't have to repeat
this step.

    cd path/to/where/I/develop
    git clone https://github.com/mypaint/mypaint.git

## Running the build script

MyPaint is a Python project, and it uses a conventional `setup.py`
script. However, this isn't a typical Python module, so `pip install`
doesn't work with it yet.

    # Learn how to run setup.py
    cd mypaint
    python setup.py --help-commands   # list all commands
    python setup.py --help build   # get options for "build"

    # Some basic commands
    python setup.py build
	python setup.py clean --all

We've added a few custom commands too, for people used to the old SCons
way of working.

    # Test without a full installation
    python setup.py demo

    # Don't use raw "install" unless you know what you're doing
    python setup.py managed_install
    python setup.py managed_uninstall

See above if you want to install MyPaint or use `pip`. This isn't a
conventional installation scheme.

### Demo mode

You can test MyPaint without installing it. The settings aren't saved
between runs when you do this.

    python setup.py demo

### Unit tests

Please run the doctests before committing new code.

    sudo apt-get install python-nose
    python setup.py nosetests

We have some heavier conformance tests for the C++ parts too. These take
longer to run.

    python setup.py test

You should write doctests for important new Python code. Please consider
writing tests in the `tests` folder too, if you make any changes to the
C++ extension or `libmypaint`.

To cleanup between unit tests you may want to run:

    python setup.py clean --all
    rm -vf lib/*_wrap.c*

### Managed install and uninstall

MyPaint has an additional custom install command, for people used to our
old SCons recipes. It isn't compatible with SCons installs, but it
allows you to do an uninstall later.

    # For most Linux types
    sudo python setup.py managed_install
    sudo python setup.py managed_install --prefix=/usr

The default install location is `/usr/local`. If you want to install
without sudo, refer to [this section](#building-and-installing-locally)

    # You may need to make data files world-readable if you use "sudo"
    sudo find /usr/local -ipath '*mypaint*' -exec chmod -c a+rX {} \;

    # You can uninstall at any later time
    sudo python setup.py managed_uninstall
    sudo python setup.py managed_uninstall --prefix=/usr

Note that uninstallation doesn't get rid of all the folders that the
managed install created.

### Building and installing locally

If you don't want to install MyPaint system-wide, or don't want to use sudo,
follow these instructions to create a local install.

If you also need to install and configure any
[third-party dependencies](#install-third-party-dependencies)
without using sudo, refer to their respective documentation
for how to do so (for most dependencies, this is **_not recommended_**).

In this section, the shell variable `BASE_DIR` is used to refer
to the path of a directory which will be the base of your install.
You can set it like this (modify if you want to install somewhere else):
```
BASE_DIR=$HOME/.local/
```

If you have compatible versions of **libmypaint** and **mypaint-brushes**
installed and configured, all you have to do is run:
```
python setup.py managed_install --prefix=$BASE_DIR
```
and jump to the [run instructions](#running-the-local-installation).
If not, refer to the rest of this section.

#### Installing libmypaint & mypaint-brushes locally

You don't need to install libmypaint or mypaint-brushes **_locally_**
in order to install MyPaint locally, but if you want to, use the
`--prefix=` option to `configure` before running `make install`
for each of them.

E.g:
```
./configure --prefix=$BASE_DIR && make install
```

Refer to [libmypaint's build instructions][LIB]
for more details on building libmypaint.

#### Configuring, building and installing

If you want to use locally installed versions of **libmypaint**
and **mypaint-brushes** you will need to make sure that pkg-config
knows where to find them. To do this, set ```PKG_CONFIG_PATH``` before
building. Assuming both  **libmypaint** and **mypaint-brushes** were
installed configured with ```--prefix=$BASE_DIR``` you can do this by running:

```
export PKG_CONFIG_PATH=$BASE_DIR/lib/pkgconfig/:$BASE_DIR/share/pkgconfig/
```

> The two colon-separated paths refer to the locations of package configuration
> files for libmypaint and mypaint-brushes respectively. Replace the respective
> occurrence of $BASE_DIR if you installed either somewhere else.

In addition to knowing where libmypaint is installed _when building_,
MyPaint also needs to know its location _when running_. This _can_ be
done by setting the `LD_LIBRARY_PATH` environment variable to to the
location of libmypaint every time MyPaint is run, but this is _not_
recommended. The recommended way is to explicitly run the `build_ext`
command with the `--set-rpath` flag, prior to installation.

In short, you can build and install by running:

```
export PKG_CONFIG_PATH=$BASE_DIR/lib/pkgconfig/:$BASE_DIR/share/pkgconfig/
python setup.py build_ext --set-rpath managed_install --prefix=$BASE_DIR
```

> **Note**: remember to use the same prefix if uninstalling via `managed_uninstall`

If you have already run the build script without `--set-rpath`,
you can run the following to force a rebuild:
```
python setup.py build_ext --set-rpath --force
```

> **alternative to `--set-rpath`**
>
> If you want to build an older version of MyPaint that did not have this
> option, you can instead use the built-in `--rpath=` option to `build_ext`,
> setting the dependency path(s) manually.
>
> E.g: `python setup.py build_ext --rpath=$BASE_DIR/lib/`

#### Running the local installation

The start script `mypaint` will be placed in `$BASE_DIR/bin/`, so either add
that path to your PATH environment variable:

```
export PATH=$BASE_DIR/bin/:$PATH
mypaint
```

or create links to the script:

```
ln -s $BASE_DIR/bin/mypaint my-local-mypaint
./my-local-mypaint
```

## Updating to the latest source

Updating to the latest source at a later date is trivial, but doing this
can mean that you have to rebuild the compiled parts of the app:

    cd path/to/mypaint
    python setup.py clean --all
    git pull

## Custom installation directory layout

When running **`python setup.py install`** files will be installed in certain
directories on your system. By default, these directories are set in the
file **`setup.cfg`** in the **`[install]`** section. In those paths, **`$base`**
is a placeholder that is replaced by the value set with **`--prefix`** in the
install command (**`/usr`** by default).

The installation directories can be overridden for each type by providing a flag
to the **`install`** command equivalent to the name of one of the `install-xyz`
variables in **`setup.cfg`**. For example:

```
python setup.py install --prefix=/usr/local --install-purelib='$base/lib64/mypaint'
```
