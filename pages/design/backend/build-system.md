+++
title = "Build System"
+++

MyPaint uses [PyPa][pypa]'s [``setuptools``][pypa-setuptools], with some calls to
the distutils library. The entry point is ``src/setup.py``, which is configured
by ``src/setup.cfg``.

[pypa]: https://www.pypa.io/
[pypa-setuptools]: https://setuptools.pypa.io

# The build process
``python3 setup.py demo`` is a nice place to start, as it chains together each step
in the build process from start to finish.

1. ``python3 setup.py demo``
2. ``Demo(Command)``
    - Inherits distutils' [Command][stCommand]
3. Boilerplate stuff
4. ``Build(build)``
    - Inherits distutils' [build][stBuild], which itself inherits [Command][stCommand]
    1. ``BuildConfig(Command)``
    2. ``build_ext`` from [setuptools][stBuildExt]
    3.  [Other subcommands][stOtherSubCmd] from distutils
    4. ``BuildTranslations(Command)``
5. ``Install()``
    - Inherits distutils' [install][stInstall], which itself inherits [Command][stCommand]
6. ``demo_cmd``

[stBuild]: https://github.com/pypa/distutils/blob/ee021a1c58b43607ccc75447159bd90f502c6bea/distutils/command/build.py#L18
[stCommand]: https://github.com/pypa/distutils/blob/ee021a1c58b43607ccc75447159bd90f502c6bea/distutils/cmd.py#L17
[stBuildExt]: https://github.com/pypa/distutils/blob/main/distutils/command/build_ext.py
[stOtherSubCmd]: https://github.com/pypa/distutils/blob/ee021a1c58b43607ccc75447159bd90f502c6bea/distutils/command/build.py#L147
[stInstall]: https://github.com/pypa/distutils/blob/ee021a1c58b43607ccc75447159bd90f502c6bea/distutils/command/install.py#L182
