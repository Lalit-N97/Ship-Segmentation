
var loadFile = document.getElementById("file");

var x = 0;

loadFile.addEventListener("change", function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);

	var str = loadFile.value;
	var x_str = str.match(/(\d+)/);
	x = parseInt(x_str[0])

});



/*upload.addEventListener("click", function(){
	document.body.innerHTML =  
' <div id="maintext" style="position:absolute; margin:auto; width:700px; height:200px; text-align:center; top:0; bottom: 0; left: 0; right: 0;"> ' + 
   ' <div class = "container"> ' + 
   		'<img src = "Images/' + x.toString() + '.jpg"' + 'alt = "Ship" height = "400" width = "400">' + 
  		' <button class = "btn btn-success" id = "predict"> Predict </button> ' +
  ' </div> ' + 
' </div> ' +
' <script type="text/javascript" src = "./app.js"></script>' ;
});*/

var predict = document.getElementById("predict");

predict.addEventListener("click", function(){

	document.body.innerHTML =  ' <body style="background-color: #6666FF"> ' + 
' <div id="maintext" style="position:absolute; margin:auto; width:700px; height:200px; text-align:center; top:0; bottom: 0; left: 0; right: 0;"> ' + 
   ' <h3 class = "text-light mb-2"> Predictions !! </h3> ' +
   '<div class = "row"> ' + 
   	' <div class = "column"> ' +
   		'<div> Image </div>' +
   		'<img src = "Images/' + x.toString() + '.jpg"' + 'alt = "Ship" height = "200" width = "200">' + 
  	' </div>' +
  	' <div class = "column"> ' +
  		'<div> Mask </div>' +
  		'<img src = "Masks/' + x.toString() + '.jpg"' + 'alt = "Ship" height = "200" width = "200">' + 
  	' </div> ' +
  	' <div class = "column"> ' +
  		'<div> Segmented Image </div>' +
  		'<img src = "Boundaries/' + x.toString() + '.jpg"' + 'alt = "Ship" height = "200" width = "200">' + 
  	' </div>'
  ' </div> ' + 
' </div> ' + 
' </body> ';

});
