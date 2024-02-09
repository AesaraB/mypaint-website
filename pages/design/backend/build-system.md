+++
title = "Build System"
+++

MyPaint uses [PyPa][pypa]'s [``setuptools``][pypa-setuptools], and heavily utilises
its included distutils library. The entry point is ``setup.py``, which is configured
by ``setup.cfg``.<!--more-->

[pypa]: https://www.pypa.io/
[pypa-setuptools]: https://setuptools.pypa.io

# The build process
Following what happens when running the command ``python3 setup.py demo`` gives
insight into the building process; ``demo`` chains together each step from start
to finish.

1. Run ``python3 setup.py demo``, which calls
2. ``Demo(Command)``
    - Inherits distutils' [Command][stCommand]
    - Function/class calls in the proceeding lowest-level list items are done so
from this class.
3. Boilerplate stuff
4. ``Build(build)``
    - Inherits distutils' [build][stBuild], which itself inherits [Command][stCommand]
    1. ``BuildConfig(Command)``
    2. [``build_ext``][stBuildExt]
    3. [``build_py``][stBuildPy]
    4. [``build_clib``][stBuildCLib]
    5. [``build_scripts``][stBuildScripts]
    6. ``BuildTranslations(Command)``
5. ``Install(install)``
    - Inherits distutils' [install][stInstall], which itself inherits [Command][stCommand]
6. ``demo_cmd``
    - Defined as [``build_scripts.executable``][stBuildScripts]

[stBuild]: https://github.com/pypa/distutils/blob/ee021a1c58b43607ccc75447159bd90f502c6bea/distutils/command/build.py#L18
[stCommand]: https://github.com/pypa/distutils/blob/ee021a1c58b43607ccc75447159bd90f502c6bea/distutils/cmd.py#L17
[stBuildExt]: https://github.com/pypa/distutils/blob/main/distutils/command/build_ext.py
[stBuildPy]: https://github.com/pypa/distutils/blob/main/distutils/command/build_py.py
[stBuildCLib]: https://github.com/pypa/distutils/blob/main/distutils/command/build_clib.py
[stBuildScripts]: https://github.com/pypa/distutils/blob/main/distutils/command/build_scripts.py
[stInstall]: https://github.com/pypa/distutils/blob/ee021a1c58b43607ccc75447159bd90f502c6bea/distutils/command/install.py#L182
