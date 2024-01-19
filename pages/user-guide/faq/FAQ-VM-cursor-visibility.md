*Part of the MyPaint [[FAQ]].*

******


### How can I make a cursor icon visible when using a tablet in a VM?

In Windows, try turning on "Display pointer trails" in the Mouse
settings, but turn the setting down to the shortest trail possible:

[[FAQ-win7-vm-pointer-trails.png]]

******

* **WARNING:** the answer below only applies to
  MyPaint version 1.1.0 and before,
  i.e. only with PyGTK versions of MyPaint.

**The problem**: In my virtualbox (VM) with SuSE 12.2 and my Aiptek
HyperPen 12000U tablet there is no cursor visible when using mypaint.
With gimp everything is ok, but gimp is no replacement for mypaint.

The reason: When attaching the tablet device to my VM, it is detected
but attached to the Virtual core pointer. I think in that case the
application has to draw the cursor icons. The command xinput list will
show the xinput devices:

    aglef@linux-qlug:~> xinput list
    ⎡ Virtual core pointer                          id=2    [master pointer  (3)]
    ⎜   ↳ Virtual core XTEST pointer                id=4    [slave  pointer  (2)]
    ⎜   ↳ VirtualBox mouse integration              id=8    [slave  pointer  (2)]
    ⎜   ↳ ImExPS/2 Generic Explorer Mouse           id=10   [slave  pointer  (2)]
    ⎜   ↳ **Aiptek**                                    id=11   [slave  pointer  (2)]
    ⎣ Virtual core keyboard                         id=3    [master keyboard (2)]
        ↳ Virtual core XTEST keyboard               id=5    [slave  keyboard (3)]
        ↳ Power Button                              id=6    [slave  keyboard (3)]
        ↳ Sleep Button                              id=7    [slave  keyboard (3)]
        ↳ AT Translated Set 2 keyboard              id=9    [slave  keyboard (3)]

**The problem solution:** We have to create a new master input device
and move the Aiptek tablet to the new master input. Each master input
device has it's own cursor. The new master need name (not an id). I use
my tablet name "Aiptek Hyperpen".

    aglef@linux-qlug:~> xinput --create-master "Aiptek Hyperpen"

Lets test if we got an new device.


    aglef@linux-qlug:~> xinput list
    ⎡ Virtual core pointer                          id=2    [master pointer  (3)]
    ⎜   ↳ Virtual core XTEST pointer                id=4    [slave  pointer  (2)]
    ⎜   ↳ VirtualBox mouse integration              id=8    [slave  pointer  (2)]
    ⎜   ↳ ImExPS/2 Generic Explorer Mouse           id=10   [slave  pointer  (2)]
    ⎜   ↳ **Aiptek**                                    id=11   [slave  pointer  (2)]
    ⎣ Virtual core keyboard                         id=3    [master keyboard (2)]
        ↳ Virtual core XTEST keyboard               id=5    [slave  keyboard (3)]
        ↳ Power Button                              id=6    [slave  keyboard (3)]
        ↳ Sleep Button                              id=7    [slave  keyboard (3)]
        ↳ AT Translated Set 2 keyboard              id=9    [slave  keyboard (3)]
    ⎡ **Aiptek Hyperpen** pointer                       id=12   [master pointer  (13)]
    ⎜   ↳ Aiptek Hyperpen XTEST pointer             id=14   [slave  pointer  (12)]
    ⎣ Aiptek Hyperpen keyboard                      id=13   [master keyboard (12)]
        ↳ Aiptek Hyperpen XTEST keyboard            id=15   [slave  keyboard (13)]

Ok, thats fine. Now we can attach the tablet to our new master. But
attention: The new master will be identified by the full name, with the
pointer extention.

    aglef@linux-qlug:~> xinput --reattach Aiptek "Aiptek Hyperpen pointer"
    aglef@linux-qlug:~> xinput list
    ⎡ Virtual core pointer                          id=2    [master pointer  (3)]
    ⎜   ↳ Virtual core XTEST pointer                id=4    [slave  pointer  (2)]
    ⎜   ↳ VirtualBox mouse integration              id=8    [slave  pointer  (2)]
    ⎜   ↳ ImExPS/2 Generic Explorer Mouse           id=10   [slave  pointer  (2)]
    ⎣ Virtual core keyboard                         id=3    [master keyboard (2)]
        ↳ Virtual core XTEST keyboard               id=5    [slave  keyboard (3)]
        ↳ Power Button                              id=6    [slave  keyboard (3)]
        ↳ Sleep Button                              id=7    [slave  keyboard (3)]
        ↳ AT Translated Set 2 keyboard              id=9    [slave  keyboard (3)]
    ⎡ **Aiptek Hyperpen pointer**                       id=12   [master pointer  (13)]
    ⎜   ↳ **Aiptek**                                    id=11   [slave  pointer  (12)]
    ⎜   ↳ Aiptek Hyperpen XTEST pointer             id=14   [slave  pointer  (12)]
    ⎣ Aiptek Hyperpen keyboard                      id=13   [master keyboard (12)]
        ↳ Aiptek Hyperpen XTEST keyboard            id=15   [slave  keyboard (13)]

Now we have a cursor in mypaint, but we can't draw because the axis
mapping was wrong. The fourth axis with the pressure information was
mapped as tilt information. We need to change this in the Help/Debug/GTK
Input Device dialog.

Please select 4 at pressure for the tablet device Aiptek (not Aiptek
Hyperpen XTEST pointer) and close the dialog with the window decoration
x in the upper right corner (or something else, depending on you window
manager).

[[FAQ-v1.1.0-GTK-Input-Device-dialog.jpg]]

