### Existing packaging projects

* MyPaint has a canonical source tarball available for each release we make. You can find them on our github [releases page](https://github.com/mypaint/mypaint/releases).
* You'll also find Windows installer binaries there, built by [@achadwick](https://github.com/achadwick).
* Ubuntu Linux testing PPA: <https://launchpad.net/~achadwick/+archive/ubuntu/mypaint-testing>, built by [@achadwick](https://github.com/achadwick)
* MyPaint stable binaries are distributed with many Linux distributions in binary form.
* Mac OS X Homebrew: <https://github.com/mypaint/mypaint/issues/346>
* Mac OS X Macports: <https://www.macports.org/ports.php?by=name&substr=mypaint>
* Windows MSYS2 (stable) <https://github.com/Alexpux/MINGW-packages/tree/master/mingw-w64-mypaint>
* Windows MSYS2 (git) <https://github.com/Alexpux/MINGW-packages/tree/master/mingw-w64-mypaint-git>

### New packaging projects

Firstly, please feel free to link to your project above.

I'm happy to accept packaging/build scripts for well-known, and well-defined platform distributions like Homebrew/Fink/MacPorts on Mac, MSYS2/MSYS/Cygwin on Windows, or Fedora/Arch/BigDistrib on Linux. basically, if it has a package manager and you can write a build script or control file for it, I'm interested!

Normally, if the build script can slot into the main MyPaint project without upsetting third-party downstream builds, I'm happy to have the code reside in the [mypaint/mypaint](https://github.com/mypaint/debian) repository under a subdirectory which also contains instructions for the build. If it has more complex requirements (like our [mypaint/debian](https://github.com/mypaint/debian) one for the PPA, where the folder name would clash with official Debian builds), a separate module may be more useful.
