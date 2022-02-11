jQuery(function($) {
	
	// Formspree
	var message = "";

	$(".button-success").on("click", function() {
		name = $("#name").val();
		address =$("#address").val();
		email = $("#email").val();
		phoneNumber = $("#number").val();
		message = $("#message").val();
		$.ajax({
			url: "https://formspree.io/f/mwkylglg", 
			method: "POST",
			data: {	
					Name: name,
					Address: address,
					Email: email,
					Phone: phoneNumber,
					Message: message
				},
			dataType: "json"
		});
		$(".form-elements").hide();
		$(".thankyou_message").fadeIn();
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
  
  // Price Calculator
  $(".dropDownCurrent").on("click", function(){
	if ($(".dropDownList").is(":hidden")) {
	  $(".dropDownList").slideDown();
	  $(".dropDownCurrentArrowIcon").addClass("spin");
	}
	else {
      $(".dropDownList").slideUp();
	  $(".dropDownCurrentArrowIcon").removeClass("spin");
	}
  }); 
  
  $(".dropDownListOption").on("click", function(){
	$(".dropDownCurrentArrowIcon").removeClass("spin");
    if ($(".greaterThanOneAcre").is(":visible")) {
	  $(".greaterThanOneAcre").hide();	
	}
  }); 
 
  // Up to 10,000 sqft (0.22 acres)
  $(".dropDownListOptionOne").on("click", function(){
	$(".dropDownListOption").removeClass("greenLabel");
	$(this).addClass("greenLabel");
	var listOption = $(this).text();
    $(".dropDownCurrentLabel").text(listOption);
	$(".priceCharts").css("display", "flex");
	$(".dropDownList").slideUp();
	$(".priceNumber").empty();
    $(".priceChartWeekly .priceNumber").append("$40");
	$(".priceChartBiWeekly .priceNumber").append("$60");
  });
  
  // Between 10,001 and 15,000 sqft (0.22 and 0.34 acres)
  $(".dropDownListOptionTwo").on("click", function(){
	$(".dropDownListOption").removeClass("greenLabel");
	$(this).addClass("greenLabel");
	var listOption = $(this).text();
    $(".dropDownCurrentLabel").text(listOption);
	$(".priceCharts").css("display", "flex");
	$(".dropDownList").slideUp();
	$(".priceNumber").empty();
    $(".priceChartWeekly .priceNumber").append("$45");
	$(".priceChartBiWeekly .priceNumber").append("$67.50");
  });
  
  // Between 15,001 and 20,000 sqft (0.34 and 0.45 acres)
  $(".dropDownListOptionThree").on("click", function(){
	$(".dropDownListOption").removeClass("greenLabel");
	$(this).addClass("greenLabel");
	var listOption = $(this).text();
    $(".dropDownCurrentLabel").text(listOption);
	$(".priceCharts").css("display", "flex");
	$(".dropDownList").slideUp();
	$(".priceNumber").empty();
    $(".priceChartWeekly .priceNumber").append("$50");
	$(".priceChartBiWeekly .priceNumber").append("$75");
  });
  
  // Between 20,001 and 25,000 sqft (0.45 and 0.57 acres)
  $(".dropDownListOptionFour").on("click", function(){
	$(".dropDownListOption").removeClass("greenLabel");
	$(this).addClass("greenLabel");
	var listOption = $(this).text();
    $(".dropDownCurrentLabel").text(listOption);
	$(".priceCharts").css("display", "flex");
	$(".dropDownList").slideUp();
	$(".priceNumber").empty();
    $(".priceChartWeekly .priceNumber").append("$55");
	$(".priceChartBiWeekly .priceNumber").append("$82.50");
  });
  
  // Between 25,001 and 30,000 sqft (0.57 and 0.68 acres)
  $(".dropDownListOptionFive").on("click", function(){
	$(".dropDownListOption").removeClass("greenLabel");
	$(this).addClass("greenLabel");
	var listOption = $(this).text();
    $(".dropDownCurrentLabel").text(listOption);
	$(".priceCharts").css("display", "flex");
	$(".dropDownList").slideUp();
	$(".priceNumber").empty();
    $(".priceChartWeekly .priceNumber").append("$60");
	$(".priceChartBiWeekly .priceNumber").append("$90");
  });
  
  // Between 30,001 and 35,000 sqft (0.68 and 0.80 acres)
  $(".dropDownListOptionSix").on("click", function(){
	$(".dropDownListOption").removeClass("greenLabel");
	$(this).addClass("greenLabel");
	var listOption = $(this).text();
    $(".dropDownCurrentLabel").text(listOption);
	$(".priceCharts").css("display", "flex");
	$(".dropDownList").slideUp();
	$(".priceNumber").empty();
    $(".priceChartWeekly .priceNumber").append("$65");
	$(".priceChartBiWeekly .priceNumber").append("$97.5");
  });
  
  // Between 35,001 and 40,000 sqft (0.80 and 0.91 acres)
  $(".dropDownListOptionSeven").on("click", function(){
	$(".dropDownListOption").removeClass("greenLabel");
	$(this).addClass("greenLabel");
	var listOption = $(this).text();
    $(".dropDownCurrentLabel").text(listOption);
	$(".priceCharts").css("display", "flex");
	$(".dropDownList").slideUp();
	$(".priceNumber").empty();
    $(".priceChartWeekly .priceNumber").append("$70");
	$(".priceChartBiWeekly .priceNumber").append("$105");
  });
  
  // Between 40,001 and 43,560 sqft (0.91 and 1 acre)
  $(".dropDownListOptionEight").on("click", function(){
	$(".dropDownListOption").removeClass("greenLabel");
	$(this).addClass("greenLabel");
	var listOption = $(this).text();
    $(".dropDownCurrentLabel").text(listOption);
	$(".priceCharts").css("display", "flex");
	$(".dropDownList").slideUp();
	$(".priceNumber").empty();
    $(".priceChartWeekly .priceNumber").append("$75");
	$(".priceChartBiWeekly .priceNumber").append("$112.50");
  });
  
  // Greater than 1 acre
  $(".dropDownListOptionNine").on("click", function(){
	$(".dropDownListOption").removeClass("greenLabel");
	$(this).addClass("greenLabel");
	var listOption = $(this).text();
    $(".dropDownCurrentLabel").text(listOption);
	$(".priceCharts").hide();
	$(".dropDownList").slideUp();
	$(".greaterThanOneAcre").slideDown();
  });

  // Header Animation
  $(".header").addClass("show animated slideInDown");
  
  // Banner Animation
  $(".banner .container").addClass("show animated fadeIn");
	
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
  
  $(".nav-6, .schedule, .confirmQuote").click(function() {
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