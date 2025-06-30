---
title: "Commands Dump"
date: 2025-01-28T11:53:28+01:00
summary: "A Note about any topic."
draft: false
categories: [Programming, CLI]
tags: [FFMPEG, PDFTK]
---

{{< metadata >}}

## Why?

Over the years you keep stumbling over the same commands on StackOverflow, this is a website to quickly look up the most important commands that I might want to reuse.

***

### FFMPEG

```bash
# Extract Frames

ffmpeg -ss 00:53 -t 00:01 -i <input_video>.mp4 <output_path>/<output_file_name>%05d.png
```

Package for Linux that let's you do video manipulation, such as cutting and extraction of frames. The **%05d** generates images wiht the naming convention of counting up from 0 in a format with 5 leading zeros.

### PDFTK

```bash
# Combine PDFS
sudo apt install pdftk-java
pdftk <1.pdf> <2.pdf> <3.pdf> cat output <merged>.pdf
pdftk *.pdf cat output merged.pdf  # Merge in alphabetical order.
```

Package for Linux that let's you combine two pdfs into one.

### ETH

EULER, VPN

```bash
# Run Euler
ssh username@euler.ethz.ch
# Use VPN -> Install the cisco client
# connect to
sslvpn.ethz.ch/student-net
```

### Python VENV

```bash
python3 -m venv .venv
source .venv/bin/activate # Linux / MacOS
pip install -r requirements.txt
```

### Python Miniforge/Mamba

We install Miniforge and Mamba so that we only use Conda-Forge as our channel, so that only open-source distributions are used and so that we can benefit from the speed of Mamba.

Installation

```bash
# Where to put Miniforge
export CONDA_ROOT="/opt/miniforge3"
# Prepare the directory
sudo mkdir -p "$CONDA_ROOT"
sudo chown "$USER":"$USER" "$CONDA_ROOT"
# Download the latest installer for Linux x86-64
curl -LO https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
# Install silently (-b) into $CONDA_ROOT
bash Miniforge3-Linux-x86_64.sh -b -p "$CONDA_ROOT"
# Write the new init stub into ~/.bashrc (or ~/.zshrc) …
"$CONDA_ROOT/bin/conda" init
# …then start a fresh shell so the new PATH is in effect
exec "$SHELL" -l
# Check channels
conda config --show channels
# Install Mamba into base
conda activate base
conda install -n base mamba -c conda-forge
# Make ("mamba activate" instead of "conda activate")
mamba shell init --shell bash --root-prefix "$CONDA_ROOT"
# then start a fresh terminal
exec "$SHELL" -l
# so that it is not always active / this way we could potentially work in venvs locally
conda config --set auto_activate_base false
```

Setup Environment.
From scratch

```bash
# Create & activate 'development' env
mamba create -n <env-name> python=3.<version-number>
mamba activate <env-name>
# Install involved libs in one go (better in one line)
mamba install "numpy=<version-number>" scipy ...
# Install any pip-only packages
pip install <pypi-package>
# Export for reproducibility
mamba env export -n <env-name> > environment.yml
```

From **environment.yml**.

```bash
mamba env create -f environment.yml
mamba activate <name> # name from environment.yml
```

### Docker

Setup Docker as rootful user (admin priviledges, if solo-developer on machine)

```bash
# Quick installer (skip the manual GPG steps)
curl -fsSL https://get.docker.com | sudo sh

# Allow your user to run Docker without sudo  (rootful path)
sudo usermod -aG docker $USER
newgrp docker   # or log out/in
docker context ls

# Test
docker run --rm hello-world

# Remove unused images/containers -> Run from time to time.
docker system prune -af
```

### GIT

Configuration:

```bash
# global is not needed needed
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Proper Usage:

```bash
# 0) make sure you’re up-to-date
git clone <url>
git checkout main
git pull origin main

# 1) create & switch to a new branch
git checkout -b my-feature

# 2) do the work → add / commit as you go
git add .
git commit -m "feat: implement X"

# 3) push branch to remote so others / CI can see it
git push -u origin my-feature   # -u sets upstream tracking
```
Pull Requests for Code Review (2 Options)

Either Open Pull Request for Code Review via the UI or 
```bash
gh pr create
```

Merging

```bash
# 1) after work is approved, switch back to main
git checkout main
git pull origin main

# 2) merge the feature in
git merge my-feature

# 3) push updated main to the remote
git push origin main

# 4) clean up the branch
git branch -d my-feature        # delete local copy (-D to force if unmerged)
git push origin --delete my-feature   # remove remote branch
```

### EAS (Expo Build Tool)

```bash
npm install -g eas-cli
eas login 
eas build:configure
eas build -p android --profile production
eas credentials  # Download your Android keystore (required for updating app on Play Store)
```

### AppImage Update/Installation

```bash
# Update Only
sudo find /opt -iname "*<application_name>*" 2>/dev/null
sudo rm -f /opt/<application_name>.AppImage

# Both
sudo mv ~/Downloads/<application_name>.AppImage /opt/<application_name>.AppImage 
sudo chmod +x /opt/<application_name>.AppImage

# Installation Only
touch ~/.local/share/applications/<application_name>.desktop
nano ~/.local/share/applications/<application_name>.desktop
# add text to .desktop file
[Desktop Entry]
Name=Cursor
Exec=/opt/Cursor.AppImage
Icon=/opt/cursor.png
Type=Application
Categories=Development;IDE;
StartupNotify=true
Terminal=false

# Both
update-desktop-database ~/.local/share/applications/
```
