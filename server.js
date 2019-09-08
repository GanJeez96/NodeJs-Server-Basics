var http = require("http");
var url = require("url");

function start(routeParam , handleParam)
{

//The function passed into http.createServer() method, will be executed when someone tries to access 
//the computer on port 8888

    http.createServer(function(req,res){

        //the req object represants the request from the client as an object
        //it includes the requested url and other request data

        var pathname = url.parse(req.url).pathname;
        console.log("Requested for "+pathname+" received");

        routeParam(handleParam,pathname,res);
        //var content = routeParam(handleParam,pathname);

        // if(content == null)
        // {
        //     res.writeHead(404, {"Content-Type":"text/plain"});
        //     content = 'Page Not Found';
        //     res.write(content);
        // }
        // else{
        //     res.writeHead(200, {"Content-Type":"text/plain"});
        //     res.write(content);
        // }
        
        // res.end();
        //console.log("Call back function 'createServer Executed'..");
    }).listen(8888);
    
    console.log("Server Running on port 8888..");
}
//exports.`New-Method-Name` = Existing-method-name
exports.runHost = start;