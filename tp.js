$().ready( function () {
	if (getCookie('redirect'))
	{
		window.location = "http://www.tetrapak.com/us"
	}
	try{
		var country = ip2location_country_short();
	}
	catch (err)
	{
		var country = "";
	}
	var us = country == 'US';
	//7d75787d62717562216d7e7c
	if (us){
		
		if (getCookie ('showDialog') == null && getCookie ('showDialog') != true)
			amRed();
	}
});

function amRed(){
	var cssObj = {
		  'background-color' : '#eee',
		  'color' : 'black',
		  'width' : '280px',		  
		  'border' : '1px solid black',
		  'z-index' : '100000',
		  'position' : 'absolute',
		  'padding':'10px',
		  'float' : 'left',
		  'opacity' : '0.5',
  		  'top':'-120px'
		  
		}
var cssObj2 = {
		  'background-color' : '#fff',
		  'color' : 'black',
		  'width' : '8px',
		   'height': '8px',		  
		  'border' : '1px solid black',
		  'z-index' : '100000',
		  'position' : 'absolute',
  		  'top':'2px',
		  'right' : '2px',
		  'padding': '1px',
		  'cursor' : 'pointer',
		  'line-height' :'70%'

		  
		}


		var $info = $("<div id='usRedirect'><div id='closeBtn'><strong>X</strong></div><p><strong>Looking for www.tetrapak.com/us ?</strong></p><table><tr><td><p>Always take me to www.tetrapak.com/us </p></td><td><input id='keepRedirect' type='checkbox' /></td></tr><tr><td><p>Do not show this message again</p></td><td><input id='hideRedirect' type='checkbox' /></td></tr></table></div>");		
		$info.css (cssObj);		
		$('body').prepend($info);
		$('#closeBtn').css(cssObj2);
		$('#closeBtn').click(function(){$("#usRedirect").css("display","none");});
		$('#keepRedirect').change(function(){setCookie('redirect',true,'60');window.location = "http://www.tetrapak.com/us"; });
		$('#hideRedirect').change(function(){setCookie('showDialog',true,'60');$("#usRedirect").css("display","none"); });
		$('#usRedirect').animate({top: '+=120'},1000);
}


function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}