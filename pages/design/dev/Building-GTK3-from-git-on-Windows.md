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