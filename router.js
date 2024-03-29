function route(handle,pathname,response)
{
    console.log("About to route a request for "+pathname);

    if(typeof handle[pathname] === 'function')  //check if a handler for the pathname exists
    {
        // if true, execute the function for the handled pathname
        return handle[pathname](response);
    }
    else{
        console.log('No Request handler found for '+pathname);
        //return null;
        response.writeHead(404,{"Content-Type":"text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

//exports.`New-Method-Name` = Existing-method-name
exports.RouteModule = route;