var cbSource = document.getElementsByName("source");
for (i = 0; i < cbSource.length; i++) {
  cbSource[i].required = true;
}

var form = document.getElementById("myForm");
form.addEventListener("submit", submitted);

document.getElementById("Large_div").style.display = "none";
document.getElementById("Frappe").style.display = "none";
document.getElementById("Latte").style.display = "none";
document.getElementById("Espresso").style.display = "none";
document.getElementById("Cold").style.display = "none";
document.getElementById("hotcoco").style.display = "none";
document.getElementById("Additional").style.display = "none";

var validFirstName = false;
var validLastName = false;
var validEmail = false;
var validPhone = false;
var validZipCode = false;

var regExName = /^[a-z A-Z]+$/;
var regExPhone = /^\d{3}-\d{3}-\d{4}$/;
var regExEmailId = /^([a-z\d\.]+@northeastern.edu)$/;
var regExZipCode = /^\d{5}$/;

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

function validate(e) {
  var value = e.target.value;
  var type = this.id;
  var em = "error_" + type;

  switch (type) {
    case "firstName":
      if (!value.trim().match(regExName)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validFirstName = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validFirstName = true;
      }
      break;
    case "lastName":
      if (!value.trim().match(regExName)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validLastName = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validLastName = true;
      }
      break;
    case "emailId":
      if (!value.trim().match(regExEmailId)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validEmail = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validEmail = true;
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
      if (!value.trim().match(regExZipCode)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validZipCode = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validZipCode = true;
      }
      break;
  }
}

function dropDownChange(value) {
  var cbarray = document.getElementsByName("reason");
  for (i = 0; i < cbarray.length; i++) cbarray[i].checked = false;

  document.getElementById("Large_div").style.display = "none";
  document.getElementById("Frappe").style.display = "none";
  document.getElementById("Latte").style.display = "none";
  document.getElementById("Espresso").style.display = "none";
  document.getElementById("Cold").style.display = "none";
  document.getElementById("hotcoco").style.display = "none";
  document.getElementById("Additional").style.display = "none";

  if (value != "select" && value != "") {
    document.getElementById("Large_div").style.display = "";
    document.getElementById(value).style.display = "";
  }
}

function checkboxClicked(chkbox) {
  console.log(chkbox.checked);
  if (chkbox.checked) {
    document.getElementById("Additional").style.display = "";
    document.getElementById("inst").required = true;
  } else {
    document.getElementById("Additional").style.display = "none";
    document.getElementById("inst").required = false;
  }
}

function submitted(e) {
  e.preventDefault();
  var form = document.getElementById("myForm");

  if (
    validFirstName &&
    validLastName &&
    validEmail &&
    validPhone &&
    validZipCode
  ) {
    var formData = new FormData(form);
    var feedback =
      document.getElementById("drinks").value === "select"
        ? ""
        : document.getElementById("drinks").value;

    switch (feedback) {
      case "Frappe":
        feedback = "Frappe";
        break;
      case "Latte":
        feedback = "Latte";
        break;
      case "Espresso":
        feedback = "Esspresso";
        break;
      case "Cold":
        feedback = "Cold Brew";
        break;
      case "hotcoco":
        feedback = "Hot Coco";
        break;
      default:
        feedback = "";
        break;
    }

    var sourcevar = "";
    for (i = 0; i < cbSource.length; i++) {
      if (cbSource[i].checked) {
        sourcevar = sourcevar + cbSource[i].value + ", ";
      }
    }

    sourcevar = sourcevar.slice(0, -2);
    formData.set("source", sourcevar);
    formData.set("drinks", feedback);

    localStorage.setItem(
      "formData",
      JSON.stringify(Object.fromEntries(formData))
    );

    var resetbtn = document.querySelector("#resetForm");
    resetbtn.click();
    dropDownChange("");
    addNewRow();
  } else {
    alert("Some fields require your attention.");
  }
}

function Hear(cb) {
  var sources = document.getElementsByName("source");

  if (cb.checked) {
    for (i = 0; i < sources.length; i++) {
      if (sources[i].required) sources[i].required = false;
    }
  } else {
    var flag = false;
    for (i = 0; i < sources.length; i++) {
      if (sources[i].checked) {
        flag = true;
      }
    }
    if (!flag) {
      for (i = 0; i < sources.length; i++) {
        sources[i].required = true;
      }
    }
  }
}

function addNewRow() {
  var formData = JSON.parse(localStorage.getItem("formData"));
  var tbodyRef = document.getElementsByTagName("tbody")[0];
  debugger;

  var tdRowNode = document.createElement("tr");

  var trTitleCell = document.createElement("td");
  trTitleCell.innerHTML = formData.title;

  var trFirstNAme = document.createElement("td");
  trFirstNAme.innerHTML = formData.firstName;

  var trLastName = document.createElement("td");
  trLastName.innerHTML = formData.lastName;

  var trEmailId = document.createElement("td");
  trEmailId.innerHTML = formData.emailId;

  var trPhoneNo = document.createElement("td");
  trPhoneNo.innerHTML = formData.phoneNumber;

  var trStreetAdd1 = document.createElement("td");
  trStreetAdd1.innerHTML = formData.streetAddress1;

  var trStreetAdd2 = document.createElement("td");
  trStreetAdd2.innerHTML = formData.streetAddress2;

  var trCity = document.createElement("td");
  trCity.innerHTML = formData.city;

  var trState = document.createElement("td");
  trState.innerHTML = formData.state;

  var trZipCode = document.createElement("td");
  trZipCode.innerHTML = formData.zipcode;

  var trSource = document.createElement("td");
  trSource.innerHTML = formData.source;

  var trComment = document.createElement("td");
  trComment.innerHTML = formData.text;

  var trFeedback = document.createElement("td");
  trFeedback.innerHTML = formData.drinks;

  var trReason = document.createElement("td");
  trReason.innerHTML = formData.large == undefined ? "" : formData.large;

  var trReasonForWhy = document.createElement("td");
  trReasonForWhy.innerHTML = formData.inst;

  tdRowNode.appendChild(trTitleCell);
  tdRowNode.appendChild(trFirstNAme);
  tdRowNode.appendChild(trLastName);
  tdRowNode.appendChild(trEmailId);
  tdRowNode.appendChild(trPhoneNo);
  tdRowNode.appendChild(trStreetAdd1);
  tdRowNode.appendChild(trStreetAdd2);
  tdRowNode.appendChild(trCity);
  tdRowNode.appendChild(trState);
  tdRowNode.appendChild(trZipCode);
  tdRowNode.appendChild(trSource);
  tdRowNode.appendChild(trComment);
  tdRowNode.appendChild(trFeedback);
  tdRowNode.appendChild(trReason);
  tdRowNode.appendChild(trReasonForWhy);

  tbodyRef.appendChild(tdRowNode);
}
