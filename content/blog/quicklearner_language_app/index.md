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

### Mobile-First
After a quick discussion and having a look at some PWA (probasket & makemytrip) I think PWA is not the way forward, PWAs do inherently feel like a website when using them and the goal of the app is something immersive, intuitive and simple. So it should feel natural to use and for this it has to be native, else it feels clunky and make-do.

It seems that React Native delivers on what I would like to achieve, work in VSCode, utilize my JS knowledge/extend it with object-oriented programming principles (React). Combining React Native with Expo gives me a way to emulate my app without the need of Android Studio taxing my PC's resources. Now is this the most ground-up way of learning app development no, but I was more decentivized by the Android Studio development environment. So this seems to be less boilderplate than Flutter and therefore might be a good choice. Let's see. So why Expo on top of React Native, it allows for easier testing through the Expo Go App directly on my phone, it allows for over-the-air updates without requiring user's to download updates from the app store. It is not optimized for size or speed, so for performance reliant apps not useful, but it comes with some native modules preinstalled without the need to tackle native dependency download, so for my purposes it should be fine.

### Wireframing
Create wireframes ahead of time so you know what the app will feel and move like, what is required and what should be part of it. The options that one might have here seem to be Figma (industry-standard) for high quality wireframes, that are presentable. Of course on paper for first drafts or more simple options like drawio or Excalidraw. As I am just doing this for myself and I do not have a real style that I want to go for yet, I will stick with hand-drawn wireframes.

My screen start on a loading page, a splash screen that explains what exists, a login page, a home page, a page for each language, a page for each list of that language (at least 'my vocabulary'), a train page, a swipe page, a write page and a correction page for writing.

### Getting Started
Now that I have settled on my platform and Tech stack I will have to get started. I have settled on starting with the (Expo Tutorial)[https://docs.expo.dev/tutorial/create-your-first-app/] to understand how Expo/React Native interact and what building an app encompasses. It seems that I should ideally be familiar with TypeScript (Javascript with typing) and React, whilst I know of them I have not worked with them, so this will be a bit of a hurdle. However, I think I am familiar with their inherent concepts (object-oriented/component-based programming and typing) so I should be fine.

```bash
sudo apt install nodejs
sudo apt install npm
npx create-expo-app@latest .
npm run reset-project
```

First we create an Expo App with some boilerplate, but as we want to start from absolute zero (ground-up) we run ```npm run reset-project``` to start from the absolute minimum. To now have a look at our App we run ```npx expo start```, so that we can scan the QR code and run the app on our phone.

### Styling
A big difference I just stumbled across is styling in React Native uses Javascript objects and not CSS, but most properties are similar, except that they use camel casing (i.e. backgroundColor instead of background-color). I think that I will try my luck with Tailwindcss via ```npm install tailwind-react-native-classnames``` so that I can get started a bit quicker and dont need to worry about the design too much and therefore focus on the logic and backend utility.

For icons we use the ```@expo/vector-icons``` package where one can use the free icons from a lot of packs such as MaterialIcon, Fontawesome, etc. (see [link](https://icons.expo.fyi/Index) and [link](https://oblador.github.io/react-native-vector-icons/)).

I have followed the tutorial until the [additional resources](https://docs.expo.dev/tutorial/follow-up/) site. I have learned about media pickers, gestures, animations, screenshots and navigation bars.

### React Native + Expo
Not that easy. Concepts of Stack, File-based navigation, useEffect, useState, mounting are not straightforward. The jsx part of it seems fine where I now apply the styling I want to the native components. Also its a mix of expo and react native components that I use as some react native are apparently not optimized for speed so one would want to use Expo here. The idea is to have a activityindicator, then a landing page (with simple instructions of usage), then a login page/signup page, then a home page, with a settings and a profile page and from here the whole logic. I am settling for a top navigation or stack navigation instead of a tab navigation (liek instagram, facebook, spotfiy) so that I can have the users use the back button to go to previous pages. Each page has to have one default export function which is their page and maybe an useEffect after it was mounted. The page gets rerendered/mounted if a useState changes.

### Design Process
For the sake of doing this thing with an overview and not having to correct myself all the time I have started from a frontend/UI/UX point of view and have settled on Figma to recreate my wireframe. One reason is that I can document my process, since the wireframe will make a nice addition to this blog, but also to test a very unpolished view of what the design might look like in the end. The cool thing about figma is that you can create a prototype, so you can quickly link the buttons in Figma and can with kinda low effort already test the UX, and the flow of the page. I have now spent 1.5 hours on Figma and with the help of some ChatGPT I was able to setup the wireframe and understand pretty quickly how to use and draw a benefit from Figma. It gave me some clarity into how I want to structure how to add new words/phrases to a list/'my vocabulary'. It seems like the best way forward for myself is to use a language based system, so there needs to be some inherent logic that I myself have to add for each language, like which tenses exist and what the pronouns are.

### Introduction of API
Would it be possible to immediately import verbs and their tenses from an API, such as Leo or PONS or whatever? There seem to be two interesting ways of doing it [reverso-api](https://www.npmjs.com/package/reverso-api) and an official [Entreprise Team plan](https://documents.reverso.net/Pricing.aspx?lang=en) which allows access to the API. I guess here I should get in contact with them. Whilst this is very very interesting, I should only look to do this once I have a standing App.

### Choice of Prebuilt Designs
As this project is not about learning how to write beautiful React Native components and generating a beautiful app, but more about implementing a backend, first interactions with the APIs/Native Components I am looking to use a library/package with prebuilt components so that I do not have to worry about styling too much. I have stumbled over [React Native Material](https://rn-material.js.org/docs/components/fab) and [React Native Paper](https://reactnativepaper.com/) which are Material implementations for React Native. I will go with the larger **React Native Paper** as this way I already have more documentation, as well as more components to choose from. This way I will make my first draft of the app and if I still enjoy it, in the future I may look to implement my own style/restyle the components.

### Learnings/Struggles
1. I am spending too much time trying to learn frontend development for React Native. Maybe I should just focus on the logic first and use the components that are readily available, such as React Native Paper, instead of tinkering around with Restyle to get exactly what I want. If we want to change the UI afterwards it is probably best to do so after the logic is there. This way I already know which components I require and I will not be styling and restyling several times.
2. Doing a competition analysis, determining specific missing features, determining USPs.

### Analyse your Competition
Now whilst I still think that this project is worthwhile, because it is simple enough to teach me a variety of skills, I have to add a caveat. When I realized that there is a shortcoming of writing words into a notebook and then never wanting to repeat them I should have looked outside further than [Quizlet](https://quizlet.com/latest) which everyone uses and analysed the competition. With a simple Google search I stumbled over the following two products [Anki](https://apps.ankiweb.net/) and [Flashcard World](https://flashcards.world/), which do not completely do the same thing as I am trying to achieve, but are very similar! The nice thing about doing something yourself is that you can customize it according to your needs, but since at least Anki is open-source I could have also learned to customize their code for my needs (-> forking and packaging/building myself) instead of starting from scratch.

### Database + SQLite
It seems like I can find SQLite any and everywhere. I guess for larger production grade things it is not the standard anymore, but I seem to stumble over it everywhere, most likely because of its ease of usage. My architecture/structure is the following I have languages and each of that language has words, for the words I am envisioning differences between types of words (verb, noun, etc.) and proficiency/timestamp for repetition. Turns out SQLite does nto work with Web (I knew this but forgot it again) so I will need to implement an IndexedDB, otherwise I cannot test my app also on Web[^1].
I guess I am working with **local-first** after looking around it seems that SQLite with Cloud Sync is a good idea for Local-first and offline usage, eventually I may want to sync this with a PostgresSQL or Supabase database (Firebase or Supabase).

It looks like there is three ways of saving data: [Expo SecureStore](https://docs.expo.dev/versions/latest/sdk/securestore/), [Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/) and [AsynchronousStorage](https://react-native-async-storage.github.io/async-storage/docs/usage/). Where the first is for encrypted storing, sqlite for larger data amounts and asynchronous storage for smaller amounts such as user preferences.

### Expo navigation
Expo offers pretty cool **useRouter** features, where I can setup dynamic pathing using **[iso].tsx** this will act as a template for all traffic arriving here.

I will further start schachteln the navigation, as each language has several lists and words.

### Steps + Requirements
- Settled on React Native + Expo
- I additionally require a BACKEND for keeping track of the words that the user has saved.
- Sync database with Firebase or Supabase so that user can access data across devices.

- Future Future
  - Reverso API or similar

[^1]: I wouldnt need to do this if I had my Android phone with me, but as I am trying to be healed and remove all the dopamine toxicity from my system I left it at home.