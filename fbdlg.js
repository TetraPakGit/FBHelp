//Opens up a Facebook dialog after a few minutes of surfing.

var triggerTime = 120000; //I milisekunder startTid i datum
var $info = $("<div id='fbdlg'><div id='closeBtn'></div><p>Not finding what you are looking for? <br/><br/>We are listening:<br/>&nbsp;<a href='http://www.facebook.com/tetrapak'><img src='http://www.tetrapak.com/SiteCollectionImages/social%20buttons/facebook_icon.png' alt='Facebook'/></a>&nbsp;<a href='http://www.twitter.com/tetrapak'><img src='http://www.tetrapak.com/SiteCollectionImages/social%20buttons/twitter_icon.png' alt='Twitter'/></a></p></div>");

var cssObj = {
		  'font-family' : 'verdana',
		  'background-color' : '#94C6F0',
		  'color' : '#443E3E',
		  'width' : '165px',		  
		  'z-index' : '100000',
		  'position' : 'absolute',
		  'right' : '10px',
		  'padding':'0px 10px',
		  'top':'-120px'
		  
		}

var cssObj2 = {
		  'background-color' : '#fff',
		  'background-image' : 'url("close_button.png")',
		  'color' : 'black',
		  'width' : '13px',
		  'height': '13px',		  
		  'z-index' : '100000',
		  'position' : 'absolute',
  		  'top':'2px',
		  'right' : '2px',
		  'padding': '1px',
		  'cursor' : 'pointer',
		  'line-height' :'70%'

		  
		}

	$(document).ready(function(){
		var MyDate = new Date();
		if(getCookie('timeOnSite')==null)
		{
			var timeEntered = MyDate.getTime();
			setCookie('timeOnSite',timeEntered,1);
		}
		var parseTime = parseInt(getCookie('timeOnSite'));
		if( evalTimeOnSite(parseTime, triggerTime) && getCookie('dialogClosed') ==null)
		{
			showSocialMessage();
		}
	});

function showSocialMessage()
{
		$info.css (cssObj);		
		$('body').prepend($info);
		$('#closeBtn').css(cssObj2);
		$('#closeBtn').click(function(){
			$("#fbdlg").css("display","none");
			setCookie('dialogClosed');
		});
		$('#fbdlg').animate({top: '+=220'},1000);
}


function evalTimeOnSite(time,maxTimePassed)
{
	var MyDate2 = new Date();
	var now = MyDate2.getTime();
	if (now - time > maxTimePassed) 
		{
			return true;
		};
		return false;
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