/*
 * File: adjustTextSize.js
 * This file for adjusting the size of text in the right body contanier 
 * Created by: Powered By Coffee
 * Modified by:
 */

var tt_size = 16;
var tt_lh = 16;
function a_inc()
{
	if(tt_size>20) return;				
	tt_size+=2;
	tt_lh+=3;
	document.getElementById('adjust').style.fontSize = tt_size+'px';
	document.getElementById('adjust').style.lineHeight = tt_lh+'px';		    
}
function a_dec()
{
	if(tt_size<16) return;		
	tt_size-=2;
	tt_lh-=3;
	document.getElementById('adjust').style.fontSize = tt_size+'px';
	document.getElementById('adjust').style.lineHeight = tt_lh+'px';
}