//Grabbing text from json file and put into array

var arrayList = new Array();
firstFunction();
setTimeout(secondFunction, 1500);

function firstFunction(){ 
	console.log("Starting First Function");
	$.getJSON( "https://api.myjson.com/bins/dbekx", function( data ){
		arrayList = data.blacklist;
		console.log(arrayList);
		console.log("First Function Success");
	});
	console.log("test");
};

console.log("test");

function secondFunction(){
	
	console.log("Starting Second Function");
	console.log(arrayList);
	console.log(arrayList[0]);

	// Checks every element on page and replaces blacklist words

	console.log("START OF SCRIPT");

	for(var i = 0; i < arrayList.length; i++){
		var replaceString = new RegExp(arrayList[0],"g");
		$("*").contents().each(function test() {
		  if (this.nodeType === 3) this.nodeValue = $.trim($(this).text()).replace(replaceString, "butt")
		  if (this.nodeType === 1) $(this).html( $(this).html().replace(replaceString, "butt") )
	  });
	}
	console.log("END OF SCRIPT");
	console.log("Second Function Success");
}