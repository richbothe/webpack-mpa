
# Multi Page Application Starter Project

This project features:

> * Webpack 5 (requires Node.js v14.15.5 or later)
> * Babel
> * HMR
> * Bootstrap 5
> * SASS and autoprefix
> * Assest management for fonts and images
> * Custom alias' for shorthand paths

*Src: https://developpaper.com/building-multi-page-programs-using-webpack/*

***

## Getting started

1. Run `npm install` to install the project dependencies.

2. Run `npm run build` to create a production build.

3. Run `npm run start` to start the project in development mode.

***

## Adding pages
1. In the src directory, copy `boilerplate.js` and `boilerplate.html`, then rename to the name of the new page (for MPA's in webpack, a rule of thumb is one entry (.js) file per html page).
2. Open `webpack.common.js` and add the page name to the `pages` array.
3. If you are running devServer, stop and restart it for the changes to take affect.
4. Run `npm run start` to restart the devServer and continue adding your content.