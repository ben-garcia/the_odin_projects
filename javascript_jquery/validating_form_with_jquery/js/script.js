$(document).ready(function() {

  $("#form").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      emailConfirmation: {
        required: true,
        equalTo: "#email"
      },
      country: {
        maxlength: 5
      },
      zipCode: {
        required: true,
        digits: true,
        minlength: 5,
        maxlength: 5
      },
      password: {
        required: true,
        minlength: 6
      },
      passwordConfirmation: {
        required: true,
        equalTo: "#password"
      }
    },
    messages: {
      email: {
        required: "Email field cannot be left black",
        email: "Email must be present to continue"
      },
      emailConfirmation: {
        equalTo: "Make sure this field matches the field above"
      },
      country: {
        maxlength: "Country cannot exceed 2 letters"
      },
      zipCode: {
        required: "Dont forget your zip code",
        digits: "Zip code must be a number",
        minlength: "Minimun of 5 digits are required",
        maxlength: "Zip code canont exceed 5 digits"
      },
      password: {
        required: "Must enter a password",
        minlength: "Password must be at least 6 characters"
      },
      passwordConfirmation: {
        required: "password confimation required",
        equalTo: "Both passwords must match"
      }
    },
    errorPlacement: function(error, element) {
      error.appendTo(element.parent());
      $(error).css({
        color: "red",
        position: "relative",
        left: "460px"        
      });
      $(element).addClass("invalid");
    }

  });

});
