var server = require("./server");
var routerVar = require("./router");
var reqHandle = require("./requestHandlers");

var handle = {};
handle['/'] = reqHandle.Start;
handle['/start'] = reqHandle.Start; //assigning the start function to the '/start' attribute of the handle object
handle['/upload'] = reqHandle.Upload;//assigning the upload function to the '/upload' attribute of the handle object

server.runHost(routerVar.RouteModule , handle);//calls the start method from the server module


/*
    If more arguments are passed onto a fucntion, than the ones defined,
    then those extra arguments will be assigned to an Array called 'arguments'.

    The array can be accessed like as follows:- arguments[0], arguments[1]
*/
// function add(x,y)
// {
//     console.log("Total is:"+ Number(x+y));
//     console.log("Extra parameters: "+ arguments[2]);
// }

// add(1,3,'HI');

/*
    If a function is called with missing arguments(fewer than declared) then,
    the missing values are set to undefined which indicates that a variable has not
    been assigned a value.
*/