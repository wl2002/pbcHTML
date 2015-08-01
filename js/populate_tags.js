
/* Print friendly function */
function printpage()
{
	var originalContents = document.body.innerHTML;
	var printReport = document.getElementById('inner_right_container').innerHTML;
	document.body.innerHTML = printReport;
	document.body.innerHTML += ("<br /><br /><p>Copyright 2015 PoweredByCoffee - http://pbcHTML.com </p>")
	window.print();
	document.body.innerHTML = originalContents;
}

/* add the contents of the tag page */
function addCode(tagName) {
	

	/* add code to the tag page */
	var nameRef = new Firebase("https://poweredbycoffee1.firebaseio.com/example");
	nameRef.child(tagName).on("value", function(tag) {
		
		var rawCode = tag.val().html_raw;
		var resCode = tag.val().html_code;
		
		var codeDiv = document.getElementById("code");
		codeDiv.innerHTML += (rawCode);

		var resDiv = document.getElementById("result");
		resDiv.innerHTML += (resCode);		
	});


	/* add description to the tag page */
	var desRef = new Firebase("https://poweredbycoffee1.firebaseio.com/description/" + tagName);
	
	desRef.once("value", function(tags) {
	
		var tagDescription = tags.val().long_description;
		var tagDescriptionDiv = document.getElementById("description");
		tagDescriptionDiv.innerHTML += (tagDescription);
	});

	/* add attribute to the tag page */

	//delRow();
	var attRef = new Firebase("https://poweredbycoffee1.firebaseio.com/attribute/" + tagName);
	attRef.on("child_added", function(tags) {
	
	populateAtt(tags.val().name,"short_description");	
	});

	/* add browser to the tag page */

	//delRow();
	var broRef = new Firebase("https://poweredbycoffee1.firebaseio.com/browser/" + tagName);
	broRef.on("value", function(tags) {

	var chrome = document.getElementById("chrome");
	chrome.innerHTML += (tags.val().chrome);
	
	var firefox = document.getElementById("firefox");
	firefox.innerHTML += (tags.val().firefox);
	
	var ie = document.getElementById("ie");
	ie.innerHTML += (tags.val().internet_explorer);
	
	var opera = document.getElementById("opera");
	opera.innerHTML += (tags.val().opera);

	var safari = document.getElementById("safari");
	safari.innerHTML += (tags.val().safari);

	/* change the title name for the left container */
	document.getElementById("changeTagName").innerHTML = ("&lt;"+ tagName + "&gt;");
		
	});

}

function populateAtt(in1,in2) {
var table = document.getElementById('addBody');
 
    row = document.createElement("tr");
	cell1 = document.createElement("td");
	cell2 = document.createElement("td");

	textnode1 = document.createTextNode(in1);
	textnode2 = document.createTextNode(in2);
	
	cell1.appendChild(textnode1);
	cell2.appendChild(textnode2);

	row.onclick = function () { 
		window.location.href = "http://104.236.148.139/tags/" + tagName;
	};

	row.appendChild(cell1);
	row.appendChild(cell2);	
	table.appendChild(row);
}
