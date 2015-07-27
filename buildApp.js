var packager = require("electron-packager");
var fs = require("fs");

fs.readFile("package.json", {encoding: "utf8"}, function(err, data) {
    if(err) {
        console.log(err);
    }
    var modules = JSON.parse(data).devDependencies;
    var excludeModuleStr = "";
    for(var module in modules) {
        excludeModuleStr += module + "|";
    }
    excludeModuleStr = excludeModuleStr.substring(0, excludeModuleStr.length - 1 );

    var opts = {
        dir: "./",
        name: "ComicReader",
        platform: "darwin",
        arch: "x64",
        version: "0.26.0",
        ignore: "(app/|node_modules/(" + excludeModuleStr + "))"
    };

    packager(opts, function(err, appPath) {
        if(err) {
            console.log(err);
        } else {
            console.log(appPath);
        }
    });
});



