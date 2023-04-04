var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    // formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    formData["grade"] = document.getElementById("grade").value;
    formData["degree"] = document.getElementById("degree").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    // cell1 = newRow.insertCell(0);
    // cell1.innerHTML = data.fullName;
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.empCode;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.salary;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.city;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.grade;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.degree;

    

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a class="delete" onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    // document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    document.getElementById("grade").value = "";
    document.getElementById("degree").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    // document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[1].innerHTML;
    document.getElementById("city").value = selectedRow.cells[2].innerHTML;
    document.getElementById("grade").value = selectedRow.cells[3].innerHTML;
    document.getElementById("degree").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    // selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[0].innerHTML = formData.empCode;
    selectedRow.cells[1].innerHTML = formData.salary;
    selectedRow.cells[2].innerHTML = formData.city;
    selectedRow.cells[3].innerHTML = formData.grade;
    selectedRow.cells[4].innerHTML = formData.degree;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record from the Student Database ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("empCode").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}



function increment(){
    var a=1;


}


// Search

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("employeeList");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0] || tr[i].getElementsByTagName("td")[1] || tr[i].getElementsByTagName("td")[4];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }


  }
  