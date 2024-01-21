*Part of the MyPaint [[FAQ]].*

******

### Using the touchring to change radius doesn't work on my Intuos, and the cursor ring size flickers!

(Pasted from [#263](https://github.com/mypaint/mypaint/issues/263) -
this workaround applies to recent 1.1.1-alpha development builds)

On some tablets the "pad" devices look like pens to the software,
meaning that when you activate the touch-ring MyPaint treats it like a
device switch and tweaks the cursor. The workaround in recent builds
like yours is to set the "pad" device presented by your tablet to
"Ignore" or "Non-painting Tasks" only in the Preferences dialog, on the
Devices tab:

![Example Preferences dialog showing the setting in question](https://cloud.githubusercontent.com/assets/61299/6765402/8648500e-cfd6-11e4-9508-52dd69b5c18b.png)

Highlight the row first, then click in the row's "Allow..." column to
change the value there.

Doing this makes MyPaint skip over the hardware device when it would
otherwise notice a device change. By the way, it's doing other things
besides flickering the cursor a bit - essentially the size changes you
wanted are being assigned to the wrong hardware device at the moment!
But the workaround is to make it something other than an "All tasks"
device.

