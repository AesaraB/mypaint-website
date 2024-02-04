+++
title = "Build System"
+++

MyPaint uses [PyPa][pypa]'s [``setuptools``][pypa-setuptools], with some calls to
the distutils library. The entry point is ``src/setup.py``, which is configured
by ``src/setup.cfg``.


[pypa]: https://www.pypa.io/
[pypa-setuptools]: https://setuptools.pypa.io
