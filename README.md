
# pbcHTML - General Information
    - URL: http://104.236.148.139/
    - Firebase: https://poweredbycoffee1.firebaseio.com/

## Login Information
    - Text me (arby) for login information to firebase, server, or admin backend.

## Instructions For Adding Tag Data
    - Visit http://104.236.148.139/admin/
    - Login with username & password (ask me for this)
    - Fill in the first form titled "Insert New Tag"
    - Click Add Tag!

tag name: Just the name of the tag such as br or table. Don't write &lt;br&gt; or anything like that.

tag description: There is a short version and long version. These should be different. The short version will be used on homepage and in filtering tags. The long version will be used in the tag page. 

For example (the br tag):

Short Version: Defines a single line break.
Long Version: The br tag defines a single line break in an HTML document. The tag is considered empty and therefore does not require a closing tag.

Tag Example - There are two fields for this. The first one should be the actual html code for the example (don't include head/body and all that stuff). The next one it the html code formatted for ouput in the browser, so < and > are replaced with &lt; and &gt;. etc.

NOTE: This should be automated. If anyone wants to tackle this feel free! But there are tools out there that do this for you.
        For example (the br tag):


Attribut section: This should be a comma seperated list. PLEASE only put a comma between attribute names.

Correct: color,bgcolor,id,class
INCORRECT: color, bgcolor, id, class

If you want to include the GLOBAL attributes as specified on w3school, just write global as one of the attributes. All lowercase. It will automatically expand.

Browser Support section. Write Yes if supported or first version number to support the tag if all versions of the browser do not support the tag.


IF YOU MAKE A MISTAKE: type the tag name in the update section, click submit, fix the mistake, click add tag and it will overwrite your submission. The update page should automatically fill in all the current data in the DB for the tag you chose. if it doesn't wait like 5 seconds.
