(function ($) {
  "use strict";

  //modal
  // Get the modal
  var modal = $('#blurModal');

  // Get the main container and the body
  var body = $('body');
  var container = $('#blurContainer');

  // Get the open button
  var btnOpen = $(".modalBtn");

  // Get the close button
  var btnClose = $("#closeModal");

  // Open the modal
  btnOpen.click(function() {

      modal.attr("class","Modal is-visuallyHidden");
      setTimeout(function() {
        container.attr("class","MainContainer is-blurred");
        modal.attr("class","Modal");
      }, 100);
      container.parent().attr("class","ModalOpen");
  });

  // Close the modal
  btnClose.click(function() {
      modal.attr("class","Modal is-hidden is-visuallyHidden");
      body.attr("class","");
      container.attr("class","MainContainer");
      container.parent().attr("class","");
  });
  
  function close(){
    modal.attr("class","Modal is-hidden is-visuallyHidden");
      body.attr("class","");
      container.attr("class","MainContainer");
      container.parent().attr("class","");
  }

  

  // When the user clicks anywhere outside of the modal, close it
  $(window).click(function(event) {
    
      //console.log(event);
      var target = event.target;
      if (target.id == "blurModal") {
          modal.attr("class","Modal is-hidden");
          body.attr("class","");
          container.attr("class","MainContainer");
          container.parent().attr("class","");
      }
  });

  //counting animation
  $('.counter').counterUp({
    delay: 15,
    time: 3000
  });
  $('.counter').addClass('animated fadeInDownBig');
  $('.label-bottom').addClass('animated fadeIn');

  // var client_logo = client_logo_slider

  var client_logo = $('.client_logo_slider')
  if(client_logo.length){
    client_logo.owlCarousel({
      items: 3,
      loop: false,
      responsive: {
        0: {
          items: 2,
          margin: 15,
          autoplay: true
        },
        600: {
          items: 2,
          margin: 15,
          autoplay: true
        },
        991: {
          items: 4,
          margin: 15,
        },
        1200: {
          items: 4,
          margin: 15,
        }
      }             
    });
  }



  var review = $('.review_slider');
  if (review.length) {
    review.owlCarousel({
      autoplay: true,
      autoPlaySpeed: 5000,
      items: 1,
      loop: true,
      dots: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: false,
      center:true,
      //navText : ['<i class="fas fa-chevron-circle-left"></i>','<i class="fas fa-chevron-circle-right"></i>']
    });
  }

  // var imageDataStructure = {0:"img/icon/computer.svg",1:"img/icon/sync.svg",2:"img/icon/rating.svg"}
  // var counter = 0
  // $('.owl-next').click(function(e){
  //   counter ++;
  //   if(counter>2){
  //     counter=0          
  //   } 
  //   $('#sliderimage').attr("src",imageDataStructure[counter]);

  // });

  // $('.owl-prev').click(function(e){
  //   counter--;
  //   if(counter<0){
  //     counter=2
  //   }
  //   $('#sliderimage').attr("src",imageDataStructure[counter]);     
  // });


  $(document).ready(function() {
    $('select').each(function(){
      var $this = $(this), numberOfOptions = $(this).children('option').length;
    
      $this.addClass('select-hidden'); 
      $this.wrap('<div class="select"></div>');
      $this.after('<div class="select-styled"></div>');
  
      var $styledSelect = $this.next('div.select-styled');
      $styledSelect.text($this.children('option').eq(0).text());
    
      var $list = $('<ul />', {
          'class': 'select-options'
      }).insertAfter($styledSelect);
    
      for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
              text: $this.children('option').eq(i).text(),
              rel: $this.children('option').eq(i).val()
          }).appendTo($list);
      }
    
      var $listItems = $list.children('li');
  
   
    
    $styledSelect.click(function(e) {
       if($('.select-options').is(':visible')) {
          e.stopPropagation();
          $styledSelect.text($(this).text()).removeClass('active');
          $this.val($(this).attr('rel'));
        
          $list.hide();
          //console.log($this.val());   
  
       } else {
          e.stopPropagation();
          $('div.select-styled.active').each(function(){
              $(this).removeClass('active').next('ul.select-options').hide();
          });
          $(this).toggleClass('active').next('ul.select-options').toggle();
       }//end if
      });
    
      $listItems.click(function(e) {
          e.stopPropagation();
          $styledSelect.text($(this).text()).removeClass('active');
          $this.val($(this).attr('rel'));
          $list.hide();
          //console.log($this.val());
      });
      
      $(document).click(function() {
          $styledSelect.removeClass('active');
          $list.hide();
      });
  
    });    
    });
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    var window_width = $(window).width();
    if (window_top > 50 && window_width>990) {
      $('.navbar').css("background-color","white");
      $('.navbar').css("box-shadow","0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)");
      $('.nav-link').css("color","black");
      $('#mainlogo').attr("src","img/savour_orange_logo.png");
      $('#contact_request').css("border","1px solid #ff4800");
    } else {
      $('.navbar').css("background-color","white");
      $('#index-nav').css("background-color","transparent");
      $('.nav-link').css("color","white");
      $('#mainlogo').attr("src","img/savour_white_logo.png");
      $('.navbar').css("box-shadow","None");
      $('#contact_request').css("border","none");
      $('#blog_mainlogo').attr("src","../img/savour_orange_logo.png");
      $('#contact_mainlogo').attr("src","img/savour_orange_logo.png");
      $('.black_navlink').css("color","black");
    }
  });

  $('.gallery_img').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
  });

// Search Toggle
  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $('#search_input_box').slideUp(500);
  });

//------- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

  $(document).ready(function() {

    // Gets the video src from the data-src on each button
    
    var $videoSrc;  
    $('.btn_3').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    console.log($videoSrc);
    
      
      
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',$videoSrc+ "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"); 
    })

    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',$videoSrc); 
    }) 
        
    // document ready  
  });


var $form = $('form#formSubmit'),        
url = 'https://script.google.com/macros/s/AKfycbxry-Y-gYQgaG9x-VJ70_5eWWpdwJP7n4Xx7k4JpjrqJd7Amw_j/exec'

$('#submit-form').on('click', function(e) {
    console.log("form");
    e.preventDefault();
    if(! $form.valid()) return false;
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serialize()
    }).success(
        alert("We Will Reach Out To You Soon!"),
        $form[0].reset()
    );
});

var $signup = $('form#signup_form'),        
url_signup = 'https://script.google.com/macros/s/AKfycbwhCaedXTAR3WMZoByskjIuMFmHSPErNCvp_Q-qe1VhmS9uoGB2/exec'

$('#submit_signup').on('click', function(e) {
    console.log("form");
    e.preventDefault();
   
    var jqxhr = $.ajax({
        url: url_signup,
        method: "GET",
        dataType: "json",
        data: $signup.serialize()
    }).success(
        alert("We Will Reach Out To You Soon!"),
        close()
    );
});

var $newsletter = $('form#newsletter'),        
url_newsletter = 'https://script.google.com/macros/s/AKfycbz6KmnVk79_QjG5i5Tn5FfY8ashM4nsKblo1c_wczMoybG9SZU/exec'

$('#submit_newsletter').on('click', function(e) {
    console.log("form");
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url_newsletter,
        method: "GET",
        dataType: "json",
        data: $newsletter.serialize()
    }).success(
        alert("Thank You For Subscribing!"),
        $newsletter[0].reset()
    );
});

}(jQuery));