
var dataRefd = new Firebase("https://poweredbycoffee1.firebaseio.com/description");

/* check if the data are exist */
dataRefd.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

/* add the enter button to the search bar */
function search_by_enter(){
    if (event.keyCode == 13) 
        document.getElementById('searchBut').click()
}

/* call this function when the user entered a text in the search bar */
var tagResult =[];
var desResult =[];
function search_tag() {

	var s_tagName = document.getElementById("s_tagName").value;

	  var ref = new Firebase("https://poweredbycoffee1.firebaseio.com/description");
	  var count = 0 ;
	  var found2 = window.open("","_blank", "toolbar=yes, scrollbars=yes,status=yes, resizable=yes, top=100, left=400, width=600, height=400");

	  ref.orderByKey().startAt(s_tagName).on("child_added", function(snapshot) {
		  console.log(snapshot.key());
		  console.log(snapshot.val().long_description);
  
		  tagResult.push(snapshot.key());
		  desResult.push((snapshot.val().long_description));
		  count++;
    
	
	});

	found2.document.write("<h2>Check the following result:</h2>");  
	found2.document.write("<h5>Found: " +count + " results");
	found2.document.write("<hr />");
	for (var i = 1; i <= count; i++) {

	found2.document.write("<h5>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;"+ tagResult[i] +"&gt " );
	found2.document.write("<h5>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ desResult[i] );
  }


  /* this code is working fine but it searchs for the tag only ---note: need to force lowercase on it */
	/*var s_tagName = document.getElementById("s_tagName").value;
	console.log(s_tagName);
	dataRefd.child(s_tagName).once("value", function(snapshot) {
		
		if (snapshot.val() === null){
			var notFound = window.open("","_blank", "toolbar=yes, scrollbars=yes,status=yes, resizable=yes, top=100, left=400, width=600, height=400");
			
			notFound.document.write("<h2>No result found for : </h2>")
			notFound.document.write("<hr />");
			notFound.document.write("<h2>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;"+snapshot.key()+"&gt " );
		}
		else  {
		    var found = window.open("","_blank", "toolbar=yes, scrollbars=yes,status=yes, resizable=yes, top=100, left=400, width=600, height=400");
			found.document.write("<h2>Check the following result:</h2>");
			found.document.write("<hr />");
			found.document.write("<h2>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;"+snapshot.key()+"&gt ");
		}	
	});    

*/
}