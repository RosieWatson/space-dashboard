# space-dashboard

Progressive Web App dashboard that displayes the latest information about space [https://space-dashboard.netlify.app/](https://space-dashboard.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a96d8df8-894d-44a4-b3be-574f97b9c131/deploy-status)](https://app.netlify.com/sites/space-dashboard/deploys)
![](https://github.com/RosieWatson/space-dashboard/workflows/CI/badge.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/RosieWatson/space-dashboard/badge.svg?targetFile=package.json)](https://snyk.io/test/github/RosieWatson/space-dashboard?targetFile=package.json)

## Installation
```
npm i
npm run start
```

Some of the requests use NASA's open API, which means you will need to obtain a key from [them](https://api.nasa.gov/) and then add it to your `.env` as `REACT_APP_NASA_API_KEY="YOUR_KEY"`.

## Overview
- Written in React with Redux
- Serverless function with Firebase
- Styled using Bootstrap and SASS
- Bundled using Webpack
- Deployed via Netlify

## Roadmap
The aim is that this will be an ongoing project that will pull in and display more information as I find good source.
