# Batch Connect - OSC Jupyter Notebook + Spark

## Overview

![GitHub Release](https://img.shields.io/github/release/osc/bc_osc_jupyter_spark.svg)
[![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

An [Open OnDemand](https://openondemand.org/) Batch Connect app that launches a [Jupyter]{https://jupyter.org/) Notebook (or Lab) server and an [Apache Spark](https://spark.apache.org) cluster as an interactive session on OSC HPC clusters. The app creates a PySpark kernel so users can run Spark jobs directly from Jupyter notebooks. Jupyter provides free, open-standard web services for interactive computing across multiple programming languages. Spark is an open source cluster-computing framework.

This app uses the Batch Connect `basic` template with Slurm and supports
clusters: Ascend, Pitzer, and Cardinal.

- **Upstream project:** [Jupyter](https://jupyter.org/), [Apache Spark](https://spark.apache.org/)
- **Batch Connect template:** `basic`
- **Scheduler:** Slurm

## Screenshots

![Jupyter running in browser](docs/bc_osc_jupyter_spark_jupyter.png)
![Spark master running in browser](docs/bc_osc_jupyter_spark_spark.png)

## Features
- Launches either Jupyter Lab or Jupyter Notebook (user-selectable checkbox) server with a built-in PySpark kernel connected to a Spark cluster
- Multi-cluster support (Ascend, Pitzer, Cardinal)
- Multi-node Spark clusters with configurable worker count per node
- Hugemem node type support for memory-intensive workloads
- Custom Spark configuration file support (override defaults)
- Supplementary environment variables file support
- Option to restruct driver process to master node only (for large `.collect`/`.take` operations)
- Optional access to OSC tutorial/workshop notebooks
- Configurable root directory for the Jupyter session
- Module-based software loading via Lmod`
- Configurable cores, wall time, and node type via the launch form

## Requirements

### Compute Node Software
This Batch Connect app requires the following software be installed on the
**compute nodes** that the batch job is intended to run on (**NOT** the
OnDemand node):

- [Lmod] 6.0.1+ or any other `module purge` and `module load <modules>` based
  CLI used to load appropriate environments within the batch job before
  launching the Jupyter Notebook server.
- [Jupyter Notebook] 4.2.3+ (earlier versions are untested but may work for
  you)
- [OpenSSL] 1.0.1+ (used to hash the Jupyter Notebook server password)
- [Apache Spark] 2.1.0+

[Apache Spark]: https://spark.apache.org/
[Jupyter Notebook]: https://jupyter.org/
[OpenSSL]: https://www.openssl.org/
[Lmod]: https://www.tacc.utexas.edu/research-development/tacc-projects/lmod

### Open OnDemand

- Tested to work with the latest version of Open OnDemand
- Slurm Scheduler

## App Installation

### 1. Clone the repository

```bash
cd /var/www/ood/apps/sys
git clone https://github.com/OSC/bc_osc_jupyter_spark.git
cd bc_osc_jupyter_spark

# Pin to a release (recommended)
git checkout v0.16.0
```
No restart is needed -- Batch Connect apps are not Passenger apps and are detected automatically.

### 2. Configure for your site

Edit `form.yml` and update these values for your cluster:

| Attribute | OSC Default | Change to |
|-----------|---------|-----------|
| `cluster` | `ascend`, `pitzer`, `cardinal` | Your cluster name(s) |
| `auto_modules_spark` | auto-detected Spark modules | Spark modules on your system |
| `auto_modules_python`    | auto-detected Python modules | Python modules on your system    |
 | `auto_modules_app_jupyter` | auto-detected Jupyter modules | Jupyter modules on your system |
| `node_type` | `any`, `hugemem` | Node types available on your cluster |

In `script.sh.erb`, the app loads modules with:
```
module load project/ondemand <app_jupyter_module>
module load <python_module> <spark_module>
```
Ensure equivalent modules are available on your system.

### To Update the App

```sh
cd /var/www/ood/apps/sys/bc_osc_jupyter_spark
git fetch
git checkout <tag>
```

## Configuration

### form.yml attributes

| Attribute | Widget | Description | Default |
|-----------|--------|-------------|---------|
| `cluster` | select | Target cluster ID(s) | `ascend`, `pitzer`, `cardinal` |
| `jupyterlab_switch` | check_box | Toggle for launching LupyterLab vs. Notebook | `` |
| `working_dir` | path_selector | Root directory for the Jupyter session | `$HOME` |
| `auto_modules_spark`       | auto-select     | Apache Spark module to load                                | auto-detected    |
| `auto_modules_python`      | auto-select     | Python module to load (match your Conda environment)       | auto-detected    |
| `auto_modules_app_jupyter` | auto-select     | JupyterLab version module                                  | auto-detected    |
| `bc_num_hours` | number | Maximum walltime | `1` |
| `bc_num_slots` | number | Number of cores requeted for the job | `` |
| `node_type` | select | `OSC-specific node types` | `any` |
| `num_workers` | number_field | Number of Spark workers per node | `1` |
| `spark_configuration_file` | path_selector | Override Spark defaults with a custom config file | empty |
| `supplement_env_file` | path_selector | Load additional environment variables before Spark startup | empty |
| `only_driver_on_root` | check_box | Only launch the driver on the master node | unchecked |
| `include_tutorials` | check_box | Include access to OSC tutorial/workshop notebooks | unchecked |

## Troubleshooting
<!-- Taken from OSC/bc_osc_jupyter -->

Always check the `/output` directory of the session data for the job. This can be accessed simply by clicking the 
session id within the session card itself. Within this directory the `output.log` will show you any output from the job 
as it was began and any logging you have introduced in the app's scripts from the `/template` directory files.

It can be incredibly helpful to introduce extra logging into your scripts as you troubleshoot to help diagnose connection issues.

**If running as a container**, you will need to make sure you are retrieving logs from the container itself if it is having trouble 
running, which again, you can introduce when you call the container in your `script.sh.erb`.

### Connection timeout

The app may need more time to start. Increase the connection timeout or check that the compute node can open the required port.

## Testing

To verify your installation:

1. Launch the app from the OOD dashboard with default settings
2. Confirm the application loads in the browser

## Deployments

If your site would like to add your name to our known deployments, please let us know!

| Site | OOD Version | Scheduler | Status |
|------|-------------|-----------|--------|
| Ohio Supercomputer Center | 4.2.2 | Slurm 25.05.4 | Production |

## Known Limitations

- No GPU support
- The tutorial/workshop notebook options are OSC-specific

## Contributing

Contributions are welcome. To contribute:

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/my-improvement`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin my-improvement`)
5. Submit a pull request with a description of your changes

For bugs or feature requests, [open an issue](https://github.com/OSC/bc_osc_jupyter_spark/issues).

This app is part of the [OOD Appverse](https://ondemand.connectci.org/affinity-groups/ood-appverse). Join the [Appverse Affinity Group](https://ondemand.connectci.org/affinity-groups/ood-appverse) to connect with other contributors.

## References

- [Jupyter](https://jupyter.org/) -- the application launched by this app
- [Apache Spark](https://spark.apache.org/)
- [Open OnDemand](https://openondemand.org/) -- the HPC portal framework
- [OOD Batch Connect app development docs](https://osc.github.io/ood-documentation/latest/app-development.html)

## License

* Documentation, website content, and logo is licensed under
  [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)
* Code is licensed under MIT (see LICENSE.txt)
* The Jupyter logo is a trademark of NumFOCUS foundation.
* Apache Spark, Spark and the Spark logo are trademarks of the Apache Software Foundation (ASF).

## Acknowledgments

This app is built on [Open OnDemand](https://openondemand.org/), developed and
maintained by the [Ohio Supercomputer Center (OSC)](https://www.osc.edu/).

Open OnDemand is supported by the National Science Foundation under awards
[NSF SI2-SSE-1534949](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1534949)
and [NSF CSSI-Frameworks-1835725](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1835725).
