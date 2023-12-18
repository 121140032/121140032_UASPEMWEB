var form = document.getElementById("form");
var classListForm = form.classList;
var table = document.getElementById("table");
var classListTable = table.classList;
console.log(classListTable);

if (classListForm.length < 2) {
    function formin() {
        document.getElementById("form").style.marginLeft = "0";
        document.getElementById("form").style.transition = "0.5s";
    }

    function formout() {
        document.getElementById("form").style.marginLeft = "-100%";
    }
}

if (classListTable.length < 2) {
    function tablein() {
        document.getElementById("table").style.marginLeft = "0";
        document.getElementById("table").style.transition = "0.5s";
    }

    function tableout() {
        document.getElementById("table").style.marginLeft = "-100%";
    }
}
