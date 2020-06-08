# space-site

Dashboard for showing off latest information about space. Run locally for full content (as some is only over HTTP) or view at [https://space-dashboard.netlify.app/](https://space-dashboard.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a96d8df8-894d-44a4-b3be-574f97b9c131/deploy-status)](https://app.netlify.com/sites/space-dashboard/deploys)
[![Known Vulnerabilities](https://snyk.io/test/github/RosieWatson/space-dashboard/badge.svg?targetFile=package.json)](https://snyk.io/test/github/RosieWatson/space-dashboard?targetFile=package.json)

## Installation
```
npm i
npm run start
```
Some of the requests use NASA's open API, which means you will need to obtain a key from [them](https://api.nasa.gov/) and then export it:
```
export NASA_API_KEY=[your API key]
```

## Overview
- Written in React
- Styled using Bootstrap and SASS
- Bundled using Webpack
- Deployed via Netlify
