---
title: "Useful Commands"
date: 2025-01-28T11:53:28+01:00
summary: "A Note about any topic."
draft: false
categories: [Programming]
tags: [FFMPEG]
---

{{< metadata >}}

## Why?

Over the years you keep stumbling over the same commands on StackOverflow, this is a website to quickly look up the most important commands that I might want to reuse.

***

### FFMPEG


```bash
# Extract Frames

ffmpeg -ss 00:53 -t 00:01 -i PXL_20250126_190106430.mp4 photos/img%05d.png
```
Package for Linux that let's you do video manipulation, such as cutting and extraction of frames. The **%05d** generates images wiht the naming convention of counting up from 0 in a format with 5 leading zeros.



