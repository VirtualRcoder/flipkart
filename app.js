{
  "name": "Flipkart_Clone",
  "logo": "http://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png",
  "buildpacks": [
    {
      "url": "heroku/nodejs"
    },
    {
      "url": "https://github.com/heroku/heroku-buildpack-static.git"
    }
  ],
  "scripts": {
    "postdeploy": "npm run build"
  }
}