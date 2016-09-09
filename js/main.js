$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: false,
        navigationPosition: 'right',
        //fixedElements: '#navigation-bar',
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
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: true,
        //normalScrollElements: '#element1, .element2',
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
        sectionSelector: '.section',
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
    $(function() {
    $('.slide').scrollex({
      enter: function() {

        // Set #foobar's background color to green when we scroll into it.
          $(this).css('opacity', 1);

      },
      leave: function() {

        // Reset #foobar's background color when we scroll out of it.
          $(this).css('opacity', 0);

      }
    });

    $('.cont').scrollex({
      enter: function() {
        $(this).css('animation', 'bounce 3s ease-out');
      }
    });

  }); // \\Scrollex
});
