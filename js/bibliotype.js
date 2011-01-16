/*  ---------------------------------------------------

    ===========================================
                B I B L I O T Y P E
                         *
           BASE BOOK / LONGFORM TYPOGRAPHY
               FOR TABLET COMPUTERS
    = = = = = = = = = = = = = = = = = = = = = = 
    
    There is nothing -- seriously, nothing (no really, nothing) -- fancy 
    going on in here, but just to make people feel comfortable. Here's a 
    license saying, effectively, hack away. 
    
    - - - - 
    
    Copyright (C) 2011 by Craig Mod (http://craigmod.com)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

    --------------------------------------------------- */


    $(document).ready(function() {

      // --------------------------------------
      // Setup hyphenator
      //      
      Hyphenator.config({
              displaytogglebox : true,
              classname: 'body_text',
              minwordlength : 4,
              togglebox : function () {
                        var myelem = document.getElementById('hyphenToggle');
                        if (Hyphenator.doHyphenation) {
                          myelem.setAttribute("class", "highlight");
                          myelem.onclick = Hyphenator.toggleHyphenation;
                        } else {
                          myelem.setAttribute("class", "");
                          myelem.onclick = Hyphenator.toggleHyphenation;
                        }
                }
      });
      Hyphenator.run();
      
      //alert(hyphenate);

      // ---------------------------------------
      // Turn on and off menu item indicator
      //
      function menuSet() 
      {
        $('menu li').removeClass('highlight');

        var classList1 = $('body').attr('class').split(/\s+/);
        var classList2 = $('#content_container').attr('class').split(/\s+/);
        
        classList = classList1.concat(classList2);
        
        var grid_on = false;
        //alert(classList);
        $.each(classList, function(index, item){
          //alert(item);
          if (item==='bed') {
             $('li.size1').addClass('highlight');
          }
          else if (item==='knee') {
             $('li.size2').addClass('highlight');
          }
          else if (item==='breakfast') {
             $('li.size3').addClass('highlight');
          }
          else if (item==='bg_grid') {
             grid_on = true;
             $('li.bg_on').addClass('highlight');
          }
          else if (item==='low') {
             $('li.lowc').addClass('highlight');
          }
          else if (item==='high') {
             $('li.highc').addClass('highlight');
          }
          else if (item==='ragged') {
             $('li.rag').addClass('highlight');
          }
          else if (item==='justified') {
             $('li.just').addClass('highlight');
          }
          else if (item==='helvetica') {
             $('li.hel').addClass('highlight');
          }
          else if (item==='georgia') {
             $('li.geo').addClass('highlight');
          }
        });
        
        if(!grid_on)
        {
          $('li.bg_off').addClass('highlight');
        }
      
      }
      
      menuSet();
      
	  // Rad Menu
	  $rad = $(".radial_container").radmenu({
			radius: 140,
			animSpeed:400,
			centerX: 0,
			centerY: 0,
			selectEvent: "click",
			onSelect: function($selected){
				//alert($selected.html());
				$("body").trigger("tap"); //to hide
			},
			angleOffset: 0
	  });
      
      // --------------------------------------
      // Swipe Right to reload the page 
      // (great for quick debugging)
      //
      
      
      $('body').addSwipeEvents().
        bind('swiperight', function(evt, touch) {
          window.location.reload();
      });
      

      // --------------------------------------
      // Swipe Left to toggle grid
      //
      // Great for debugging but otherwise confusing
      //
      
      $('body').addSwipeEvents().
        bind('swipeleft', function(evt, touch) {
        if($('body').hasClass('bg_grid'))
        {
          $('body').removeClass('bg_grid');
        }
        else
        {
          $('body').addClass('bg_grid');
        }
        menuSet();
      });
      



      // --------------------------------------
      // Doubletap to show / hide menu
      //
      $('body').addSwipeEvents().
        bind('doubletap', function(evt, touch) {
          //$('menu').slideToggle('fast', function() {
            // Animation complete.
          //});

		  //RADIAL MENU (show on doubletap, hide on single tap)
		  if (! $rad.hasClass("visible")) {
			  clearTimeout($rad.data("timeout"));
			  // show menu
			  $rad.addClass("visible").radmenu('scale', .1).radmenu('show');

			  //set state
			  var classList1 = $('body').attr('class').split(/\s+/);
	          var classList2 = $('#content_container').attr('class').split(/\s+/);
              classList = classList1.concat(classList2);

			  $.each(classList, function(index, item){
				  $('span.size1').parent(".radial_div_item").first().bind("click", function() { // for some reason "tap" doesn't work...
						$('li.size1').trigger("click");
				  });
			      $('span.size2').parent(".radial_div_item").first().bind("click", function() {
						$('li.size2').trigger("click");
				  });
				  $('span.size3').parent(".radial_div_item").first().bind("click", function() {
						$('li.size3').trigger("click");
				  });
		          if (item==='bed') {
		             $('span.size1').parent(".radial_div_item").first().addClass('highlight');
		          }
		          else if (item==='knee') {
		             $('span.size2').parent(".radial_div_item").first().addClass('highlight');
		          }
		          else if (item==='breakfast') {
		             $('span.size3').parent(".radial_div_item").first().addClass('highlight');
		          }
		          // else if (item==='bg_grid') {
		          // 	             grid_on = true;
		          // 	          }
		          else if (item==='low') {
		             $('span.lowc').parent(".radial_div_item").first().bind("click", function() {
						$('li.highc').trigger("click");
					 }).addClass('highlight');
		          }
		          else if (item==='high') {
					 $('span.lowc').parent(".radial_div_item").first().bind("click", function() {
						$('li.lowc').trigger("click");
					 });	
		          }
		          else if (item==='ragged') {
		             $('span.rag').parent(".radial_div_item").first().bind("click", function() {
						$('li.just').trigger("click");
					 }).addClass('highlight');
		          }
		          else if (item==='justified') {
			         $('span.rag').parent(".radial_div_item").first().bind("click", function() {
						$('li.rag').trigger("click");
					 });
		          }
		          else if (item==='helvetica') {
					 $('span.geo').parent(".radial_div_item").first().bind("click", function() {
						$('li.geo').trigger("click");
					 });
		          }
		          else if (item==='georgia') {
		             $('span.geo').parent(".radial_div_item").first().bind("click", function() {
						$('li.hel').trigger("click");
					 }).addClass('highlight');
		          }
	          });
	
		      $rad.css({
			  			top: 	touch.startY - $rad.height()/2, //TODO corect position: keep inside the screen
			  			left: 	touch.startX - $rad.width()/2
			  }).radmenu('scale', 1);
		  }
      }).bind('tap', function (evt, touch) {
	      // hide menu
		  if ($rad.hasClass("visible")) {
			  $rad.removeClass("visible");
			  // tap on .radial_div_item seems broken
			  // let's iterate them and trigger click
			  $(".radial_div_item").each(function (i, e) { //TODO don't do this on desktop
				var pos = $(e).offset();
				if ( pos.left <= touch.startX 
						&& (pos.left +  $(e).width() >= touch.startX )
						&& (pos.top <= touch.startY) 
						&& (pos.top + $(e).height() >= touch.startY) ) {
							$(e).trigger("click");
						}
			  });
			
			  $rad.radmenu("scale", .1);
			  clearTimeout($rad.data("timeout"));
			  $rad.data("timeout", setTimeout(function() {$rad.radmenu('hide');}, 500));
		  }
      });

      // SHAKE! ... for fun ;) 
      // http://stackoverflow.com/questions/4475219/detect-a-shake-in-ios-safari-with-javascript
      if (typeof window.DeviceMotionEvent != 'undefined') {
	    // Shake sensitivity (a lower number is more)
	    var sensitivity = 30;

	    // Position variables
	    var x1 = 0, y1 = 0, z1 = 0, x2 = 0, y2 = 0, z2 = 0;

	    // Listen to motion events and update the position
	    window.addEventListener('devicemotion', function (e) {
	        x1 = e.accelerationIncludingGravity.x;
	        y1 = e.accelerationIncludingGravity.y;
	        z1 = e.accelerationIncludingGravity.z;
	    }, false);

	    // Periodically check the position and fire
	    // if the change is greater than the sensitivity
	    setInterval(function () {
	        var change = Math.abs(x1-x2+y1-y2+z1-z2);

	        if (change > sensitivity) {
				if ($rad.hasClass("visible")) $rad.radmenu("shuffle");
	        }

	        // Update new position
	        x2 = x1;
	        y2 = y1;
	        z2 = z1;
	    }, 150);
	}

      // --------------------------------------
      // Doubleclick to show menu on desktop
      //
      
      $(document).bind('dblclick', function (event) {
        //$('menu').slideToggle('fast', function() {
            // Animation complete.
        //  });

		// clear any text selection done by double click
		document.getSelection().removeAllRanges();
		
		// delegate to doubletap handler
		$("body").triggerHandler("doubletap", {
			startX: event.pageX,
			startY: event.pageY		
		});
		
		return false;
      }).bind('click', function (event) {
	
    	// delegate to tap handler
		$("body").triggerHandler("tap", {
			startX: event.pageX,
			startY: event.pageY	
		});
	  });
      
      // Added menu tab instead of double click:
      //  - Discoverable & 
      //  - Cleaner
      $('#menu_tab').click(function() {
        $('menu').slideToggle('fast', function() {
            // Animation complete.
          });
      });



      // -------------------------------------
      // Size toggles
      //
      $('.size1').click(function() {
        $('#content_container').attr("class", "bed");
        menuSet();
      });

      $('.size2').click(function() {
        $('#content_container').attr("class", "knee");
        menuSet();
      });

      $('.size3').click(function() {
        $('#content_container').attr("class", "breakfast");
        menuSet();
      });
      
      
      // -------------------------------------
      // Contrast Toggles
      //
      $('.highc').click(function() {
        $('body').removeClass('low high').addClass('high');
        menuSet();
      });

      $('.lowc').click(function() {
        $('body').removeClass('low high').addClass('low');
        menuSet();
      });


      // -------------------------------------
      // Justification Toggles
      //
      $('.just').click(function() {
        $('body').removeClass('ragged justified').addClass('justified');
        menuSet();
      });

      $('.rag').click(function() {
        $('body').removeClass('ragged justified').addClass('ragged');
        menuSet();
      });


      // -------------------------------------
      // Serif toggle
      //
      $('.hel').click(function() {
        $('body').removeClass('georgia helvetica').addClass('helvetica');
        menuSet();
      });

      $('.geo').click(function() {
        $('body').removeClass('helvetica georgia').addClass('georgia');
        menuSet();
      });

      // -------------------------------------
      // Grid toggle
      //
      $('.bg_on').click(function() {
        $('body').removeClass('bg_grid').addClass('bg_grid');
        menuSet();
      });

      $('.bg_off').click(function() {
        $('body').removeClass('bg_grid');
        menuSet();
      });

    })
