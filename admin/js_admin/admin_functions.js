var dataRef = new Firebase("https://poweredbycoffee1.firebaseio.com/");
var descriptionRef = dataRef.child("description");
var attributeDescriptionRef = dataRef.child("attribute_description");
var browserRef = dataRef.child("browser");
var exampleRef = dataRef.child("example");
var attributeRef = dataRef.child("attribute");
var categoryRef = dataRef.child("category");
var attributeDescriptionRef = dataRef.child("attribute_description");


function add_attribute() {
    var attributeName = $('#attributeName').val();
    var attributeDescription = $('#attributeDescription').val();

    attributeDescriptionRef.child(attributeName).set({
        description: attributeDescription
    });
}

function delete_attribute() {

    var d_attributeName = $('#d_attributeName').val();
    attributeDescriptionRef.child(d_attributeName).once("value", function (snapshot) {
        if (snapshot.val() === null) {
            alert("This attribute: " + d_attributeName + " does not exist!")
        }
        else {
            if (confirm('Do you want to delete this attribute: ' + d_attributeName + '?')) {
		attributeDescriptionRef.child(d_attributeName).set(null);
                alert("Deleted " + d_attributeName);
            }
        }
    });
}

function add_tag() {

    var tagName = $('#tagName').val();
    var tagDescriptionShort = $('#tagDescriptionShort').val();
    var tagDescriptionLong = $('#tagDescriptionLong').val();
    var tagExampleCode = $('#tagExampleCode').val();
    var tagExampleRaw = $('#tagExampleRaw').val();
    var tagAttributes = $('#tagAttributes').val();
    var ieBrowser = $('#ieBrowser').val();
    var firefoxBrowser = $('#firefoxBrowser').val();
    var chromeBrowser = $('#chromeBrowser').val();
    var safariBrowser = $('#safariBrowser').val();
    var operaBrowser = $('#operaBrowser').val();
    var tagCategory = $('#tagCategory').val();



    descriptionRef.child(tagName).set({
        short_description: tagDescriptionShort,
        long_description: tagDescriptionLong
    });

    categoryRef.child(tagCategory).push({
        name: tagName
    });

    browserRef.child(tagName).set({
        internet_explorer: ieBrowser,
        firefox: firefoxBrowser,
        chrome: chromeBrowser,
        safari: safariBrowser,
        opera: operaBrowser
    });


    exampleRef.child(tagName).set({
        html_code: tagExampleCode,
        html_raw: tagExampleRaw
    });

    var attributes = tagAttributes.split(',');
        for (i = 0; i < attributes.length; i++) {
            if (attributes[i] == "global") {
                var globalA = [
                    "accesskey",
                    "class",
                    "contenteditable",
                    "contextmenu",
                    "data-*",
                    "dir",
                    "draggable",
                    "dropzone",
                    "hidden",
                    "id",
                    "lang",
                    "spellcheck",
                    "style",
                    "tabindex",
                    "title",
                    "translate",
                    ];

                    console.log(globalA);
                    for (j = 0; j < globalA.length; j++) {

                        attributeRef.child(tagName).push({
                            name: globalA[j]
                        });
                    }

            }
            else {
                attributeRef.child(tagName).push({
                    name: attributes[i]
                });
            }
        }
    
    alert("Added " + tagName);

}

function delete_tag() {

    var d_tagName = $('#d_tagName').val();
    descriptionRef.child(d_tagName).once("value", function (snapshot) {
        if (snapshot.val() === null) {
            alert("This Tag <" + d_tagName + "> does not exist!")
        }
        else {
            if (confirm('Do you want to delete this tag <' + d_tagName + '>?')) {
                descriptionRef.child(d_tagName).set(null);
                browserRef.child(d_tagName).set(null);
                exampleRef.child(d_tagName).set(null);
                alert("Deleted " + d_tagName);
            }
        }
    });
}

function load_attribute_info(attribute) {
    var attributeDescriptionRef_l = attributeDescriptionRef.child(attribute);

    attributeDescriptionRef_l.once("value", function(snapshot) {
        var data = snapshot.val();

        field = document.getElementById("attributeName");
        field.value = attribute;

        field = document.getElementById("attributeDescription");
        field.value = data.description;
	console.log(data.description);
    });
}

function load_tag_info(tag) {
    var descriptionRef_l = descriptionRef.child(tag);
    var browserRef_l = browserRef.child(tag);
    var exampleRef_l = exampleRef.child(tag);
    var attributeRef_l = attributeRef.child(tag);
    var categoryRef_l = categoryRef.child(tag); 

    descriptionRef_l.once("value", function(snapshot) {
        var data = snapshot.val();
        
        field = document.getElementById("tagName");
        field.value = tag;

        field = document.getElementById("tagDescriptionShort");
        field.value = data.short_description;

        field = document.getElementById("tagDescriptionLong");
        field.value = data.long_description;
    });

    exampleRef_l.once("value", function(snapshot) {

        var data = snapshot.val();

        field = document.getElementById("tagExampleCode");
        field.value = data.html_code;

        field = document.getElementById("tagExampleRaw");
        field.value = data.html_raw;
    });

    attributeRef_l.once("value", function(snapshot) {

        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            field = document.getElementById("tagAttributes");
            field.value += childData.name + ",";
        });

        field.value = field.value.substring(0, field.value.length - 1);

    });

    categoryRef_l.once("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            childSnapshot.forEach(function(childchildSnapshot) {

                var childchildData = childchildSnapshot.val();
                field = document.getElementById("tagCategory");
                if(childchildData.name == tag) {
                    field = document.getElementById("tagCategory");
                    field.value = childSnapshot.key();
                }
            });
        });
    });

    browserRef_l.once("value", function(snapshot) {

        var data = snapshot.val();

        field = document.getElementById("ieBrowser");
        field.value = data.internet_explorer;

        field = document.getElementById("firefoxBrowser");
        field.value = data.firefox;

        field = document.getElementById("chromeBrowser");
        field.value = data.chrome;

        field = document.getElementById("safariBrowser");
        field.value = data.safari;

        field = document.getElementById("operaBrowser");
        field.value = data.opera;
    });
}
