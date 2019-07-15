# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
## [0.2.3] - 2019-09-15
### Changed
- Updated where xalt is loaded

## [0.2.2] - 2019-07-09
### Added
- Added xalt

## [0.2.1] - 2018-04-23
### Changed
- Increased timeout from 60 to 120 seconds.
- Added timestamps in output to make debugging easier.

## [0.2.0] - 2018-03-28
### Changed
- Changed system Python module from `python/3.5` to `python/3.6`.
- Use custom Jupyter Notebook module provided by SciApps.

## [0.1.0] - 2018-03-06
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

[Unreleased]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.2.3...HEAD
[0.2.3]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.2.2...v0.2.3
[0.2.2]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.0.3...v0.1.0
[0.0.3]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.0.1...v0.0.2
