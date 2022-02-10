jQuery(function($) {
	
	var message = "";

	$(".button-success").on("click", function() {
		message = $("#message").serialize();
		$.ajax({
			url: "https://formspree.io/f/mwkylglg", 
			method: "POST",
			data: {message: message},
			dataType: "json"
		});
		alert('Thanks for the email, we\'ll be in touch promptly.');
		return false;
	});
	
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
  
  // Change Placeholder
  $(".squareFeetCalculate").on("click", function() {
    $('.calculatorInput').attr('placeholder','23,750 square feet'); 
  });
  
  $(".acreCalculate").on("click", function() {
    $('.calculatorInput').attr('placeholder','0.24 acres'); 
  });
  
  // Mowing & Square Feet Buttons
  var disclaimer = "*The price above is only an estimate based on limited information. The actual cost may be slighty more or less depending on factors such as tree count, yard accessibility, topography, time of the year, etc. We'll happily survey your yard and provide you with an exact cost to complete the job.";
	
  function calculate() {
	
	// Remove Results
	$(".results, .disclaimer").empty();
	
	// Weekly Mowing + Square Feet
    function weeklySquareFeetCost() {
		
		var tip = "Unfortunately, we do not provide mowing services for lot sizes greater than 1 acre at this time.";
		
		// Input Box Value
	    var inputValue = $(".calculatorInput").val();
		var convertedInputValue = (inputValue / 43560);
		var convertedInputValueComma = convertedInputValue.toLocaleString();
		$(".noteConversion").empty();
		
		// Pricing		
		if ((inputValue > 0) && (inputValue <= 5000)) {
          $(".results").append("$40*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Acres");
        }
	    else if ((inputValue > 5000) && (inputValue <= 10000)) {
          $(".results").append("$40*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Acres");
        }
	    else if ((inputValue > 10000) && (inputValue <= 15000)) {
          $(".results").append("$45*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Acres");
        }
	    else if ((inputValue > 15000) && (inputValue <= 20000)) {
          $(".results").append("$50*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Acres");
        }
	    else if ((inputValue > 20000) && (inputValue <= 25000)) {
          $(".results").append("$55*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Acres");
        }
	    else if ((inputValue > 25000) && (inputValue <= 30000)) {
          $(".results").append("$60*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Acres");
        }
	    else if ((inputValue > 30000) && (inputValue <= 35000)) {
          $(".results").append("$65*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Acres");
        }
	    else if ((inputValue > 35000) && (inputValue <= 40000)) {
          $(".results").append("$70*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Acres");
        }
	    else if ((inputValue > 40000) && (inputValue <= 43560)) {
          $(".results").append("$75*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Acres");
	    }
	    else if (inputValue > 43560) {
          $(".tip").append(tip).addClass("animated shake");
        }
		
	}
	
	// Weekly Mowing + Acre
	function weeklyAcreCost() {
		
		var tip = "Unfortunately, we do not provide mowing services for lot sizes greater than 1 acre at this time.";
		
		// Input Box Value
	    var inputValue = $(".calculatorInput").val();
		var convertedInputValue = (inputValue * 43560);
		var convertedInputValueComma = convertedInputValue.toLocaleString();
		$(".noteConversion").empty();
		
		// Pricing		
		if ((convertedInputValue > 0) && (convertedInputValue <= 5000)) {
          $(".results").append("$40*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Square Feet");
        }
	    else if ((convertedInputValue > 5000) && (convertedInputValue <= 10000)) {
          $(".results").append("$40*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Square Feet");
        }
	    else if ((convertedInputValue > 10000) && (convertedInputValue <= 15000)) {
          $(".results").append("$45*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Square Feet");
        }
	    else if ((convertedInputValue > 15000) && (convertedInputValue <= 20000)) {
          $(".results").append("$50*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Square Feet");
        }
	    else if ((convertedInputValue > 20000) && (convertedInputValue <= 25000)) {
          $(".results").append("$55*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Square Feet");
        }
	    else if ((convertedInputValue > 25000) && (convertedInputValue <= 30000)) {
          $(".results").append("$60*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Square Feet");
        }
	    else if ((convertedInputValue > 30000) && (convertedInputValue <= 35000)) {
          $(".results").append("$65*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Square Feet");
        }
	    else if ((convertedInputValue > 35000) && (convertedInputValue <= 40000)) {
          $(".results").append("$70*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Square Feet");
        }
	    else if ((convertedInputValue > 40000) && (convertedInputValue <= 43560)) {
          $(".results").append("$75*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Square Feet");
	    }
	    else if (convertedInputValue > 43560) {
          $(".tip").append(tip).addClass("animated shake");
        }

	}
	
	// Bi-Weekly Mowing + Square Feet
    function biWeeklySquareFeetCost() {
		
		var tip = "Unfortunately, we do not provide mowing services for lot sizes greater than 1 acre at this time.";
		
		// Input Box Value
	    var inputValue = $(".calculatorInput").val();
		
		// Pricing		
		if ((inputValue > 0) && (inputValue <= 5000)) {
          $(".results").append("$60*");
	      $(".disclaimer").append(disclaimer);
        }
	    else if ((inputValue > 5000) && (inputValue <= 10000)) {
          $(".results").append("$60*");
	      $(".disclaimer").append(disclaimer);
        }
	    else if ((inputValue > 10000) && (inputValue <= 15000)) {
          $(".results").append("$67.50*");
	      $(".disclaimer").append(disclaimer);
        }
	    else if ((inputValue > 15000) && (inputValue <= 20000)) {
          $(".results").append("$75*");
	      $(".disclaimer").append(disclaimer);
        }
	    else if ((inputValue > 20000) && (inputValue <= 25000)) {
          $(".results").append("$82.50*");
	      $(".disclaimer").append(disclaimer);
        }
	    else if ((inputValue > 25000) && (inputValue <= 30000)) {
          $(".results").append("$90*");
	      $(".disclaimer").append(disclaimer);
        }
	    else if ((inputValue > 30000) && (inputValue <= 35000)) {
          $(".results").append("$97.50*");
	      $(".disclaimer").append(disclaimer);
        }
	    else if ((inputValue > 35000) && (inputValue <= 40000)) {
          $(".results").append("$105*");
	      $(".disclaimer").append(disclaimer);
        }
	    else if ((inputValue > 40000) && (inputValue <= 43560)) {
          $(".results").append("$112.50*");
	      $(".disclaimer").append(disclaimer);
	    }
	    else if (inputValue > 43560) {
          $(".tip").append(tip).addClass("animated shake");
        }
		
	}
	
	// Bi-Weekly Mowing + Acre
	function biWeeklyAcreCost() {
		
		var tip = "Unfortunately, we do not provide mowing services for lot sizes greater than 1 acre at this time.";
		
		// Input Box Value
	    var inputValue = $(".calculatorInput").val();
		var convertedInputValue = (inputValue * 43560);
		var convertedInputValueComma = convertedInputValue.toLocaleString();
		$(".noteConversion").empty();
		
		// Pricing		
		if ((convertedInputValue > 0) && (convertedInputValue <= 5000)) {
          $(".results").append("$60*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Square Feet");
        }
	    else if ((convertedInputValue > 5000) && (convertedInputValue <= 10000)) {
          $(".results").append("$60*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Square Feet");
        }
	    else if ((convertedInputValue > 10000) && (convertedInputValue <= 15000)) {
          $(".results").append("$67.50*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Square Feet");
        }
	    else if ((convertedInputValue > 15000) && (convertedInputValue <= 20000)) {
          $(".results").append("$75*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Square Feet");
        }
	    else if ((convertedInputValue > 20000) && (convertedInputValue <= 25000)) {
          $(".results").append("$82.50*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Square Feet");
        }
	    else if ((convertedInputValue > 25000) && (convertedInputValue <= 30000)) {
          $(".results").append("$90*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Square Feet");
        }
	    else if ((convertedInputValue > 30000) && (convertedInputValue <= 35000)) {
          $(".results").append("$97.50*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Square Feet");
        }
	    else if ((convertedInputValue > 35000) && (convertedInputValue <= 40000)) {
          $(".results").append("$105*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Square Feet");
        }
	    else if ((convertedInputValue > 40000) && (convertedInputValue <= 43560)) {
          $(".results").append("$112.50*");
	      $(".disclaimer").append(disclaimer);
		  $(".noteConversion").append(convertedInputValueComma + " Square Feet");
	    }
	    else if (convertedInputValue > 43560) {
          $(".tip").append(tip).addClass("animated shake");
        }

	}
	
	// Mowing Weekly Activation	
    if ($('.mowingWeekly').hasClass('green')) {
		
	  if ($('.squareFeetCalculate').hasClass('green')) {
		weeklySquareFeetCost();
	  }
	  else if ($('.acreCalculate').hasClass('green')) {
		weeklyAcreCost();
	  }
	  
    }
	
	// Mowing Bi-Weekly Activation
	else if ($('.mowingBiWeekly').hasClass('green')) {
		
	  if ($('.squareFeetCalculate').hasClass('green')) {
		biWeeklySquareFeetCost();
	  }
	  else if ($('.acreCalculate').hasClass('green')) {
		biWeeklyAcreCost();
	  }
	  
    }
	
	// Convert Square Feet to Acre
	if ($('.squareFeetCalculate').hasClass('green')) {
	  var inputValue = $(".calculatorInput").val();
      $(".acreCalculate").on("click", function(){
	    var convertedInputValue = (inputValue / 43560);
		$(".calculatorInput").val(convertedInputValue);
	  });
	  $(".squareFeetCalculate").on("click", function(){
	    var convertedInputValue = (inputValue * 43560);
		$(".calculatorInput").val(convertedInputValue);
	  });
	}
	
	// Convert Acre to Square Feet
	if ($('.acreCalculate').hasClass('green')) {
	  var inputValue = $(".calculatorInput").val();
      $(".squareFeetCalculate").on("click", function(){
	    var convertedInputValue = (inputValue * 43560);
		$(".calculatorInput").val(convertedInputValue);
	  });
	  $(".acreCalculate").on("click", function(){
	    var convertedInputValue = (inputValue / 43560);
		$(".calculatorInput").val(convertedInputValue);
	  });
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