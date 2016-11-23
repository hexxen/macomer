$(document).foundation()
{
	var rdy = false;

	$('.autoplay').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		adaptiveHeight: false
	});

	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: true,
		anchors:['firstPage', 'secondPage'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : false,
		paddingTop: '0em',
		paddingBottom: '0px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		//events
		onLeave: function(index, nextIndex, direction){
			if (index==1) {
				$(".circle").velocity({
    				scale: 0
					},{
					duration: 0
				});

				$('.logocontainer').velocity({
					translateZ: 0, 
					top: "5%"
				},{
					duration: 400
				});
			
			}
			else if (nextIndex==1){				
				$('.logocontainer').velocity({
					translateZ: 0, 
					top: "46%"
					},{
					duration: 400
				});
			};
			
			if(index==2){
				$(".circle").velocity({
    				scale: 0
					},{
					duration: 400
				});

				$(".tasfialogo").velocity({opacity: 0},{duration:300});

///////////////////////////////////////////////////////////////////////////////////////////////////////////

				
				$('#imgone').velocity({
					translateZ: 0, 
					left: "-10%",
					right: "100%",
					opacity: 0
				},{
					duration: 200,
					easing: "easeOutCubic"
				}); 



				$('#imgtwo').velocity({
					translateZ: 0, 
					left: "-10%",
					right: "100%",
					opacity: 0
				},{
					duration: 200,
					easing: "easeOutCubic",
					delay: 50
				});



				$('#imgthree').velocity({
					translateZ: 0, 
					left: "-10%",
					right: "100%",
					opacity: 05				},{
					duration: 200,
					easing: "easeOutCubic",
					delay: 100
				}); 

///////////////////////////////////////////////////////////////////////////////////////////////////////////


				$('#imgfour').velocity({
					translateZ: 0, 
					left: "70%",
					right: "15%",
					opacity: 0
				},{
					duration: 200,
					easing: "easeOutCubic"
				}); 



				$('#imgfive').velocity({
					translateZ: 0, 
					left: "80%",
					right: "5%",
					opacity: 0
				},{
					duration: 200,
					easing: "easeOutCubic",
					delay: 50
				});



				$('#imgsix').velocity({
					translateZ: 0, 
					left: "70%",
					right: "15%",
					opacity: 0
				},{
					duration: 600,
					easing: "easeOutCubic",
					delay: 100
				}); 


				rdy=false;


			};

		},
		afterLoad: function(anchorLink, index){
			if (index==1) {
				$(".circle").velocity({
    				scale: 0
					},{
					duration: 0
				});
			};

			if (index==2) {
				console.log("section 2: left = "+$('#imgone').css("left"));


				$(".circle").velocity({
    				scale: 1
					},{
					duration: 400
				});

				$(".tasfialogo").velocity({opacity: 1},{duration:400,delay:400});

				setTimeout(function(){
///////////////////////////////////////////////////////////////////////////////////////////////////////////

				
				$('#imgone').velocity({
					translateZ: 0, 
					left: "10%",
					right: "75%",
					opacity: 1
				},{
					duration: 600,
					easing: "easeOutCubic"
				}); 

				setTimeout(function(){
					$('#imgone').find('.text').velocity("transition.slideUpIn",700);
					console.log("done:      left = "+$('#imgone').css("left"));
				},700);




				$('#imgtwo').velocity({
					translateZ: 0, 
					left: "5%",
					right: "80%",
					opacity: 1
				},{
					duration: 600,
					easing: "easeOutCubic",
					delay: 200
				});

				setTimeout(function(){
					$('#imgtwo').find('.text').velocity("transition.slideUpIn",700);
				},700);
				



				$('#imgthree').velocity({
					translateZ: 0, 
					left: "10%",
					right: "75%",
					opacity: 1
				},{
					duration: 600,
					easing: "easeOutCubic",
					delay: 600
				}); 

				setTimeout(function(){
					$('#imgthree').find('.text').velocity("transition.slideUpIn",700);
				},700);



///////////////////////////////////////////////////////////////////////////////////////////////////////////



				$('#imgfour').velocity({
					translateZ: 0, 
					left: "70%",
					right: "15%",
					opacity: 1
				},{
					duration: 600,
					easing: "easeOutCubic"
				}); 

				setTimeout(function(){
					$('#imgfour').find('.text').velocity("transition.slideUpIn",700);
				},700);




				$('#imgfive').velocity({
					translateZ: 0, 
					left: "80%",
					right: "5%",
					opacity: 1
				},{
					duration: 600,
					easing: "easeOutCubic",
					delay: 200
				});

				setTimeout(function(){
					$('#imgfive').find('.text').velocity("transition.slideUpIn",700);
				},700);
				



				$('#imgsix').velocity({
					translateZ: 0, 
					left: "70%",
					right: "15%",
					opacity: 1
				},{
					duration: 600,
					easing: "easeOutCubic",
					delay: 600
				}); 

				setTimeout(function(){
					$('#imgsix').find('.text').velocity("transition.slideUpIn",700);
				},700);

				rdy=true;
///////////////////////////////////////////////////////////////////////////////////////////////////////////
				},500);
			};
		},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});

	

	infos		=	document.querySelectorAll(".info");
	thumbnails	=	document.querySelectorAll(".imgwrap");

	for (var i = 0;  i<thumbnails.length; i++) {
		console.log(i);
		$(thumbnails[i]).on('mouseenter',{i:i},revelo);
		$(thumbnails[i]).on('mouseleave',{i:i},evanesco);
		$(thumbnails[i]).on('click',{i:i},details);
	};

	function revelo(index){
		if(rdy){
			var x=index.data.i;
			console.log("mouseenter  "+x);
			//$(infos[x]).css("opacity",1);
			//$(infos[x]).velocity({opacity: 1},{duration:100});
			$(".tasfialogo").velocity("stop");
			$(".tasfialogo").velocity({opacity: 0},{duration:100});
			$(thumbnails[x]).velocity({
    			scale: 1.3
			},{
				duration: 200
			});
			$(infos[x]).velocity("transition.expandIn",600);
		};
	};

	function evanesco(index){
		if(rdy){
			var x=index.data.i;
			console.log("mouseenter  "+x);
			//$(infos[x]).velocity({opacity: 0},{duration:100});
			$(infos[x]).velocity("transition.shrinkOut",200);
			$(".tasfialogo").velocity({opacity: 1},{duration:200,delay:600});
			$(thumbnails[x]).velocity({
    			scale: 1
			},{
				duration: 200
			});
		};
	};


	function details(index){
		if(rdy){

		};
	}




/*
	$(window).scroll(function(e){
		if (active===2) {
			sectiontwo();
		};		
	});

	function sectiontwo(){
	  var scrolled = $(window).scrollTop();
	  $('.one').css('background-position','center ' + -(scrolled*0.35)+'px');
	  $('.two').css('background-position','center ' + -(scrolled*0.35)+'px');
	}

	var sectiontwo = function(){
		var sections 
	}

*/

	

}