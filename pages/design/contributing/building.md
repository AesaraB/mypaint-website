+++
title = "Building"
related = ["testing","/design/backend/build-process"]
+++

Building MyPaint from source gives testers and developers the most bleeding edge
feature set MyPaint has to offer. For most use cases, the end user will not need
this guide: MyPaint is packaged in Flathub, as an AppImage, and in many popular
distributions.<!--more-->

Have you already built MyPaint and want to go further? Try your hand at [testing]({{< relref "testing" >}}),
[debugging]({{< relref "debugging" >}}), or [packaging]({{< relref "packaging" >}}).

# Overview of this Page
There are four broad steps to building MyPaint from source:
1. **Prepare** the build environment.
2. **Clone** the relevant repositories. See also our [git workflow]({{< relref "git" >}}).
3. **Build** the program.
4. **Test** the results of the build.

# Windows Build Environment
If you're on Linux, [skip ahead to first party dependencies]({{< relref "#first-party-dependencies" >}})

The MyPaint project builds for Windows using [MSYS2][MSYS2], a development environment
based off of [Cygwin][cygwin] with a focus on building Windows-native software.

[MSYS2]: https://www.msys2.org/
[cygwin]: https://www.cygwin.com/

1. Follow MSYS2's [getting started guide][MSYS2]. The MSYS2 environment will either
be installed at `c:\msys32` or `c:\msys64`.
2. Install important development dependencies
```bash
$ pacman --sync --needed --noconfirm base-devel mingw-w64-{i686,x86_64}-toolchain
```

## Building GTK3 From Source
GTK3 (the GUI toolkit used by MyPaint) is packaged in the MSYS shell, but you may
want to install it from source. Unless specified otherwise, {{< colour "yellow" >}}
run these commands in the MSYS shell.{{< /colour >}}
1. Download and unpack GTK3:
    - The following code block unpacks GTK3 into `src/gtk3`
(`C:\msys32\usr\src\MINGW-packages\mingw-w64-gtk3-git\src\gtk3` in the Windows filesystem).
```bash
$ cd /usr/src
$ git clone https://github.com/Alexpux/MINGW-packages.git
$ cd MINGW-packages/mingw-w64-gtk3-git
$ makepkg-mingw --syncdeps --nobuild   # unpack but don't build
```
2. Build GTK3:
    - `makepkg-mingw` normally builds for both `MINGW32` and `MINGW64`. The ``MINGW_INSTALLS``
variable species which target to build for.
```bash
$ MINGW_INSTALLS=mingw64  makepkg-mingw --force --holdver --noextract
```
3. Install GTK3:
    - The results of the final build command are `.pkg.tar.xz` files in the `mingw-w64-gtk3-git`
folder.
```bash
$ ls *.pkg.tar.xz
$ pacman -U "mingw-w64-{{{ VARIOUS SPECIFICS HERE }}}.pkg.tar.xz"
```
4. Test the installation using e.g. ``gtk3-demo`` {{< colour "yellow" >}}from the
``MINGW32`` or ``MINGW64`` shell.{{< /colour >}}

# First Party Dependencies
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

## Using optimization flags
MyPaint and libmypaint benefit dramatically from autovectorization and other compiler
optimizations. You may want to set your CFLAGS before compiling:
```bash
export CFLAGS='-Ofast -ftree-vectorize -fopt-info-vec-optimized -march=native -mtune=native -funsafe-math-optimizations -funsafe-loop-optimizations'
```
To avoid potential glitches, make sure to compile both libmypaint and MyPaint using
the same optimization flags.

[LIBDEB]: https://github.com/mypaint/libmypaint.deb
[LIB]: https://github.com/mypaint/libmypaint/blob/master/README.md
[BRUSH]: https://github.com/mypaint/mypaint-brushes/blob/master/README.md
[PPA]: https://launchpad.net/~achadwick/+archive/ubuntu/mypaint-testing

# Third Party Dependencies
MyPaint depends on the following software:
- python (>= 2.7.4)
- gtk3 (>= 3.12)
- pygobject
- setuptools
- swig (>= 3)
- numpy
- librsvg2 (and its svg gdk-pixbuf loader)
- pycairo (>= 1.4)

## Debian-based
```bash
sudo apt-get install -y \
git swig gettext g++ gir1.2-gtk-3.0 libgtk-3-dev libpng-dev liblcms2-dev \
libjson-c-dev python-gi-dev librsvg2-common

sudo apt-get install -y \
python3-setuptools python3-dev python3-numpy python3-gi-cairo
```

If this doesn't work, try older names for the development packages, such
as `libjson0-dev`, or `libpng12-dev`.

## Red Hat-based
```bash
# yum install -y git swig gettext gcc-c++ libpng-devel lcms2-devel json-c-devel \
gtk3 gtk3-devel gobject-introspection pygobject3-devel \
librsvg2

# yum install -y python3-setuptools python3-devel python3-numpy
```

## OpenSUSE
```bash
# zypper install \
git swig gcc-c++ gobject-introspection gtk3-devel libpng16-devel liblcms2-devel \
libjson-c-devel librsvg-2-2 gettext-tools

# zypper install \
python311-setuptools python311-devel python311-numpy-devel python311-pycairo \
python311-gobject-devel \
```
## MSYS2 (Windows)
For 32-bit targets, replace ``x86_64`` with ``i686``.
```bash
pacman -S --noconfirm --needed \
git mingw-w64-x86_64-toolchain mingw-w64-x86_64-pkg-config \
mingw-w64-x86_64-python2-numpy mingw-w64-x86_64-gtk3 \
mingw-w64-x86_64-pygobject-devel mingw-w64-x86_64-lcms2 mingw-w64-x86_64-json-c \
mingw-w64-x86_64-librsvg mingw-w64-x86_64-hicolor-icon-theme \
mingw-w64-x86_64-python2-cairo mingw-w64-x86_64-python2-gobject \
mingw-w64-x86_64-mypaint-brushes2
```

## MacPorts (macOS)
```bash
export PKG_CONFIG_PATH=/opt/local/Library/Frameworks/Python.framework/Versions/3.11/lib/pkgconfig/
export CFLAGS="-I/opt/local/include"

sudo port install gtk3
sudo port install json-c
sudo port install lcms2
sudo port install hicolor-icon-theme
sudo port install librsvg

sudo port install py311-numpy
sudo port install py311-scipy
sudo port install py311-pyobjc-cocoa # optional, for i18n support
sudo port install py311-gobject3
```

# Clone MyPaint Repository
Start by cloning the source from git. This will create a new directory named `mypaint`.
Keep this folder around so you don't have to repeat this step.
```bash
cd path/to/where/I/develop
git clone https://github.com/mypaint/mypaint.git
```

# Build MyPaint
MyPaint is a Python project, and it uses a conventional `setup.py` script. However,
this isn't a typical Python module, so `pip install` doesn't work with it yet.

```bash
# Learn how to run setup.py
cd mypaint
python setup.py --help-commands   # list all commands
python setup.py --help build   # get options for "build"

# Some basic commands
python setup.py build
python setup.py clean --all
```

## Demo Mode
You can test MyPaint without installing it. The settings aren't saved between runs
when you do this.
```bash
python setup.py demo
```

## Managed Install/Uninstall
MyPaint has an additional custom install command, for people used to our old SCons
recipes. It isn't compatible with SCons installs, but it allows you to do an uninstall
later.

```bash
# For most Linux types
sudo python setup.py managed_install
sudo python setup.py managed_install --prefix=/usr

# You may need to make data files world-readable if you use "sudo"
sudo find /usr/local -ipath '*mypaint*' -exec chmod -c a+rX {} \;

# You can uninstall at any later time
sudo python setup.py managed_uninstall
sudo python setup.py managed_uninstall --prefix=/usr
```

Note that uninstallation doesn't get rid of all the folders that the managed install
created.

### Changing Install Directory
The default install location is `/usr/local`. If you don't want to install MyPaint
system-wide, or don't want to use sudo, follow these instructions to create a local
install.

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

# Run MyPaint
The start script `mypaint` will be placed in `$BASE_DIR/bin/`, so either add that
path to your PATH environment variable:
```bash
export PATH=$BASE_DIR/bin/:$PATH
mypaint
```

or create links to the script:
```bash
ln -s $BASE_DIR/bin/mypaint my-local-mypaint
./my-local-mypaint
```
