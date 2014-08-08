/**
 * Creates the image slider effect.
 * It takes following parameter:
 * @params {Number} { timeout: value}
 **/
$(function($){
    $.fn.slider = function(vars) {        
    	var element     	= this; //The main div element that holds the images.
    	var timeOut     	= (vars.timeOut != undefined) ? vars.timeOut : 4000; //Timeout that has to be set (if not mentioned it takes default 4000
    	var currentElement  = null; //The current image element to fade.
    	var items       	= $("#" + element[0].id + "Content ." + element[0].id + "Image"); //List of image elements
    	var continuetofade 	= true; //Boolean value to indicate whether to continue to fade or stop
    	
    	$(element).on({
    		mouseenter: function(){
    			continuetofade = false; //When the mouse is on the images, stop the fader
    		},
    		mouseleave: function(){
    			continuetofade = true; //When the mouse is out from the images, start the fader
    		}
    	});
      
    	var fader = function() {
			//Initially the currentElement is null, and hence we start from the last image index
    		currentElement = (currentElement != null) ? currentElement : items[(items.length-1)];
			
			//Initially we get the last index + 1 which is (currNo == items.length) which will ensure we start from the first element
    		var currNo = jQuery.inArray(currentElement, items) +  1;
    		currNo = (currNo == items.length) ? 0 : (currNo - 1);
			
    		$(items[currNo]).fadeIn('slow', function(){ 
    			currentElement = items[(currNo)];
    			setTimeout(function(){
    				if(continuetofade){ //Wait for the mouse to go out of the image
	    				$(items[currNo]).fadeOut('fast', function(){
	    					currentElement = items[(currNo + 1)];
	    					fader();
	    				});
    				}
    				else{
    	    			setTimeout(function(){
    	    				fader();
    	    			}, 2000);
    				}
    			},3000);
    		});
    	}
    	fader();
    };
});