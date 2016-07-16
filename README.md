# ![](http://i.imgur.com/piU1FbP.png) Feather
Feather is a minimal Youtube where it updates as you type in the search bar. It was built using ReactJS.

<p align="center">
<img src="https://thumbs.gfycat.com/GraveGregariousIndianpalmsquirrel-size_restricted.gif" />
</p>

## ![](http://i.imgur.com/XVywMCv.png) Usage
Install [NodeJS](https://nodejs.org/) on your computer. Choose either 64bit or 32bit.

Download all the dependencies listed inside `package.json` with the following command:

    npm install

This will make a folder called `node_modules` with all the necessary folders and files.

#### Youtube API Key
Before we move any further, you must obtain a Yotube API key. Follow these steps to obtain one:

+ Go to the developers page of Google: [Google APIs](https://console.developers.google.com)
+ In the search bar type: "Youtube Data API v3"
+ Click on the "Enable API" button
+ Create a new "Credential" and create a new "Browser key" (Name it whatever you want)

Once you obtain your Youtube API key, we must configure one file called `index.js` inside the `src` folder. Copy your new key and paste it inside the constant called `YTAPI_KEY` between quotes.

#### Running the web app
Feather uses `webpack` and `babel` to transpile the ES6 code into ES5 so the browser will know how to read it (currently, no browser supports ES6). Open up a terminal or command prompt and type the following to transpile:

    npm start
    
This command uses the `start` script inside `package.json` to run the `webpack-dev-server`. Leave this running and open up your browser of choice and type the following URL:

    localhost:8080
    
You should now see the main page of Feather. It should look like the .gif above.
