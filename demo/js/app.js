$(document).foundation({
	"magellan-expedition": {
	  active_class: 'active', // specify the class used for active sections
	  threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
	  destination_threshold: 100, // pixels from the top of destination for it to be considered active
	  throttle_delay: 50, // calculation throttling to increase framerate
	  fixed_top: 0, // top distance in pixels assigend to the fixed element on scroll
	  offset_by_height: true // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
	}
});

$(document).ready(function() {
    $('.mobileMenu').click(function (ev) {
       var t = ev.target
       $('.ad-main-nav').toggle(500, function(){
          $(t).html($(this).is(':visible')? 'Hide Menu' : 'Show Menu')
       });
       return false;
    });
});

/*!
 * jQuery Sticky Footer 1.1
 * Corey Snyder
 * http://tangerineindustries.com
 *
 * Released under the MIT license
 *
 * Copyright 2013 Corey Snyder.
 *
 * Date: Thu Jan 22 2013 13:34:00 GMT-0630 (Eastern Daylight Time)
 * Modification for jquery 1.9+ Tue May 7 2013
 * Modification for non-jquery, removed all, now classic JS Wed Jun 12 2013
 */

 //lets get the marginTop for the <footer>
function getCSS(element, property) {

  var elem = document.getElementsByTagName(element)[0];
  var css = null;
  
  if (elem.currentStyle) {
    css = elem.currentStyle[property];
  
  } else if (window.getComputedStyle) {
	css = document.defaultView.getComputedStyle(elem, null).
	getPropertyValue(property);
  }
  
  return css;

}

function stickyFooter() {
	
	if (document.getElementsByTagName("footer")[0].getAttribute("style") != null) {
		document.getElementsByTagName("footer")[0].removeAttribute("style");
	}
	
	if (window.innerHeight !== document.body.offsetHeight) {
		var offset = window.innerHeight - document.body.offsetHeight;
		var current = getCSS("footer", "margin-top");
		
		if (isNaN(current) === true) {
			document.getElementsByTagName("footer")[0].setAttribute("style","margin-top:0px;");
			current = 0;
		} else {
			current = parseInt(current);
		}
						
		if (current+offset > parseInt(getCSS("footer", "margin-top"))) {			
			document.getElementsByTagName("footer")[0].setAttribute("style","margin-top:"+(current+offset)+"px;");
		}
	}
}

window.onload = function() {
	stickyFooter();
	
	//you can either uncomment and allow the setInterval to auto correct the footer
	//or call stickyFooter() if you have major DOM changes
	//setInterval(checkForDOMChange, 1000);
};

//check for changes to the DOM
function checkForDOMChange() {
	stickyFooter();
}

//check for resize event if not IE 9 or greater
window.onresize = function() {
	stickyFooter();
};



/*
! end sticky footer
*/