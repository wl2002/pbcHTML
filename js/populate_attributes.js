/*
 * File: populate_attributes.js
 * This file for populating the data from firebase into the page of tags. 
 * Created by: Powered By Coffee
 * Modified by:
 */

/* add the contents of the tag page */
function addAttributes(attributeName) {

/* add attribute to the tag page */
	var attDesRef = new Firebase("https://poweredbycoffee1.firebaseio.com/attribute_description/" + attributeName );
		attDesRef.once("child_added", function(attDes) {
		var descriptionCode = attDes.val();
		var descriptionDiv = document.getElementById("description");
		descriptionDiv.innerHTML += (descriptionCode);

		/* change the title name for the left container */
		document.getElementById("changeAttributeName").innerHTML = (attributeName);
		/* change the name for the container */
		document.getElementById("changeAttributeName2").innerHTML = (attributeName);


		});

		var TagRefDescription = new Firebase("https://poweredbycoffee1.firebaseio.com/description");
		var attributeRef = new Firebase("https://poweredbycoffee1.firebaseio.com/attribute/");
		var attributeDescriptionRef = new Firebase("https://poweredbycoffee1.firebaseio.com/attribute_description/" + attributeName);

		attributeRef.once("value", function(snapshot) 
		{
			snapshot.forEach(function(childSnapshot) 
			{
	     	
				childSnapshot.forEach(function(childchildSnapshot) 
				{
		
				if (childchildSnapshot.val().name == attributeName) 
						{

							TagRefDescription.orderByKey().startAt(childSnapshot.key()).endAt(childSnapshot.key() + "~").once("child_added", function(data) {
								console.log(data.key());
								populatData(data.key(), data.val().short_description);
							});
						}
				});
			});

		});
}
