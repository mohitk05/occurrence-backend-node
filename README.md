# occurrence-backend-node

Heroku app: https://occ-node.herokuapp.com/
### Backend code for the occurrence app in NodeJS.
This is an express app which gives 'N' frequently occuring words in the text file as requested from the frontend.
Entry point for the app is server.js. This module initialises the express app and starts the server. Post starting the server the process of calculating occurrences takes place. The code for this lies in a self built module called 'occurrence\_module.js'. It is imported in server.js and is passed the body of the text file. To fetch the text file data, a module called 'request' is used. After calculating the occurrences, the occurrence_module returns an array of arrays containing word-frequency pairs. This array is made global and then can be accessed at any time when request comes in.

#### Modules used:
* express https://expressjs.com/
* body-parser https://www.npmjs.com/package/body-parser
* request https://www.npmjs.com/package/request

The routes handle the requests. The occurrence data fetching url is localhost:xxxx/find?num=3. Here 'num' is the request query item given by the frontend. This url runs the'myFunction' of 'myController'.

When a request hits the server ending in '/find', myFunction is run, which accesses the global object named 'global_occ' which is an array of arrays having pairs or word and occurrence frequency. It slices the array accoring to the requested number and sends the response. In case the requested number is larger than length of global\_occ then consider the number as the length of global\_occ i.e. return all the words.

All the core calculation is done in occurrence_module. It uses a Map object to calculate occurrence frequency and converts them into an array of arrays, finally sorting it according to the frequency. This is returned to the calling step.

For hosting purposes, React app has been converted to static files under frontend/build. It has been placed on the same server as the Express app. Middleware is used to direct '/' requests to the React app. Hence when the Heroku app link is opened, the React app opens up first.