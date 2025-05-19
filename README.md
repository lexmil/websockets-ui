### Installation
`npm install`

### Usage
**Development**

`npm run start:dev`

* App served @ `http://localhost:8181` with nodemon

**Production**

`npm run start`

* App served @ `http://localhost:8181` without nodemon

**WebSocket server**

`npm run start:ws`

* By default WebSocket client tries to connect to the 3000 port.

---

**All commands**

Command | Description
--- | ---
`npm run start:dev` | App served @ `http://localhost:8181` with nodemon
`npm run start` | App served @ `http://localhost:8181` without nodemon
`npm run start:ws` | WS served @ `http://localhost:3000` without nodemon

**Note**: replace `npm` with `yarn` in `package.json` if you use yarn.
