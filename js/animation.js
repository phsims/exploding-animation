jQuery(window).bind("load", function() {

	var wheight = jQuery(window).height(),
	wwidth = jQuery(window).width(),
	trans3DDemo = jQuery("#trans3DDemo"), 
    trans3DBoxes = jQuery("#trans3DBoxes"),
    boxes = jQuery("#trans3DBoxes div"),  
    threeDTimeline = new TimelineLite(),
	bdy = jQuery('body'),
	head = jQuery('.header'),
	nav = jQuery('.navigation'),
	cnt = jQuery('#content'),
	foot = jQuery('.footer'),
	topB = jQuery('.top-bar'),
	bottomB = jQuery('.bottom-bar'),
	navBul = jQuery('#nav-bullet'),
	t3ddHeight = jQuery("#trans3DDemo").outerHeight(),
	centerImg= ((wheight - t3ddHeight) / 2).toFixed(0); 

	
	//jQuery('#trans3DDemo').attr('style',('margin-top:' + centerImg +'px;'));
	
	TweenLite.set(trans3DBoxes, {css:{transformPerspective:600, perspective:600, transformStyle:"preserve-3d"}}); 		

	threeDTimeline.fromTo(trans3DDemo, .05, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, immediateRender:true})             
	.add("z", "+=0.4"); 
	  
	  
	//random explosion effect	  
	boxes.each(function (index, element) {
	  threeDTimeline.to(element, 1, {css:{z:200,backgroundColor:Math.random() * 0xffffff, rotationX:getRandom(-360, 600), rotationY:getRandom(-360, -600), autoAlpha:0},delay:1.5}, "explode")
	  .to(trans3DDemo, 0.0001, {css:{autoAlpha:1}})
	  .to(trans3DBoxes, 0.0001, {css:{autoAlpha:1}})
	  .to(topB, 1, {css:{autoAlpha:1}}, "bar")
	  .to(head, 1, {css:{autoAlpha:1}}, "head")
	  .to(nav, 1, {css:{autoAlpha:1}}, "nav")
	  .to(cnt, 1, {css:{autoAlpha:1}})
	  .to(bottomB, 1, {css:{autoAlpha:1}}, "bar")
	  .to(foot, 1, {css:{autoAlpha:1}})  
	  .to(navBul, 1, {css:{autoAlpha:1}}, "head");
	  jQuery('body').attr('style',('height:auto;widthLauto;overflow:auto;'));
	}) ;
	

	//jQueryUI Slider
	function getRandom(max, min){
		return Math.floor(Math.random() * (1 + max - min) + min);
	}	
});