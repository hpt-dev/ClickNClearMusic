# Starting (TS/Dev)
1. Navigate to /API/
2. npm install
3. npm run dev
4. go to localhost:3000

# Starting (JS/Prod)
1. Navigate to /Util/
2. npm install
3. run node build.js
4. Navigate to newly created folder /prod/
5. run node ./bin/www.js
6. go to localhost:3000

The SPA has already been built (npm install && npm run build from /Web/ will re-build the SPA and place the build files in /API/public/)

# API
API folder contains an expressJS/typescript server for returning the track data (localhost:3000/track/*) and returning the vue SPA (locahost:3000/)

# Web
Web folder contains a vuejs SPA that uses typescript.
UI/CSS with bulma
testing with mocha/chai

# Util
Contains build file

# TODO
1. Added DB backend instead of static json
2. Updated Repo/Service functions to async and return promise<Type>
3. logging
4. server side rendering (https://nuxtjs.org/)
5. add vuejs state management 