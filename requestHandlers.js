function start(response)
{
    console.log("Request Handler 'START' was called.");
    //return 'Hello Start';
    response.writeHead(200,{"Content-Type":"teaxt/plain"});
    response.write("Function Start from requestHandlers was called");
    response.end();
}

function upload(response)
{
    console.log("Request Handler 'UPLOAD' was called.");
    //return 'Hello Upload';
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Function Upload from requestHandlers was called");
    response.end();
}

//exports.`New-Method-Name` = Existing-method-name
exports.Start = start;
exports.Upload = upload;