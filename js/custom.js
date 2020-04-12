(function ($) {
  "use strict";


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
      nav: true,
      navText : ['<i class="fas fa-chevron-circle-left"></i>','<i class="fas fa-chevron-circle-right"></i>']
    });
  }

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
    if (window_top > 50) {
      $('.navbar').css("background-color","white");
      $('.navbar').css("box-shadow","0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)");
      $('.nav-link').css("color","black")
      $('#mainlogo').attr("src","img/savour_orange_logo.png")
    } else {
      $('.navbar').css("background-color","transparent");
      $('.nav-link').css("color","white")
      $('#mainlogo').attr("src","img/savour_white_logo.png")
      $('.navbar').css("box-shadow","None");
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


var $form_B2B = $('form#formSubmit'),        
url_B2B = 'https://script.google.com/macros/s/AKfycbwDzceGJL6ZbTdQX6leKV7jVYtAtRK_dV102rLyEPtoMu1M6GqX/exec',
url_Merchant = 'https://script.google.com/a/savourapp.co/macros/s/AKfycbxPUPeC15i5nd9atUuAwZOY82pqEbwydMRwo5q5/exec'
var $form_merchant = $('form#formSubmitMerchant')

$('#submit-form').on('click', function(e) {
    console.log("form");
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url_B2B,
        method: "GET",
        dataType: "json",
        data: $form_B2B.serialize()
    }).success(
        alert("We Will Reach Out To You Soon!")
    );
});

}(jQuery));