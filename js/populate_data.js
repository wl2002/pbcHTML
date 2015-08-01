/* Function to find tags by passing a specific letter */
function findByIndex (letter) {
	
	delRow();
	var refs = new Firebase("https://poweredbycoffee1.firebaseio.com/description");
	refs.orderByKey().startAt(letter).endAt(letter + "~").on("child_added", function(data) {
		console.log(data.key());

		populatData(data.key(),data.val().short_description);
	});

return false;
}

function findByName (name) {
    delRow();
    console.log(name);
    var refs = new Firebase("https://poweredbycoffee1.firebaseio.com/description");
    refs.orderByKey().startAt(name).endAt(name+"~").on("child_added", function(data) {
        console.log(data.key());
        
        populatData(data.key(), data.val().short_description);
    });
}

function addCategory(category) {

	var nameRef = new Firebase("https://poweredbycoffee1.firebaseio.com/category");
	nameRef.child(category).on("child_added", function(tag) {
		console.log("added", tag.val().name);

		var tags = tag.val().name;
		
		var desRef = new Firebase("https://poweredbycoffee1.firebaseio.com/description/" + tags);
		desRef.once("value", function(des) {
			console.log(des.val().short_description);	
			populatData(tags, des.val().short_description);		
		
		}); 
	});
}


function addAll(){

delRow();
var ref = new Firebase("https://poweredbycoffee1.firebaseio.com/description");
ref.orderByValue().on("value", function(snapshot) {
  snapshot.forEach(function(data) {
	populatData(data.key(),data.val().short_description);
  
  });
});

}

function populatData(tagName,TagDes)
{
	if (!document.getElementsByTagName) return;
	tabBody = document.getElementsByTagName("tbody").item(0);
	row = document.createElement("tr");
	cell1 = document.createElement("td");
	cell2 = document.createElement("td");

	textnode1 = document.createTextNode(tagName);
	textnode2 = document.createTextNode(TagDes);
	
	cell1.appendChild(textnode1);
	cell2.appendChild(textnode2);
	
	row.onclick = function () { 
		window.location.href = "http://www.pbcHTML.com/tags/" + tagName;
	};
	
	row.appendChild(cell1);
	row.appendChild(cell2);
	
	tabBody.appendChild(row);
}



function delRow(){
	var table = document.getElementById("t01");

	for(var i = table.rows.length - 1; i > 0; i--)	
	{
    table.deleteRow(i);
	}
}
