"use strict";
//NPM Task
(function(){
	var concat = require("concat");
	var fileList = [ "bower_components/angular/angular.min.js",
					 "bower_components/jquery/dist/jquery.min.js",
					 "scripts/bundle/bower-project-min.js"
				   ];
	concat(fileList, "scripts/bundle/site.js", function(error){
		if(error){
			console.log("There was an error", error);
		}else{
			console.log("Finsished joining the following:", fileList);
		}
	});
})();
