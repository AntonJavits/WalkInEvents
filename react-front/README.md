# Walk-In-Events

Full-stack solution, where react-build is included in node-backend and published to heroku using script in node-project's package.json


## Developing React app in localhost

Open folder walkin-react-front and start with "npm run dev". It will run server in background, and react app is running at localhost:3000


## Testing React app with node-backend

Open folder walkin-node-backend, run "npm install" and start with "npm run build:ui". It will build react app from folder walkin-event-front and add the build to node app folder. After that run "npm start", that will start the server and serve react front at localhost:3001


## Deployment of full-stack solution to Heroku

From walkin-node-backend run "npm run deploy" or "npm run deploy:full" in case there is recent react build to include // script needs fix

### Manual deployment from root folder of fullstack branch

```
heroku login
heroku git:remote -a walk-in-events
git subtree push --prefix walkin-node-backend heroku master
```

> and then you have to install the npm packages
```
$ npm install
```

> after the next step you're good to go!
```
$ npm start
```



## how to use our web-app?

tähän tehdään hienot käyttöohjeet kuvineen ja sepustuksineen




### npm packages that we have used in our project
```
npm install leaflet
npm install react-leaflet
npm install react-bootstrap bootstrap
npm install react-router-dom
npm install moment
```
localhost linkki

## How to use our app?

miten sovellusta käytetään?
tähän olisi hyvä lisätä screenshotteja projektin eri käyttövaiheista.




## project group


tässä ehkä jotain liirumlaarumia
halutessa linkitys `#` merkin tilalle

- [Anton Javits](http://#)
- [Petja Koivu](http://xd)
- [Olli Kuikka](http://#)
- [Sami Kulonpää](http://#)
- [Päivi Lampinen](http://#)
- [Jukka Lehikoinen](http://#)



## lisenssi

minkä lisenssin alla projekti on?



## Domain


Currently we have a redirect from [walkingevents.tech](http://walkinevents.tech/) to our [heroku build](https://walk-in-events.herokuapp.com/).



---
githubin omat readme.md dokumentointiohjeet löytyy [täältä](https://guides.github.com/features/wikis/)

perustoimintojen kirjoittamisen ja muotoilun ohjeet löytyy [täältä](https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax)

tässä vois olla aika passeli [esimerkkipohja](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)
---
