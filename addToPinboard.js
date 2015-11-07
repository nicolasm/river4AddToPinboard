var fs = require ("fs");
var Pinboard = require('node-pinboard');

var now = new Date ();
var fnameConfig = "./config.json";

function loadConfig (callback) {
    fs.readFile(fnameConfig, function (err, data) {
        if (!err) {
            var config = JSON.parse(data.toString ());
            apiToken = config.pinboardUser + ':' + config.pinboardToken;
            
            if (callback !== undefined) {
	            callback ();
	        }
        }
    });
}

loadConfig(function() {
    var pinboard = new Pinboard(apiToken);

    var link = itemFromRiver.permaLink;
    if (link === undefined) {
        link = itemFromRiver.link
    }

    var options = {
        url: link,
        description: itemFromRiver.title,
        extended: unescape(itemFromRiver.description).replace('&nbsp;', ' ').replace('&rsquo', '\''),
        tags: 'from:river4',
	replace: 'no',
        toread: 'no'
    };

    pinboard.add(options, function(res) {
        console.log(res);
    });
});
