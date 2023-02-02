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

function AddNewStudent() {
  var table = document.getElementById("myTable");
  var tbodyRef = document.getElementsByTagName("tbody")[0];

  var lastStudent =
    table.lastElementChild.lastElementChild?.previousElementSibling
      ?.firstElementChild?.nextElementSibling?.innerHTML || "Student 0";
  var lastestIndex = lastStudent.split(" ")[1];

  var tdNode = document.createElement("tr");
  var tdNode2 = document.createElement("tr");

  tdNode2.className = "dropDownTextArea";
  tdNode2.style.display = "none";

  var trCheckboxCell = document.createElement("td");
  var trCheckboxCell2 = document.createElement("td");

  trCheckboxCell2.colSpan = "8";
  trCheckboxCell2.innerHTML =
    "Advisor:<br/><br/> Award Details<br/> Summer 1-2014(TA)<br/> Budget Number: <br/>    Tuition Number: <br/> Comments:<br/><br /><br />    Award Status:<br /><br /><br/>";
  trCheckboxCell.innerHTML =
    '<input type="checkbox" onclick="toggleColumn(this)"/><br/> <br/><img src="down.png" width="25px" onclick="hideSibling(this)"/>';

  var trStudentCell = document.createElement("td");
  trStudentCell.innerHTML = "Student " + (parseInt(lastestIndex) + 1);

  var trTeacherCell = document.createElement("td");
  trTeacherCell.innerHTML = "Teacher " + (parseInt(lastestIndex) + 1);

  var trApprovalCell = document.createElement("td");
  trApprovalCell.innerHTML = "Approved ";

  var trSemesterCell = document.createElement("td");
  trSemesterCell.innerHTML = "Fall ";

  var trTypeCell = document.createElement("td");
  trTypeCell.innerHTML = "TA ";

  var trBudgetCell = document.createElement("td");
  trBudgetCell.innerHTML = "34567 ";

  var trpercentCell = document.createElement("td");
  trpercentCell.innerHTML = "100% ";

  tdNode.appendChild(trCheckboxCell);
  tdNode.appendChild(trStudentCell);
  tdNode.appendChild(trTeacherCell);
  tdNode.appendChild(trApprovalCell);
  tdNode.appendChild(trSemesterCell);
  tdNode.appendChild(trTypeCell);
  tdNode.appendChild(trBudgetCell);
  tdNode.appendChild(trpercentCell);

  tbodyRef.appendChild(tdNode);
  tdNode2.appendChild(trCheckboxCell2);
  tbodyRef.appendChild(tdNode2);
}

function isChecked() {
  var checkBox = document.querySelectorAll("input[type=checkbox]");
  var checked = false;
  for (var i = 0; i < checkBox.length; i++) {
    if (checkBox[i].checked) {
      checked = true;
      break;
    }
  }
  return checked;
}

function deleteRow(rowObject) {
  var tr = rowObject.parentElement.parentElement;

  document.getElementById("myTable").deleteRow(tr.rowIndex + 1);
  document.getElementById("myTable").deleteRow(tr.rowIndex);
  var table = document.getElementById("myTable");
  var headRow = table.children[0].children[0];
  if (isChecked() == false) {
    document.getElementById("button").style.backgroundColor = "grey";
  }

  var val = tr.firstElementChild.nextElementSibling.innerHTML;
  if (headRow.lastChild.innerHTML == "EDIT" && isChecked() == false) {
    headRow.removeChild(headRow.lastChild);
    headRow.removeChild(headRow.lastChild);
  }
  alert("Row deleted " + val + " successfully!");
}

function editRow(rowObject) {
  var input = prompt("Enter new value:");
}

function toggleCol(checkbox) {
  var table = document.getElementById("myTable");
  var RowHead = table.children[0].children[0];
  var row = checkbox.closest("tr");

  if (checkbox.checked) {
    var DeleteCol = document.createElement("td");
    var EditCol = document.createElement("td");

    EditCol.innerHTML =
      '<button id="edit" type="button" onclick="editRow(this)">Edit</button>';
    DeleteCol.innerHTML =
      '<button id="delete" type="button" onclick="deleteRow(this)">Delete</button>';

    row.lastChild.after(DeleteCol);
    row.lastChild.after(EditCol);

    if (RowHead.lastChild.innerHTML != "EDIT") {
      var newDelColumn = document.createElement("th");
      newDelColumn.innerHTML = "DELETE";
      RowHead.lastChild.after(newDelColumn);

      var newEditColumn = document.createElement("th");
      newEditColumn.innerHTML = "EDIT";
      RowHead.lastChild.after(newEditColumn);
    }

    row.style.backgroundColor = "orange";
    document.getElementById("button").style.backgroundColor = "orange";
  } else {
    row.style.backgroundColor = "white";

    if (RowHead.lastChild.innerHTML == "EDIT" && !isChecked()) {
      RowHead.removeChild(RowHead.lastChild);
      RowHead.removeChild(RowHead.lastChild);
    }
    document.getElementById("button").style.backgroundColor = "gray";
    row.removeChild(row.lastChild);
    row.removeChild(row.lastChild);
  }
}

function hide(image) {
  var row = image.closest("tr");
  var nextRow = row.nextElementSibling;

  if (nextRow.style.display == "table-row") {
    nextRow.style.display = "none";
  } else {
    nextRow.style.display = "table-row";
  }
}
