/* 
* Skeleton V1.0.2
* Copyright 2011, Dave Gamache
* www.getskeleton.com
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 5/20/2011
*/	
	

$(document).ready(function() {
  
  /* Polyfills for CSS type selectors
	================================================== */
  $("#sidebar .node:last-child").addClass("lastnode");
  $("#sidebar .ratings-list li:last-child").addClass("lastrating");
  $("#sidebar .badge-list li:nth-child(5n)").addClass("lastbadge");
  
  /* Nav Dropdowns on hover
	================================================== */
  $("#primary-nav li").hover(
      function() { $(this).addClass("hover").find("ul.dropdown").show(); },
      function() { $(this).removeClass("hover").find("ul.dropdown").hide(); }
  );
  
  /* Tipsy Tooltips
	================================================== */
  $("[rel=tipsy]").tipsy({gravity: "w", opacity: 0.7});
  $("[rel=tipsy-top]").tipsy({gravity: "s", opacity: 0.7});

	/* Tabs Activiation
	================================================== */
	var tabs = $("ul.tabs"),
	    tabsContent = $("ul.tabs-content");
	
	tabs.each(function(i) {
		//Get all tabs
		var tab = $(this).find("> li > a");
		tab.click(function(e) {
			
			//Get Location of tab"s content
			var contentLocation = $(this).attr("href") + "Tab";
			
			//Let go if not a hashed one
			if(contentLocation.charAt(0)=="#") {
			
				e.preventDefault();
			
				//Make Tab Active
				tab.removeClass("active");
				$(this).addClass("active");
				
				//Show Tab Content
				$(contentLocation).show().siblings().hide();
				
			} 
		});
	}); 
	
	/* Self-labeled form fields
	================================================== */
	$("input[title], textarea[title]").each(function() {
		if($(this).val() === "") {
			$(this).val($(this).attr("title"));	
		}

		$(this).focus(function() {
			if($(this).val() == $(this).attr("title")) {
				$(this).val("").addClass("focused");	
			}
		}).blur(function() {
			if($(this).val() === "") {
				$(this).val($(this).attr("title")).removeClass("focused");	
			}
		});
	});
	
});
