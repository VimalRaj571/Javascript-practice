var fs = require('fs')
var path = require('path')
var direc = process.argv[2]
var ext = '.'+process[3]

fs.readdir(direc, function(err,files){
	if(err){
		return console.error(err)
	}
	files.forEach(function(file) {
		if (path.extname(file) === ext){
			console.log(file)
			}
	})
})
