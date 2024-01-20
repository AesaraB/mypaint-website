**Q:** How do I license my artwork or code for inclusion in MyPaint?

**A:** If you want your contribution to go into the official MyPaint distribution, you need to apply a license to it before we can distribute it. We use a mix of the public domain, Creative Commons licenses, and Free/Open Source Software licenses:

* **Background textures and palette files**: these need to be **public domain**
* **Brush packs**: **public domain**.
  - Alternatively, use **CC BY (or CC BY-SA) 4.0** for the visible parts, _but keep the raw brush settings **public domain**_.
* **Supplemental artwork or promotional material**: **CC BY (or CC BY-SA) 4.0**
* **Program code**, icons, and artwork for display within the program: use **GNU GPLv2+** for new code; retain existing licenses when modifying stuff

The reason for this is that we try to ensure that elements which are highly likely to be reused by artists in the creation of new works, for example background texture images or raw brush settings, are made as free as possible so that artists who use them don't have to worry about copyright infringement.

### Background textures and palette files

Background texture images and palette files for inclusion in the main MyPaint distribution should be Public Domain so that artists can reuse them as freely as possible. The Creative Commons "CC0" dedication is a well-known way of advertising that. Here's what to write in your README:

> To the extent possible under law, **\<\<YOUR NAME\>\>** has waived all copyright, and related or neighboring rights to **\<\<NAME(S) OF IMAGE(S)\>\>**. See <http://creativecommons.org/publicdomain/zero/1.0/> for details.

Though words to that effect can be embedded in the images' metadata or comments fields instead. GIMP palette files have a description field which can be used for the same purpose. Background images and palette files you contribute may end up embedded in works that other artists wish to publish under other licenses, so this waiver is needed.

### Brush packs

Ideally, use Public Domain. Alternatively, use Creative Commons "CC-BY" or "CC-BY-SA" version 4.0, but release the raw brush settings into the Public Domain.

Long form: brush packs for inclusion into the main MyPaint distribution should be placed into the public domain just like background images, but they do not have to be. Instead you can use the Creative Commons "Attribution" or "Attribution-ShareAlike" licenses, both of which require redistributors to give you credit. Note that if you choose one of these fancier licenses, the pack's internal brush settings must still be Public Domain. Here's an example of how to say that in your brush pack's README: 

> Copyright **\<\<YEAR\>\>** **\<\<YOUR NAME\>\>**
>
> Except where otherwise noted, this work is licensed under a Creative Commons Attribution 4.0 International License. See <http://creativecommons.org/licenses/by/4.0/> for details.
>
> As an exception to this and to the extent possible under law, \<\<YOUR NAME\>\> has waived all copyright and related or neighboring rights to the raw brush settings (those files ending with ".myb"). See <http://creativecommons.org/publicdomain/zero/1.0/> for details.

We need the exception for the raw brush settings because those bits are copied around very enthusiastically by the MyPaint program — including into files others might want to distribute with their own license. Making the settings Public Domain allows them to do that. Of course, you can still claim copyright on the pack as a “work as a whole”, including all the preview packages and supplemental cover-type artwork in it, but excluding the raw settings.

If you want to use a Creative Commons license, it must be version 4.0, and it cannot be a NonCommercial or a NoDerivatives one.

If you choose Public Domain for the entire pack, you'll still be credited by us in the program About box unless you ask not to be named. ;) 

### Supplemental artwork or promotional material

If you want your work to be used for promotional purposes (e.g. on our website at [mypaint.org](http://mypaint.org), on third party sites, or within the MyPaint program), please use the "CC-BY 4.0" or the "CC-BY-SA 4.0" licenses. For example:

> Copyright **\<\<YEAR\>\>** **\<\<YOUR NAME\>\>**
>
> This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this licence, visit <http://creativecommons.org/licenses/by/4.0/> or send a letter to Creative Commons, 171 Second Street, Suite 300, San Francisco, California 94105, USA.

You can express this in any form suggested by the Creative Commons guys' license chooser: <http://creativecommons.org/choose/>. If you posted your work on our [Community Forums](http://community.mypaint.org) or in Github issues, you'll need to provide this additional license on the post in a human-readable form and allow us to redistribute under just that license. Embedded metadata would be ideal for other situations. Creative Commons licenses on components of the MyPaint distribution must be version 4.0, and they cannot be a NonCommercial or a NoDerivatives license.

We suggest marking images intended for use as promotional screenshots with the text “© \<\<YEAR\>\> \<\<YOUR NAME\>>, CC BY-SA 4.0”, in a readable but unobtrusive fashion.

### Program code

All new program code and supplemental data files should be licensed under the GNU GPLv2.0, with the "or (at your option) any later version" clause. They *must* be licensed in a way that is compatible with this. This includes program icons and artwork for display within the program. Retain the existing license boilerplates when working on existing code.

Please put a boilerplate header on each new program file in the format recommended by the license itself. It's fine for individual programmers to claim copyright over new files which originate with them.
