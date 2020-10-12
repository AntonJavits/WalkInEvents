# Walk-In-Events

Full-stack solution, where react-build is included in node-backend and published to heroku using script in node-project's package.json


## Developing React app in localhost

Open folder walkin-react-front and start with "npm run dev". It will run server in background, and react app is running at localhost:3000


## Testing React app with node-backend

Open folder walkin-node-backend and start with "npm run build:ui". It will build react app from folder walkin-event-front. After that run "npm start", that will start the server and serve react front at localhost:3001


## Deployment of full-stack solution to Heroku

From walkin-node-backend run "npm run deploy" or "npm run deploy:full" in case there is recent react build included
