$(document).ready(function () {
  $("#em_valid").hide();
  let emailError = true;
  $("#email").keyup(function () {
    validateEmail();
  });
  $("#un_valid").hide();
  let usernameError = true;
  $("#username").keyup(function () {
    validateUsername();
  });
  $("#pw_valid").hide();
  let passwordError = true;
  $("#password").keyup(function () {
    validatePassword();
  });

  function validateEmail() {
    let regex = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
    let emailValue = $("#email").val();
    if (emailValue.length == "") {
      $("#em_valid").show();
      $("#em_valid").html("**email is empty");
      emailError = false;
      return false;
    } else if (!regex.test(emailValue)) {
      $("#em_valid").show();
      $("#em_valid").html(
        "Email must end with @northeastern.edu and not contain special characters"
      );
      emailError = false;
      return false;
    } else {
      emailError = true;
      $("#em_valid").hide();
    }
  }

  function specialCharacters(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }

  function validateUsername() {
    let usernameValue = $("#username").val();
    if (usernameValue.length == "") {
      $("#un_valid").show();
      usernameError = false;
      return false;
    } else if (usernameValue.length < 3 || usernameValue.length > 20) {
      $("#un_valid").show();
      $("#un_valid").html("**length of username must be between 3 and 20");
      usernameError = false;
      return false;
    } else if (specialCharacters(usernameValue)) {
      $("#un_valid").show();
      $("#un_valid").html(
        "**username has special characters,must contain only letters and numbers"
      );
      usernameError = false;
      return false;
    } else {
      usernameError = true;
      $("#un_valid").hide();
    }
  }

  function validatePassword() {
    let passwordValue = $("#password").val();
    let regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?!.*\s).{8,32}$/;
    let regex1 = /.*[a-z].*/;
    let regex2 = /.*[A-Z].*/;
    let regex3 = /.*[!@#$%^&*(),.?":{}|<>].*/;
    let regex4 = /.*[0-9].*/;

    if (passwordValue.length == "") {
      $("#").show();
      $("#pw_valid").html("**password is empty");
      passwordError = false;
      return false;
    } else if (
      (passwordValue.length > 0 && passwordValue.length < 8) ||
      passwordValue.length > 32
    ) {
      $("#pw_valid").show();
      $("#pw_valid").html("**length of your password must be between 8 and 32");
      $("#pw_valid").css("color", "red");
      passwordError = false;
      return false;
    } else if (!regex1.test(passwordValue)) {
      $("#pw_valid").show();
      $("#pw_valid").html(
        "Password must have atleast one small letter between a-z"
      );
      passwordError = false;
      return false;
    } else if (!regex2.test(passwordValue)) {
      $("#pw_valid").show();
      $("#pw_valid").html(
        "Password must have atleast one capital letter between A-Z"
      );
      passwordError = false;
      return false;
    } else if (!regex3.test(passwordValue)) {
      $("#pw_valid").show();
      $("#pw_valid").html("Password must have atleast one special character");
      passwordError = false;
      return false;
    } else if (!regex4.test(passwordValue)) {
      $("#pw_valid").show();
      $("#pw_valid").html("Password must have atleast one number ");
      passwordError = false;
      return false;
    } else if (!regex.test(passwordValue)) {
      $("#pw_valid").show();
      $("#pw_valid").html("Password must have not have spaces");
      $("#pw_valid").css("color", "red");
      passwordError = false;
      return false;
    } else {
      passwordError = true;
      $("#pw_valid").hide();
    }
  }

  $("#submit").click(function () {
    validateEmail();
    validatePassword();
    validateUsername();
    if (usernameError == true && passwordError == true && emailError == true) {
      window.location.href = "Calculator.html";
      return false;
    } else {
      return false;
    }
  });
});

$(document).ready(function () {
  const calculate = (num1, num2, operator) => {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  };

  $("#add").click(function () {
    const num1 = parseFloat($("#num1").val());
    const num2 = parseFloat($("#num2").val());
    const operator = "+";
    const result = calculate(num1, num2, operator);
    $("#result").val(result);
  });

  $("#subtract").click(function () {
    const num1 = parseFloat($("#num1").val());
    const num2 = parseFloat($("#num2").val());
    const operator = "-";
    const result = calculate(num1, num2, operator);
    $("#result").val(result);
  });

  $("#multiply").click(function () {
    const num1 = parseFloat($("#num1").val());
    const num2 = parseFloat($("#num2").val());
    const operator = "*";
    const result = calculate(num1, num2, operator);
    $("#result").val(result);
  });

  $("#divide").click(function () {
    const num1 = parseFloat($("#num1").val());
    const num2 = parseFloat($("#num2").val());
    const operator = "/";
    const result = calculate(num1, num2, operator);
    $("#result").val(result);
  });
});
