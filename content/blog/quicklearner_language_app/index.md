---
title: "Quicklearner Language App"
date: 2025-01-21T13:54:07+01:00
metadata:
  # readingTime: 10
  
image: "images/default-blog.webp"
summary: "My road to build my first app."
draft: true
categories: []
tags: []
---

{{< metadata >}}

## Notes
### Flutter + Dart
- not looking to use a framework as that comes with a lot of extra files which for me complicate the process if I am just starting out. Even though Flutter has the advantage that I can directly build for several platforms like iOS, Android and Web at the same time. However when initiating the Flutter project it came with so many files that it was overwhelming and I have settled that I will start buuilding Android native, using Kotlin, as I myself have a Google Pixel phone. I want to start out ground-up in app development, so eventually I feel comfortable to transition. So where to start out.
- Additional infos regarding Flutter: Flutter is written in Dart. Flutter is a framework (boilerplate/pre-generated scaffolding) and is a cross-platform UI toolkit.

### Android Studio
To test the App I will be using Android Studio, developed by Google and JetBrains. This seems to be the industry standard to test Android apps, so that one does not have to install the app on a phone everytime to test it one can emulate it on the Laptop using Android Studio. Historically, Android apps were written in Java and more recently more Kotlin has been adopted. While coding in VSCode (personal preference) I will be using the Android Software Development Kit (SDK) and Android Virtual Device (AVD) Emulator

### Alternatives
It looks like it is not quite black-and-white. Even when developing for mobile (i.e. android) first, it seems there are options. 
1. Native development using Kotlin or Java with Android Studio
  - Kotlin uses Gradle to compile and package the app so I would ideally not work in VSCode
2. Native development with framework (SwiftUI (iOS) or JetpackCompose (Android))
2. Lightweight Framework liek Ionic & Capacitor, but it seems the users are transitioning to Flutter recently
3. Progressive Web Apps (the prompt that pops up on some websites)
  - Advantages:
    - use the browser as their runtime environment
    - native apps are larger in size because they include libraries, dependencies & frameworks
    - Load dynamically and only cache locally what's necessary
    - works across multiple platforms by design
    - no app store rules
    - instant updates
  - Disadvantages:
    - Limited Access to Device Features
    - How to charge for usage?
    - discoverability as not on app stores (search engine optimization and direct marketing)
4. Cross-Platform Frameworks such as React Native
  - simpler structure than Flutter

### I can't decide
The abundance of frameworks/libraries, native development, cross-platform, progressive web application and whatsoever is just frying my brain, there are so many directions that one can tackle app development that I will have to start from scratch and start figuring out what I want and what I need to arrive at a conclusion. After deciding against Flutter due to its large scaffolding and switching towards native development for Android in the form of Kotlin and Android Studios, I found out about PWAs which might make it easier for myself to get started as I have recent web development experience. With the idea to then transition my PWA towards a native app it seemed that React and then React Native might be a good way forward, but again React comes with so many dependencies in the form of Node.js that I thought about going towards Angular which is more structured, however I would need to use Ionic (and Capacitor: Ionic's tool for wrapping PWAs into native mobile apps). So I am back at square one.

### Steps + Requirements
- I additionally require a BACKEND for keeping track of the words that the user has saved.
