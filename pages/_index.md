+++
title = "MyPaint: Work in Flow"
date = 2024-01-22T06:29:17+10:30
summary = "Welcome to the MyPaint proeject's website!"
+++
MyPaint is a nimble, distraction-free, and easy tool for painting and sketching
from scratch. It has a versatile and configurable brush engine, and features
many useful tools to improve productivity.

At the heart of MyPaint is a beautifully simple painting experience, yet enough
extensibility to keep more advanced users satisfied.

# Features
- Graphic tablet support
- MyPaint's powerful in-house brush engine
	- The standard brushes can emulate traditional media like charcoal, 
pencils, ink, or paint
	- Easily create expressive, artful new brushes that don’t respond like
anything conventional
- Best in class drawing experience
	- Focus on the art you make, not the tool you make it with.
	- Fullscreen mode declutters the interface, leaving you with just your 
brush and your creativity. You can still reveal the tools you want, 
when you need them.


# Downloads
Latest stable version: v2.0.1

Release types:
- Stable: extensively tested by the community prior to release
- Prerelease: Alphas and betas, these contain new features and improvements, but
haven't been tested as thoroughly
- Rolling: Bleeding edge version of MyPaint with the latest code. No promises
of stability.

## Support
Please contact us in the issue tracker if you want to do something
for other distribution channels.

We are always open for more people willing to maintain buildsfor Mac 
OS X, Windows, or Linux distributions.If you want to help us port 
MyPaint to your OS or Linux Distribution,please visit our community 
forums under the [Porting MyPaint Category][source.porting], and ask away 
there.You can also ask questions there if you are having trouble 
building MyPaint.

## Stable & Prerelease
- Linux
	- [AppImage][downloads.releases]
	- [Flatpak via Flathub][linux.flatpak] (Unofficial)
- Windows
	- [GitHub][downloads.releases]
	- [Chocolatey][choco.prerel] (Unofficial)
- MacOS
	- [MacPorts][mac.ports]

## Rolling
Releases which build directly from Master. Beware may be unstable.
- Linux
	- [AppImage][linux.rolling]
	- [Travis-CI][source.travis]
- Windows
	- [AppVeyor][source.appveyor]

#### Rolling Release
*Just select whether build(i686/MINGW32=32bit build or x86_64/MINGW64=64bit build) 
you are using and navigate to the Artifacts tab to download the exe file. 
Be aware, the “latest build” can likely be a very very beta “Pull Request” 
with some random feature. Make sure it doesn’t say “Pull Request”. If it 
does, click on “build history” and select one that does NOT say “Pull 
Request” on it.*

### Brush Packages
We host a list of brushpacks available for download via [MyPaint's Brush Packages wiki page][brush.wiki].
You are welcome to post links to your own brushpacks on our Wiki. Files are typically
not hosted on the wiki, just linked, so you can use any license you want. However
the preview thumbnails should be public domain. If you release brushpacks which
meet our [Licensing Policy][brush.policy], they could be considered for inclusion
in the next release.

[downloads.releases]: https://github.com/mypaint/mypaint/releases

[choco.prerel]: https://chocolatey.org/packages/mypaint/
[choco.stable]: https://chocolatey.org/packages/mypaint/1.2.1

[linux.flatpak]: https://flathub.org/repo/appstream/org.mypaint.MyPaint.flatpakref
[linux.rolling]: https://github.com/mypaint/mypaint-appimage/releases
[linux.build]: https://github.com/mypaint/mypaint/blob/master/README_LINUX.md

[mac.ports]: https://www.macports.org/ports.php?by=name&substr=MyPaint

[windows.tumagonx]: http://www.opensourcepack.blogspot.fr/2013/01/mypaint-and-pygi.html

[source.github]: https://github.com/mypaint
[source.build]: https://github.com/mypaint/mypaint/blob/master/README.md
[source.porting]: http://community.mypaint.org/c/development/porting
[source.travis]: https://travis-ci.org/mypaint
[source.appveyor]: https://ci.appveyor.com/project/achadwick/mypaint

[brush.wiki]: https://github.com/mypaint/mypaint/wiki/Brush-Packages
[brush.policy]: https://github.com/mypaint/mypaint/wiki/Licensing-policy
