The HTML response codes for your API.

### Installing
``` NPM
npm install --save http-response-info
```

### Usage

For using the package you need to include the package as follow
```Javascript
let responseCodes = require("http-response-info");
```
To use the function for checking the definition of the response codes use the following function
```Javascript
demo.htmlResponseCodes({Response code});
```
Your return value is the response status value as a string

Example
```Javascript
demo.htmlResponseCodes({200});
/// Expected response = "OK"
```
