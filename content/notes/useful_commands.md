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
