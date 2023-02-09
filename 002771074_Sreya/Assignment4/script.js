var form = document.getElementById("myForm");

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
var regExZip = /^\d{5}$/;

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
        console.log("validLastname", validLastName);
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
      break;

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

const drinks = document.getElementById("drinks");
const textAreaContainer = document.getElementById("textAreaContainer");

drinks.onchange = function () {
  const selectedOption = drinks.options[drinks.selectedIndex];
  const checkboxContainer = document.getElementById("checkboxContainer");
  checkboxContainer.innerHTML = "";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `checkbox-${selectedOption.value}`;
  checkbox.value = `checkbox-${selectedOption.value}-value`;

  const checkboxLabel = document.createElement("label");
  checkboxLabel.htmlFor = `checkbox-${selectedOption.value}`;
  checkboxLabel.innerHTML = ` Large ${selectedOption.text}`;

  const checkboxItem = document.createElement("div");
  checkboxItem.appendChild(checkbox);
  checkboxItem.appendChild(checkboxLabel);

  checkboxContainer.appendChild(checkboxItem);

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      const textArea = document.createElement("textarea");
      textArea.id = "myTextArea";
      textArea.required = true;
      textAreaContainer.appendChild(textArea);

      const textAreaLabel = document.createElement("label");
      textAreaLabel.innerHTML = "Additional comments:*";
      textAreaLabel.setAttribute("for", "myTextArea");
      textAreaContainer.insertBefore(
        textAreaLabel,
        textAreaContainer.firstChild
      );

      textAreaContainer.style.display = "block";
    } else {
      textAreaContainer.style.display = "none";
      textAreaContainer.innerHTML = "";
    }
  });
};

function displayValues() {
  let Firstname = document.getElementById("firstName").value;
  let Lastname = document.getElementById("lastName").value;

  let table = document.getElementById("resultTable");
  let row1 = table.insertRow();
  let cell1 = row1.insertCell(0);
  let cell2 = row1.insertCell(1);
  cell1.innerHTML = "First Name: ";
  cell2.innerHTML = Firstname;
}
