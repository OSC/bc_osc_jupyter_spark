# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
## [0.7.0] - 2021-12-15

### Changed

- Use OnDemand's dynamic javascript capability in [20](https://github.com/OSC/bc_osc_jupyter_spark/pull/20)

## [0.6.0] - 2021-08-13

### Changed

- [15](https://github.com/OSC/bc_osc_jupyter_spark/pull/15) changed the versions of supported
  jupyter versions and dropped support for 0.35 for security updates.

## [0.5.1] - 2021-02-09
### Changed
- Use a different version of py4j based off of the spark version in
  [15](https://github.com/OSC/bc_osc_jupyter_spark/pull/15).

## [0.5.0] - 2021-02-09
### Added
- added choice for spark version in [14](https://github.com/OSC/bc_osc_jupyter_spark/pull/14)
- added a toggle for jupyterlab and jupyter in [13](https://github.com/OSC/bc_osc_jupyter_spark/pull/13)

## [0.4.0] - 2021-01-20
### Changed
- in [12](https://github.com/OSC/bc_osc_jupyter_spark/pull/12):
  - removed owens-slurm cluster and torque related configs
  - change account field to a select widget with only valid groups as options

## [0.3.1] - 2020-11-23
### Changed
- Spark starts in the before.sh now becuase exported functions like clean_up
  and find_port don't seem to be found. This PR also enabled Slurm capability
  to start spark workers in srun [11](https://github.com/OSC/bc_osc_jupyter_spark/pull/11)

## [0.3.0] - 2020-11-24
### Added
- Added owens-slurm cluster to begin migrating owens to Slurm in
  [10](https://github.com/OSC/bc_osc_jupyter_spark/pull/10).

### Changed
- Updated .gitlab-ci.yml for stability in cloning and to release to the
  ci repo as well.

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

[Unreleased]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.5.1...HEAD
[0.5.1]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.3.1...v0.4.0
[0.3.1]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.2.3...v0.3.0
[0.2.3]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.2.2...v0.2.3
[0.2.2]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.0.3...v0.1.0
[0.0.3]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/OSC/bc_osc_jupyter_spark/compare/v0.0.1...v0.0.2
