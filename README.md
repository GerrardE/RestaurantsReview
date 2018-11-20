# Restaurants Review Application
---

## Project Overview: Stage 1

For the **Restaurant Reviews** project, I incrementally converted a static webpage to a mobile-ready web application. In **Stage One**, I took a static design that lacks accessibility and converted the design to be responsive on different sized displays and accessible for screen reader use. I also added a service worker to begin the process of creating a seamless offline experience for my users.

### Specification

I was provided the code for a restaurant reviews website as part of requirements for the Udacity Front End Nanodegree Certification by [Udacity](https://udacity.com/). The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. My job was to update the code to resolve these issues while still maintaining the included functionality. 

### What did I do from here and, how do you install the app?

1. I started up a simple HTTP server to serve up the site files in my local computer. I suggest you do the same too. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on their computer. 

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the app, and see how i implemented the required features in three areas: responsive design, accessibility and offline use.
4. I wrote the code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/).

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, I tried to maintain use of ES6 in any additional JavaScript I wrote. 



