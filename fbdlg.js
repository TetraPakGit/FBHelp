//Opens up a Facebook dialog after a few minutes of surfing.

var triggerTime;
var $info = $("<div id='fbdlg'><div id='closeBtn'></div><p>Not finding what you are looking for? <br/>Ask us on Facebook and we will try to help.<br/><a href='http://www.facebook.com'><img src='http://www.tetrapak.com/SiteCollectionImages/social%20buttons/facebook_icon.png' alt='Facebook'/></a></p></div>");

var cssObj = {
		  'background-color' : '#D8DFEA',
		  'color' : 'black',
		  'width' : '180px',		  
		  'border' : '1px solid black',
		  'z-index' : '100000',
		  'position' : 'absolute',
		  'right' : '10px',
		  'padding':'10px',
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

$().ready(function(){
	showSocialMessage();
});
function showSocialMessage()
{
	//build element
		$info.css (cssObj);		
		$('body').prepend($info);
		$('#closeBtn').css(cssObj2);
		$('#closeBtn').click(function(){$("#fbdlg").css("display","none");});
		$('#fbdlg').animate({top: '+=120'},1000);

	//slide element
}

function closeSocialMessaage()
{
	//Delete node by ID

	//Set cookie
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