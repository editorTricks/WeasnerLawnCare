jQuery(function($) {
	
  // Accordion
  $(".question").click(function() {
    $(".answer").slideUp();
    if ($(this).next().is(":visible")) {
      $(this).next().slideUp();
      $(this).removeClass("active");
    } 
	else {
      $(this).next().slideDown();
      $('.question').removeClass("active");
      $(this).addClass("active");
    }
  });

  // Header Animation
  $(".header").addClass("show animated slideInDown");
  
  // Banner Animation
  $(".banner .container").addClass("show animated fadeIn");
  
  // Price Calculator
  $(".calculatorButton").on("click", function(){
	  
	// Clear Input Value When Button is Clicked  
	$('.calculatorInput').val('');
	
	// Apply Green Color to Buttons Accordingly
    if ($(this).hasClass("green")) {
      $(this).removeClass("green");
	} 
	else if (!$(this).hasClass("green")) {
	  $(this).parent().find(".calculatorButton").removeClass("green");
	  $(this).addClass("green");
	}
  });
  
  // Tip
  $(".tip").on("click", function(){
    if ($(".squareFeetCalculate").hasClass("green")) {
      $(".squareFeetCalculate").removeClass("green");
	  $(".acreCalculate").addClass("green");
	  $('.calculatorInput').val('');
	  $('.calculatorInput').attr('placeholder','2.6 acres');
	  $(this).empty();
    }
	else if ($(".acreCalculate").hasClass("green")) {
      $(".acreCalculate").removeClass("green");
	  $(".squareFeetCalculate").addClass("green");
	  $('.calculatorInput').val('');
	  $('.calculatorInput').attr('placeholder','23,750 square feet'); 
	  $(this).empty();
    }
  });
  
  // Change Placeholder
  $(".squareFeetCalculate").on("click", function() {
    $('.calculatorInput').attr('placeholder','23,750 square feet'); 
  });
  
  $(".acreCalculate").on("click", function() {
    $('.calculatorInput').attr('placeholder','2.6 acres'); 
  });
  
  // Mowing & Square Feet Buttons
  var disclaimer = "*The price above is only an estimate based on limited information. The actual cost may be slighty more or less depending on factors such as tree count, yard accessibility, topography, cut frequency, etc. We'll happily survey your yard and provide you with an exact cost to complete the job.";
	
  function calculate() {
	  
	// Input Box Value
	var inputValue = $(".calculatorInput").val();
	
	// Remove Results
	$(".results, .disclaimer, .tip").empty();
	
	// Remove Tip Animation
	$(".tip").append(tip).removeClass("animated shake");
	  
	// Mowing + Square Feet  
    if ($('.mowingCalculate').hasClass('green') && $('.squareFeetCalculate').hasClass('green')) {
		
	  var tip = "Your yard is equal to or bigger than 1 acre. Use " + "<div class='acreTip'>" + "'Acre'" + "</div>" + " instead of 'Square Feet' for an accurate estimate.";

	  if ((inputValue > 0) && (inputValue <= 5000)) {
        $(".results").append("$35*");
	    $(".disclaimer").append(disclaimer);
      }
	  else if ((inputValue > 5000) && (inputValue <= 10000)) {
        $(".results").append("$40*");
	    $(".disclaimer").append(disclaimer);
      }
	  else if ((inputValue > 10000) && (inputValue <= 15000)) {
        $(".results").append("$45*");
	    $(".disclaimer").append(disclaimer);
      }
	  else if ((inputValue > 15000) && (inputValue <= 20000)) {
        $(".results").append("$50*");
	    $(".disclaimer").append(disclaimer);
      }
	  else if ((inputValue > 20000) && (inputValue <= 25000)) {
        $(".results").append("$55*");
	    $(".disclaimer").append(disclaimer);
      }
	  else if ((inputValue > 25000) && (inputValue <= 30000)) {
        $(".results").append("$60*");
	    $(".disclaimer").append(disclaimer);
      }
	  else if ((inputValue > 30000) && (inputValue <= 35000)) {
        $(".results").append("$65*");
	    $(".disclaimer").append(disclaimer);
      }
	  else if ((inputValue > 35000) && (inputValue <= 40000)) {
        $(".results").append("$70*");
	    $(".disclaimer").append(disclaimer);
      }
	  else if ((inputValue > 40000) && (inputValue <= 43560)) {
        $(".results").append("$75*");
	    $(".disclaimer").append(disclaimer);
	  }
	  else if (inputValue > 43560) {
        $(".tip").append(tip).addClass("animated shake");
      }
    }
	
	// Mowing + Acre
	if ($('.mowingCalculate').hasClass('green') && $('.acreCalculate').hasClass('green')) {
	
      var tip = "Your yard is less than 1 acre. Use " + "<div class='squareFeetTip'>" + "'Square Feet'" + "</div>" + " instead of 'Acre'.";
		
      if ((inputValue > 0) && (inputValue < 1)) {
        $(".tip").append(tip).addClass("animated shake");
      }
	  else if ((inputValue >= 1) && (inputValue <= 2)) {
        var acreCost60 = 60*inputValue;
        $(".results").append("$" + acreCost60 + "*");
		$(".disclaimer").append(disclaimer);
      }
	  else if ((inputValue >= 2.0) && (inputValue <= 3)) {
        var acreCost55 = 55*inputValue;
        $(".results").append("$" + acreCost55 + "*");
		$(".disclaimer").append(disclaimer);
      }
	  else if (inputValue > 3) {
        var acreCost50 = 50*inputValue;
		var acreCost50Comma = acreCost50.toLocaleString();
        $(".results").append("$" + acreCost50Comma + "*");
		$(".disclaimer").append(disclaimer);
      }
    }
	
	// Leaf + Square Feet
	if ($('.leafCalculate').hasClass('green') && $('.squareFeetCalculate').hasClass('green')) {
		
	  var tip = "Your yard is equal to or bigger than 1 acre. Use " + "<div class='acreTip'>" + "'Acre'" + "</div>" + " instead of 'Square Feet' for an accurate estimate.";
      
	  if ((inputValue > 0) && (inputValue <= 43560)) {
	    var acreDivide = inputValue/43560;
		var leafSqaureFeetCost = Math.trunc(acreDivide*461.538461538);
		$(".results").append("$" + leafSqaureFeetCost + "*");
		$(".disclaimer").append(disclaimer);
	  }
	  else if (inputValue > 43560) {
        $(".tip").append(tip).addClass("animated shake");
      }
	  
    }
	
	// Leaf + Acre
	if ($('.leafCalculate').hasClass('green') && $('.acreCalculate').hasClass('green')) {
		
      var tip = "Your yard is less than 1 acre. Use " + "<div class='squareFeetTip'>" + "'Square Feet'" + "</div>" + " instead of 'Acre'.";
      
	  if ((inputValue > 0) && (inputValue < 1)) {
        $(".tip").append(tip).addClass("animated shake");
      }
	  else if (inputValue >= 1) {
		var leafAcreCost = Math.trunc(inputValue*461.538461538);
		var leafAcreCostComma = leafAcreCost.toLocaleString();
		$(".results").append("$" + leafAcreCostComma + "*");
		$(".disclaimer").append(disclaimer);
      }
	  
    }
  }
  
  // Calculate When a Button is Clicked
  $(".calculatorButton").on("click", function(){
    calculate();
  });
  
  // Calculate When a Number is Added
  $(".calculatorInput").on("keyup", function() {
    calculate();
  });
  
  calculate();
  
  // Mobile Navigation
  $('.hamburger').on('click', function(){
    $('.mobileMenu, .mobileNavigation').toggleClass('slide');
    $('.hamburger span').toggleClass('fade');
    $('.hamburger').toggleClass('rotate');
  });
  
  // Mobile Header Scroll Animation
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
      $(".mobileHeader").addClass("scroll");
    }
	else {
      $(".mobileHeader").removeClass("scroll");
    }
  });
  
  // Scroll To Top Button
  if ($(window).width() > 767) {
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();

      if (scroll >= 1) {
        $(".scrollButton").removeClass("animated zoomOut");
        $(".scrollButton").css('display', 'flex');
        $(".scrollButton").addClass("animated zoomIn");
      } else {
        $(".scrollButton").removeClass("animated zoomIn");
        $(".scrollButton").addClass("animated zoomOut");
      }
    });

    $(".scrollButton").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  }
  
  // Smooth Scrolling Navigation
  $(".logo").click(function() {
    $('html, body').animate({scrollTop: 0 },'slow');
  });

  $(".nav-1").click(function() {
    $('html,body').animate({scrollTop: $(".services").offset().top + -140},'slow');
  });
  
  $(".nav-2").click(function() {
    $('html,body').animate({scrollTop: $(".locations").offset().top + -140},'slow');
  });
  
  $(".nav-3").click(function() {
    $('html,body').animate({scrollTop: $(".priceCalculator").offset().top + -60},'slow');
  });
  
  $(".nav-4").click(function() {
    $('html,body').animate({scrollTop: $(".aboutImage").offset().top + -60},'slow');
  });
  
  $(".nav-5").click(function() {
    $('html,body').animate({scrollTop: $(".frequentlyAskedQuestions").offset().top + -60},'slow');
  });
  
  $(".nav-6, .schedule").click(function() {
    $('html,body').animate({scrollTop: $(".contact").offset().top + -60},'slow');
  });
  
  // Mobile Smooth Scrolling Navigation
  $(".mobileMenu li a").on("click", function(){
    $('.mobileMenu, .mobileNavigation').removeClass('slide');
    $('.hamburger span').removeClass('fade');
    $('.hamburger').removeClass('rotate');
  });
  
  // Sticky Header
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
	
    if (scroll >= 34) {
      $(".header, .header .container, .logoNavigation img").addClass("stick");
    }
	else {
      $(".header, .header .container, .logoNavigation img").removeClass("stick");
	}
  });
  
});