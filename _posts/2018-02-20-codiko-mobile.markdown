---
title: 'Case Study: Codiko Native'
date: 2018-02-20 09:00:00 Z
category: react
tags:
- react
layout: post
image: car-codiko.jpeg
cover: car-codiko.jpeg
excerpt: In 2017 I've worked on my first real case React Native app while working at PermiGo.
comments: true

listed: true
featured: false
size: small

published: true
---

Codiko is a web and mobile app to train for the driver's license theoretical exam in France. It was initially a project that had to be integrated to the existing online driving school website, PermiGo. However, regarding the size of the app we chose to create a stand-alone app. Therefor we chose to start the project with trending programming tools such as Ruby On Rails 5 (the final release was not yet out) and React.

Our development team on Codiko was pretty small so we had to focus on the web app and let a web agency handle the mobile version (for iOS and Android).

The first version of the web and mobile app was released in June 2016. We managed to release both at the same time but we quickly regretted the decision of not developing the mobile app on our own. Mistakes were made on the web app involving multiple updates of the API. Fixes on the mobile app weren't deployed as quickly as we wanted.

Codiko was my first experience in React and with Javascript frameworks. Therefore I was a little premature to be able to take the initiative of developing the app in React Native (RN wasn't even publicly released at that time).

A year after the release, we achieved to have a stable web app and API. We started looking for some improvements that we could bring to the app and started rethinking the mobile version to see if it would be a good idea to develop it from scratch with React Native.

The actual design of the app wasn't bad. We just wanted to change it since we wanted to change the app.

## The Challenge

At that time I was not yet graduated and had a paper to write. My subject was about React and how React Native could be an interesting solution for companies willing to extend their website to mobile platforms. I had already read a lot about the subject but I needed a real-life example. I did work on some random projects but it was mainly "To-Do"-like projects. This was my first real React Native project.

* How to connect our API to the app;
* How to setup a custom oAuth (I was used to connect to Google which is far more easier given all the components already available by the community);
* Implement a new, more user-friendly UI;
* Take advantage of the current website React code;
* Publish a React Native app.

We were also working on a new version of PermiGo's website and couldn't work a 100% on this mobile app: we fixed our schedule to be 90% on PermiGo and 10% on Codiko Native. In order to increase the available time to work on it, we had to prove that React Native was the best solution for us in terms of performance, ease of use and time spent working on it.

## Results

The first draft of the app went surprisingly fast. I did not expect to have a working preview of the UI so soon. However the code was quiet messy and I had to rewrite a lot of the code. We managed to re-use some of the existing React code from the website.

Regarding the UI, we were looking for something very user-friendly. I don't consider myself as a UI/UX expert, so I decided to take existing apps as an example. It had to be easy to use, so why not implement well known user experiences.

![Codiko Native]({{site.baseurl}}/images/codiko-demo.png "Codiko Native")

Facebook, Instagram, iOS apps, Tinder, ..., are apps used almost everyday by the users we were aiming. We tried to combine theses user experiences to enhance Codiko's experience. We achieved to reduce the user's interactions with the app by 2.
We also removed every component that was not mobile friendly and only adapted to a web format, such as complex graphics. We thought that Apple Health was a great inspiration regarding data visualisation on a small screen and that Tinder's screen navigation was easier regarding the use of swiping instead of taping.


## Problems encountered

Sadly we did not manage to finish this project, the team working on it, including me, did not pursue their adventure in the company. The objectives of the company have since changed and this project will remain as it is, **a prototype**.

While developing this mobile app, we thought about many new features that needed to make changes to the current API. We had to stop the development of it to focus on the new API version.

## Conclusion

