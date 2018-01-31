# occurrence-backend-node
### Backend code for the occurrence app in NodeJS.
This is an express app which gives 'N' frequently occuring words in the text file as requested from the frontend.
Entry point for the app is server.js. This module initialises the express app and starts the server. Post starting the server the process of calculating occurrences takes place. The code for this lies in a self built module called 'occurrence_module.js'. It is imported in server.js and is passed the body of the text file. To fetch the text file data, a module called 'request' is used. After calculating the occurrences, the occurrence_module returns an array of arrays containing word-frequency pairs. This array is made global and then can be accessed at any time when request comes in.


