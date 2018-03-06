# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Added the Python module on OSC Owens as a Jupyter kernel.
- Added support to copy over tutorials/workshops to user's home directory.
- Added button to connection panel to directly access tutorial directory.

### Changed
- Updated date in `LICENSE.txt`.
- Renamed Account to Project.
- Changed the way we launch Jupyter notebook by now pointing to a custom
  location for the Jupyter notebook installation.
- Stopped using login shells to speed up process start times.
- Changed icon for "Launch Jupyter" button.

## [0.0.3] - 2017-12-21
### Fixed
- Disable randomized hash for string in Python 3.3+.
  [#4](https://github.com/OSC/bc_osc_jupyter_spark/issues/4)

## [0.0.2] - 2017-12-07
### Changed
- Open documentation links in new tabs.
  [#2](https://github.com/OSC/bc_osc_jupyter_spark/issues/2)

### Fixed
- Load proper environment in Spark workers.
  [#3](https://github.com/OSC/bc_osc_jupyter_spark/issues/3)

## 0.0.1 - 2017-11-22
### Added
- Initial release!

[Unreleased]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.0.3...HEAD
[0.0.3]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.0.1...v0.0.2
