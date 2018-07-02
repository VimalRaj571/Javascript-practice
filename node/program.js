//Task 2
//var total = 0;
//console.log(process.argv.length);
//console.log(Number(process.argv[2]));
//console.log(process.argv[2])
//console.log(process.argv)
//for(i=2;i<process.argv.length;i++){
//	total = total + Number(process.argv[i]);
//};

//console.log(total)

//Task 2

//var fs = require('fs');

//out = fs.readFileSync(process.argv[2])

//out =  fs.readFileSync('/home/vimal/Desktop/space/js/node/hi.txt')

//console.log(out)
 
//var str = out.toString()

//var n = str.split('\n')

//console.log(n)

//console.log(n.length-1)

//Task 3

var fs = require('fs');
var line = process.argv[2];

function numberOfLines(){
	fs.readFile(line,function doneReading(err, fileContent){
	return line.toString().split('\n').length-1 
	})
}

console.log(numberOfLines())
