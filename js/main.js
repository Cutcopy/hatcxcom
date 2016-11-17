$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['top', 'about', 'whoWeAre', 'careers', 'flexibleHours','events', 'casual','breakTime', 'vacation','bestPeeps','jobs','roadAhead'],
        //Scrolling
        css3: true,
        scrollingSpeed: 900,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: true,
        easing: 'easeInOutCirc',
        easingcss3: 'cubic-bezier(0.000, 1.250, 0.325, 1.650)',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: false,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: true,
        normalScrollElements: '.bricktop',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Custom selectors
        sectionSelector: '.display',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
    // Scrollex
  //   $(function() {
  //     $('.container').scrollex({
  //       enter: function() {
  //
  //         // Set #foobar's background color to green when we scroll into it.
  //           $(this).css('opacity', 1);
  //           $(this).css('animation', 'bounce 3s ease-out');
  //           $(this).css('transform', 'translateX(0px)');
  //       },
  //       leave: function() {
  //
  //         // Reset #foobar's background color when we scroll out of it.
  //           $(this).css('opacity', 0);
  //           $(this).css('transform', 'translateX(-500px)')
  //       }
  //   });
  //   $('#clock_icon').scrollex({
  //     enter: function() {
  //       $(this).css('transform','rotate(30deg)');
  //     },
  //     leave: function() {
  //       $(this).css('transform','rotate(0deg)');
  //     }
  //   });
  //   $('#code').scrollex({
  //     enter: function() {
  //       $(this).css('animation', 'down 1s linear 1s forwards')
  //     }
  //   });
  //   $('#sketch').scrollex({
  //     enter: function() {
  //       $(this).css('animation', 'down 1s linear 1.5s forwards')
  //     }
  //   });
  //   $('#analytics').scrollex({
  //     enter: function() {
  //       $(this).css('animation', 'down 1s linear 2s forwards')
  //     }
  //   });
  //
  // }); // \\Scrollex
  $('.drawer-open').click(function(){
		$('#navigation-bar').toggleClass('mobilenav');
	})
});
