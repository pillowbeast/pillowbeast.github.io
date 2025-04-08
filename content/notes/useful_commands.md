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

```bash
# global is not needed needed
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```
