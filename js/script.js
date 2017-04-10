/* Store's User's First Name */
var name = "";
var email = "";
var password = "";
var coowners = "";
var member2name = "";
var member2email = "";
var phone = "";
$(document).ready(function () {

  //PAGE 1

  /* Function to move us from Page1 to Page2
  and also saves our name */
  page1_next = function() {
    /* Puts value from name text field into name var */
    name = $(".input-first-name").val();

    /* Assigns the name to all name placeholders*/
    $(".first-name").html(name);

    /* Show transition animation and switch pages*/
    $("#page1").slideUp(1000, function () {
      $("#page2").fadeIn(250, function () {
        $('.input-email-address').focus();
      });
    });
  }

  /* When the enter key is pressed, run our page_next function */
  $(".input-first-name").keypress(function (e) {
    if(e.which == 13) {
      page1_next();
    }
  });

  /* When the next button is clicked, run our page_next function */
  $(".next1").click(page1_next);

  //PAGE 2

  page2_next = function(){
    email = $(".input-email-address").val();
    $(".email-address").html(email);
    $("#page2").slideUp(1000, function () {
      $("#page3").fadeIn(250, function(){
        $('.input-co-owners').focus();
      });
    });
  }

  $(".input-email-address").keypress(function (e) {
    if(e.which == 13) {
      page2_next();
    }
  });
  $(".lets-go").click(page2_next);

  //PAGE 3

  page3_next = function (){
    coowners = $(".input-co-owners").val();

    //Iterate over the additional co-owners and insert HTML snippet
    for(var i=0; i<coowners; i++) {
      var memberNumber = i+2;
      $('#additional-member-input').append(
        '<p class="co-owner">Member #'+memberNumber+'</p>'+
        '<input type="text" class="input-member-name'+memberNumber+'"'+
        'placeholder="enter their first name" />'+
        '<input type="email" class="input-member-email'+memberNumber+'"'+
        'placeholder="email address" />');
    }

      $("#page3").slideUp(1000, function () {
        $("#page4").fadeIn(250, function () {
          $('.input-member-name2').focus();
        });
      });
    }

      $(".input-co-owners").keypress(function (e) {
        if(e.which == 13) {
          page3_next();
        }
      });

      $(".next2").click(page3_next);

      //Page 3 Exit Route

      page3_exit = function () {
        password = $(".input-password").val();
        $(".password").html(password);
        $("#page3").slideUp(1000, function () {
          $("#page-save").slideDown(1000, function () {
            $('.input-password').focus();
        });
      });
    }

      $(".exit-path").click(page3_exit);



    //PAGE 4

    page4_next = function (){
      $("#page4").slideUp(1000, function () {
        $("#page5").fadeIn(250, function(){
          $('.input-found-property').focus();

        $(".input-found-property").change(function () {
          $("#page5_second_half").show();
        });
      });
    });
  }

    $(".input-found-property").keypress(function (e) {
      if(e.which == 13) {
        page4_next();
      }
    });

    $(".next3").click(page4_next);

    //PAGE 5

    page5_next = function (){
      var TypeOfProduct = $('.input-loan-or-contract').val();

      if(TypeOfProduct == "home-loan") {
        go_to_loan_page();
      } else if (TypeOfProduct == "legal-contract") {
        go_to_contract_page();
      } else {
        alert("There's a bug!");
      }
    };

    go_to_loan_page = function () {
      $("#page5").slideUp(1000, function () {
        $("#home-loan-option").fadeIn(250);
      });
    }
    go_to_contract_page = function () {
      $("#page5").slideUp(1000, function () {
        $("#legal-contract-option").fadeIn(250);
      });
    }

    $(".input-phone-number").keypress(function (e) {
      if(e.which == 13) {
        page5_next();
      }
    });

    $(".lets-do-it").click(page5_next);
  });
