# swagger-doc-gen-cli

https://www.npmjs.com/package/swagger-doc-gen-cli

### What it is

This is an npm package that can be used to dynamically generate a OpenAPI specification file from your express app that can be used along with the swagger UI package to create your API documentation. 

### Why use it?
This relieves the developer from creating a spec with thousands of lines as your API may have many different endpoints. This package generates majority of the specification (generates an entry for each API endpoint, an entry for each HTTP method for that endpoint and adds in all the route parameters for that endpoint), the only part that needs to be filled in is the details for the request and response body format for your API endpoints, the template for that is given as well.

<br/>
To complete the spec beyond the generated boilerplate, visit https://swagger.io/docs/specification/2-0/basic-structure/

### Installation

```npm i swagger-doc-gen-cli```

### Requirements
The tool requires that the express app that needs to documented exports the app as follows: <br/>
```module.exports = app```

### Usage
From the command line: <br/>
```make-spec <relativePathToYourExpressServer> yaml || json <relativePathToWhereYouWantTheOutputFile>```

The 2nd argument specifies whether the spec is desired in YAML or JSON format. Only one must be provided

You can then use the generated ```swagger.yaml``` or ```swagger.json``` along with the [swagger-ui-express package](https://www.npmjs.com/package/swagger-ui-express) to view your API documentation

### Example

Sample express app

```js
const express = require('express');
const app = express();

app.get('/api/1/:someParam', (req,res) => res.send('myapi'));
app.post('/api/1/:someParam', (req,res) => res.send('myapi'));
app.delete('/api/1/:someParam', (req,res) => res.send('myapi'));
app.put('/api/1/:someParam', (req,res) => res.send('myapi'));

app.listen(3000);
module.exports = app;
```

Assuming the code is inside ```index.js``` and the file structure is as follows 
<br>
<br>
![?](https://cdn.mathpix.com/snip/images/P4dP3oo-Kptlei8_JmpKorTOoxxdEFMgtgLtnbo0Wtw.original.fullsize.png)

<br>

Then if we are inside the routes directory, from the command line we can run:
```make-spec ./index.js json ./```

This means we want to generate the spec for the API endpoints found in ```index.js``` and ```./index.js``` is the relative path to it, we want it in ```json``` format and we want the file to be generated in the current directory, hence ```./```

Which will the generate the OpenAPI specification and will be named ```swagger.json```. If you want the YAML equivalent then run ```make-spec ./index.js yaml ./```
 
There should now be a ```swagger.json```inside the routes directory as follows

![?](https://cdn.mathpix.com/snip/images/LJhqorjFf0TsSi9v8ktScOcrRmyqOIXZwdBl56NemRQ.original.fullsize.png)

Note that if your server is listening on a port, after running the command it will appear as if the program has not exited, this is because the app is listening for requests, you can simply Ctrl^C to exit 

Now this file can be used along with the [swagger-ui-express package](https://www.npmjs.com/package/swagger-ui-express) to view and host your API documentation as follows

```js
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

You can find more about the package ![Here](https://www.npmjs.com/package/swagger-ui-express)

For our example the documentation looks like

![?](https://cdn.mathpix.com/snip/images/ZQaXC_rvFCUBVBqwHKXSZVFXAmS0tiOJC_y1-rNBSVU.original.fullsize.png)

As you can the tool does much of the heavy lifting and leaves very little parts that need to be filled out

You can also paste the contents of the file ![Here](https://editor.swagger.io/) and get a preview. If you are using Gitlab and push the swagger file to your repository, Gitlab allows to you preview the documentation simply by opening the file (No plugins required)

Open to contributions ideas for improvement!
