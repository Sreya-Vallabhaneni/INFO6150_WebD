$(document).ready(function () {
  // Page 1
  $("#form1").submit(function (event) {
    // Prevent form submission
    event.preventDefault();

    // Validate email
    var email = $("#email").val();
    if (!isValidEmail(email)) {
      showError("Email is invalid.");
      return;
    }

    // Validate username
    var username = $("#username").val();
    if (!isValidUsername(username)) {
      showError("Username is invalid.");
      return;
    }

    // Validate password
    var password = $("#password").val();
    if (!isValidPassword(password)) {
      showError("Password is invalid.");
      return;
    }

    // If all validations pass, redirect to Calculator
    window.location.href =
      "Calculator.html?username=" + encodeURIComponent(username);
  });

  var username = decodeURIComponent(getParameterByName("username"));
  $("#welcome").text(username);

  const calculateResult = (event) => {
    // Prevent default button behavior
    event.preventDefault();

    // Validate input
    const num1 = parseInt($("#num1").val());
    const num2 = parseInt($("#num2").val());

    if (isNaN(num1) || isNaN(num2)) {
      showError("Both inputs must be valid numbers.");
      return;
    }

    // Calculate result
    const operation = event.target.id;
    const result = {
      add: num1 + num2,
      subtract: num1 - num2,
      multiply: num1 * num2,
      divide: num1 / num2,
    }[operation];

    // Display result
    $("#result").val(result);
  };

  $("#add").click(calculateResult);
  $("#subtract").click(calculateResult);
  $("#multiply").click(calculateResult);
  $("#divide").click(calculateResult);

  const showError = (message) => {
    $("#error").text(message);
  };

  function isValidEmail(email) {
    // Accept only northeastern email addresses
    return email.endsWith("@northeastern.edu");
  }

  function isValidUsername(username) {
    // Username should be at least 3 characters long and not contain any special characters
    return /^[a-zA-Z0-9]{3,}$/.test(username);
  }

  function isValidPassword(password) {
    // Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
  }

  function isValidNumber(number) {
    // Number should be a positive or negative integer or decimal
    return /^\d+(\.\d+)?$/.test(number);
  }

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
});
