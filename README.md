# swagger-doc-gen-cli

### What it is
Dynamically generate a OpenAPI specification file from your express app that can be used along with the swagger UI package to create your API documentation. 

### Why use it?
This relieves the developer from creating a spec with thousands of lines as your API may have many different endpoints. This package generates majority of the specification (generates an entry for each API endpoint along with an entry for each HTTP method for that endpoint), the only part that needs to be filled in is the details for the request and response body format for your API endpoints, the template for that is given as well.

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

You can then use the generated ```swagger.yaml``` or ```swagger.json``` along with the ![swagger-ui-express package](https://www.npmjs.com/package/swagger-ui-express) to view your API documentation
