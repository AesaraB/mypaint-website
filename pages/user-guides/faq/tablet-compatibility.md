+++
title = "Which drawing tablets are compatible?"
summary = "A table of support for drawing tablets"
+++
In general MyPaint should Just Work with all standard tablets out there.

However, sometimes things don't work as expected.
The problem can exist in several places:
the input driver,
the input system,
the graphical toolkit we use (GTK+),
or in MyPaint itself.
If you think MyPaint is to blame, please file a bug report.

If you know how to work around a specific problem, please add that information here. Link to a new page if your workaroud is lengthy!


|Manuf.|Model|OS |MyPaint version|Comments|
|------|-----|---|---------------|--------|
|Genius|Mousepen 8x6|Windows XP|?|Drivers working with MyPaint. Notes: This tablet is a bit jerky, less smooth than others. Use higher zoom for details.
| Genius | Mousepen 8x6|Windows Vista, Windows 7|8.2| Vista needs a hack in the installation to work fine with MyPaint 8.2: The installation process is [described in the forums](http://forum.intilinux.com/mypaint-help-and-tips/drawing-confined-to-left-side-of-screen-with-genius-mousepen/msg6302/#msg6302). Its the same for windows 7. Notes: This tablet is a bit jerky, less smooth than others. Use higher zoom for details.
|Genius| 4"x5.5" G-Pen 4500| Windows Vista|?| Working good. Notes: this tablet is smoother, has more "precise" feeling when using than mousepen 8x6. Can make details better.
|Genius|G-Pen M712X|Linux Debian Squeeze|?| Working good. Notes: The round knobs at the top do not do anything, but they do send some keycodes sometimes, so it might be possible to implement some bindings. No actions can be bound to the action key areas. At any rate, the tablet itself works fine! On Debian Squeeze, it is required to (i) upgrade to kernel 2.6.38 or newer, get it from squeeze-backports (ii) possibly upgrade xorg from squeeze-backports too, not sure (iii) modify /usr/share/X11/xorg.conf.d/50-wacom.conf to bind the wacom driver to WPEN tablets. On Debian Wheezy and newer, neither of this should be required.|
| Hanvon |Art Master 0806 | Linux 2.6.38|0.9|Working without any issues. You have to compile and load the driver yourself [details...](http://claw.triple6.org/linux/hanvon-art-master/)|
| Hanvon | Art Master 1107 | Linux 2.6.38 | 0.9 | Working without any issues. You have to compile and load the driver yourself and add a patch to it [details...](http://claw.triple6.org/linux/hanvon-art-master/) |
| Hanvon | Art Master 1209 | Linux 2.6.38 | 0.9 | Working without any issues. You have to compile and load the driver yourself and add a patch to it [details...](http://claw.triple6.org/linux/hanvon-art-master/)
| Hanvon | Rollick 0604 | Linux 2.6.38 | 0.9 | Working without any issues. You have to compile and load the driver yourself [details...](http://claw.triple6.org/linux/hanvon-art-master/)
| Hanvon | GraphicPal 0806 | Windows XP SP3 | ??? | Brush strokes are offset from the cursor when using the "Portion of Screen" option. Possibly related to GTK, needs to be tested with a more recent build. If everything in the driver is left to default settings, it works fine. |
| Trust | TB-7300 | Ubuntu 9.10 64bit | ? | Works out of the box. [Notes](http://forum.intilinux.com/mypaint-help-and-tips/hardware-compatibility-in-the-wiki/msg6528/#msg6528)
| xp-pen | xp-5550a | Windows 7 (32-bit) | 1.0.0 | OK
| Wacom | Intuos2 | Mac Snow Leopard 10.6.6 (Mac Port 1.9.1 Xquartz 2.6.0) | 0.9.0 | OK
| Wacom | Intuos3 | Ubuntu 10.04 (32 or 64 bit) | ? | OK
| Wacom | Intuos3 | Debian Lenny and newer (32 bit) | ? | OK
| Wacom | Intuos4 Medium | Windows 7 64 bit | 0.9.0 | OK
| Wacom | Intuos4 Medium | Linux Mint 10 (Derived from Ubuntu) 64 bit | 0.9.0 | OK. Small issues in Linux, which are the fault of the Linux Wacom drivers, not MyPaint.
| Wacom | Intuos4 Wireless | windows 7 64 bit | ? | OK
| Wacom | Intuos5 | Debian testing/unstable 2015-03-09 | 1.1.1-alpha.20150305+git.ba0649b | OK
| Wacom | Bamboo MTE-450A | Ubuntu 10.04 (64 bit) | 0.8.2+git 2010-09-23 | OK. Use the [wacom-plus PPA](https://launchpad.net/~doctormo/+archive/wacom-plus) packages to get the touchring working.
| Wacom | Bamboo Fun | Ubuntu 10.04 | ? | OK
| Wacom | Bamboo Fun wide A6 | Windows 7 (32-bit) | 0.9.1 | OK. Using the latest driver [Multilingual cons524-6_int.exe] (http://www.wacom.eu/index2.asp?pid=29&lang=en)
| Wacom | Bamboo Fun Pen & Touch Medium | Windows 7 (64-bit) | 1.0.0 | OK. Not at first, but after restarting MyPaint making sure I inserted my tablet *before* starting the program it worked great.
| Wacom | Bamboo Pen | Windows 7 (64-bit) | 0.9.0+ | OK
| Wacom | Graphire<sub>4</sub> | Mint 9 (64-bit; derived from Ubuntu 10.04) | ? | OK
| Wacom | Graphire<sub>4</sub> | Windows 7 (64-bit) | 1.0.0 | OK. Needed driver 5.25-5a and reboot (well that's what i did but not sure if necessary), but very importantly - connect the tablet '''after''' you start MyPaint. Also, if Gimp 2.8 runs simultaneously with Mypaint, pressure does not work. Strange is Windows identifies tablet as Bamboo O_o
| Wacom | Volito FT-0405-U (A6) | Mint Debian Edition (32-bit; derived from Debian Testing) | ? | OK
| Wacom | PenPartner (A6) | Windows XP (32-bit) | ? | OK
| Waltop | Sirius BT-1006 | Windows 7 64-bit | 0.9.0 | OK
| Waltop | Sirius BT-1006 | Ubuntu 11.04 64-bit | 0.9.0 | OK except for some issues with tilt sensitivity in Ubuntu.

-----------------

## Tablet PCs

The table below lists the different Tablet PC models on which MyPaint has been tested and the result.

| Manuf. | Model | OS | RAM | MyPaint version | Result |Comments |
|--------|-------|----|-----|-----------------|--------|----------------|
| HP | TC4400 | Windows XP SP3 32bit | 1GB | 0.1.0 (?) | OK | (tumagonx Win32 build) Everything works, even the Eraser tip. Using the latest "ISD Tablet Driver" from wacom.com |
| HP | TC4400 | Windows XP Tablet Edition (SP1 or 2005) | 2G | 0.9.0 | Bad |MyPaint won't start (error message: bad config) | 
| HP | TC4400 | Windows7 | 2G | 0.9.0 | Partial |MyPaint working with no pressure (input device detected = Core Pointer), pressure OK for other apps |
| Lenovo | X61 | ? | ? | ? | OK |
| Lenovo | X201 Tablet | Fedora 15 | ? | 0.9.1 | OK | Pressure & eraser work well
| Lenovo | X230 Tablet | Ubuntu 12.10 | ? | 1.1.0 | OK | Pressure, eraser, touch, everything works well
| MotionComputing | LE1600 | XP Tablet Version SP3 | 1.5G | ? | OK | Using Fujitsu Pen Driver (tested Wacom driver causes problems)
| Asus | Eee PC T101MT | Ubuntu 11.04 | 2 G | 0.9.0 | Partial | MyPaint working with no pressure (input device detected = Core Pointer). Pressure sensitivity must be disabled (at least) for the 0x0486:0x0186 AsusTek, Inc. MultiTouch(TTI) touch screen model [details...](https://bugs.launchpad.net/bugs/774891)
| Wacom | Cintiq 24HD | Windows7 64bit | 4GB | 1.0.0 | Partial | MyPaint working with no pressure, pressure OK for other apps
| Wacom | Cintiq 12WX | Windows7 64bit | 8G | 1.0.0 | OK | MyPaint working with pressure using driver version 6.3.1w3
| Fujitsu | Stylistic ST5112 | Windows 7 32 bit | 4 GB | 1.0.0 | OK | MyPaint working with pressure. Using Fujitsu Pen Driver as ISD Tablet driver from Wacom causes problems. |

