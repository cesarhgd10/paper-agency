/*!

 =========================================================
 * Paper Kit 2 - v2.1.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/paper-kit-2
 * Copyright 2017 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/timcreative/paper-kit/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

 var searchVisible = 0;
 var transparent = true;

 var transparentDemo = true;
 var fixedTop = false;

 var navbar_initialized = false;

 $(document).ready(function(){
    var window_width = $(window).width();

    //  Activate the tooltips
    $('[data-toggle="tooltip"]').tooltip();

    if($(".tagsinput").length != 0){
        $(".tagsinput").tagsInput();
    }
    if (window_width >= 768) {
        var big_image = $('.page-header[data-parallax="true"]');

        if(big_image.length != 0){
         $(window).on('scroll', pk.checkScrollForPresentationPage);
         console.log('fdw');
     }
 }

 if($("#datetimepicker").length != 0){
    $('#datetimepicker').datetimepicker({
        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: "fa fa-chevron-up",
            down: "fa fa-chevron-down",
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right',
            today: 'fa fa-screenshot',
            clear: 'fa fa-trash',
            close: 'fa fa-remove'
        },
        debug: true
    });
};

    // Activate bootstrap switch
   // $('[data-toggle="switch"]').bootstrapSwitch();

    // Navbar color change on scroll
    if($('.navbar[color-on-scroll]').length != 0){
        $(window).on('scroll', pk.checkScrollForTransparentNavbar)
    }

    // Activate tooltips
    $('.btn-tooltip').tooltip();
    $('.label-tooltip').tooltip();

	// Carousel
	$('.carousel').carousel({
      interval: 4000
  });

    $('.form-control').on("focus", function(){
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function(){
        $(this).parent(".input-group").removeClass("input-group-focus");
    });

    // Init popovers
    pk.initPopovers();

    // Init Collapse Areas
    pk.initCollapseArea();

    // Init Sliders
    pk.initSliders();

});


 $(document).on('click', '.navbar-toggler', function(){
    $toggle = $(this);
    if(pk.misc.navbar_menu_visible == 1) {
        $('html').removeClass('nav-open');
        pk.misc.navbar_menu_visible = 0;
        setTimeout(function(){
            $toggle.removeClass('toggled');
            $('#bodyClick').remove();
        }, 550);
    } else {
        setTimeout(function(){
            $toggle.addClass('toggled');
        }, 580);

        div = '<div id="bodyClick"></div>';
        $(div).appendTo("body").click(function() {
            $('html').removeClass('nav-open');
            pk.misc.navbar_menu_visible = 0;
            $('#bodyClick').remove();
            setTimeout(function(){
                $toggle.removeClass('toggled');
            }, 550);
        });

        $('html').addClass('nav-open');
        pk.misc.navbar_menu_visible = 1;
    }
});

 var pk = {

 }

 var examples = {
    initContactUsMap: function(){
        var myLatlng = new google.maps.LatLng(44.433530, 26.093928);
        var mapOptions = {
          zoom: 14,
          center: myLatlng,
          scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      }
      var map = new google.maps.Map(document.getElementById("contactUsMap"), mapOptions);

      var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!"
    });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    }
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};
