var form = document.getElementById("myForm");
form.addEventListener("submit", submitted);

// set everything to false
var validFirstName = false;
var validLastName = false;
var validEmail = false;
var validPhone = false;
var validZip = false;

//regex
var regExFirstName = /^[a-zA-Z]+$/;
var regExLastName = /^[a-zA-Z]+$/;
var regExEmail = /^[a-zA-Z0-9_.+-]+@northeastern.edu$/;
var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
var regExZip = /^\d{5}/;

//values
var firstName = document.getElementById("firstName");
firstName.addEventListener("input", validate);

var lastName = document.getElementById("lastName");
lastName.addEventListener("input", validate);

var emailId = document.getElementById("emailId");
emailId.addEventListener("input", validate);

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", validate);

var zipcode = document.getElementById("zipcode");
zipcode.addEventListener("input", validate);

//function validate
function validate(e) {
  var value = e.target.value;
  var type = this.id; // id for each switch case
  var em = "error_" + type;

  switch (type) {
    case "firstName":
      if (!value.trim().match(regExFirstName)) {
        document.getElementById(em).style.display = "inline-block";
        this.style.border = "2px solid red";
        validFirstName = false;
        console.log("validFirstname", validFirstName);
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validFirstName = true;
        console.log("validFirstname", validFirstName);
      }
      break;

    case "lastName":
      if (!value.trim().match(regExLastName)) {
        document.getElementById(em).style.display = "inline-block";
        this.style.border = "2px solid red";
        validLastName = false;
        console.log("validLastname", validlastName);
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validLastName = true;
        console.log("validLastname", validFirstName);
      }
      break;

    case "emailId":
      if (!value.trim().match(regExEmail)) {
        document.getElementById(em).style.display = "inline-block";
        this.style.border = "2px solid red";
        validEmail = false;
        console.log("validEmail", validEmail);
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validEmail = true;
        console.log("validEmail", validEmail);
      }

    case "phoneNumber":
      if (!value.trim().match(regExPhone)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validPhone = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validPhone = true;
      }
      break;

    case "zipcode":
      if (!value.trim().match(regExZip)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validZip = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validZip = true;
      }
      break;
  }
}

// write a function submitted
function submitted(e) {
  //e.preventDefault();
  console.log("validFirstname", validFirstName);
  if (validFirstName) {
    alert("Data entered succesfull");
    // window.location.href = "Form.html";
  } else {
    alert("Please enter valid details");
    //window.location.href = "Form.html";
  }
}
