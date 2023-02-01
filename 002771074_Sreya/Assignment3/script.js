//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return this.mytitle;
};

var socialMedia = {
  facebook: "http://facebook.com",
  twitter: "http://twitter.com",
  flickr: "http://flickr.com",
  youtube: "http://youtube.com",
};

var t = new Title("CONNECT WITH ME!");

function onCheckBoxClick(checkbox) {
  //var submitButton = document.getElementById("button");

  if (checkbox.checked == false) {
    document.getElementById("button").style.backgroundColor = "Gray";
  }
}

function addNewStudent() {
  var table = document.getElementById("myTable");
  var tbodyRef = document.getElementsByTagName("tbody")[0];
  var lastStudent =
    table.lastElementChild.lastElementChild?.firstElementChild
      ?.nextElementSibling?.innerHTML;

  var lastestIndex = lastStudent.split(" ")[+1];

  var tNode = document.createElement("tr");

  var trCheckBoxCell = document.createElement("td");
  trCheckBoxCell.innerHTML = '<input type="checkbox"/>';

  var trStudentCell = document.createElement("td");
  trStudentCell.innerHTML = "Student " + (parseInt(lastestIndex) + 1);

  var trTeacherCell = document.createElement("tr");
  trTeacherCell.innerHTML = "Teacher " + (parseInt(lastestIndex) + 1);

  var trAwardCell = document.createElement("tr");
  trAwardCell.innerHTML = "Approved ";

  var trSemCell = document.createElement("tr");
  trSemCell.innerHTML = "Fall ";

  var trTypeCell = document.createElement("tr");
  trTypeCell.innerHTML = "TA ";

  var trBudgetCell = document.createElement("tr");
  trBudgetCell.innerHTML = "4029193 ";

  var trPerCell = document.createElement("tr");
  trPerCell.innerHTML = "100% ";

  tNode.appendChild(trCheckBoxCell);
  tNode.appendChild(trStudentCell);
  tNode.appendChild(trTeacherCell);
  tNode.appendChild(trAwardCell);
  tNode.appendChild(trSemCell);
  tNode.appendChild(trTypeCell);
  tNode.appendChild(trBudgetCell);
  tNode.appendChild(trPerCell);

  tbodyRef.appendChild(tNode);
}
