"use strict"

window.onload = function () {

  populateUserDropdown();
  populateCategoryDropdown();

  let addBtn = document.getElementById("addBtn");
  addBtn.onclick = btnOnClick;
}


function populateUserDropdown() {

  let userSelect = document.getElementById("userSelect");

  let defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Please select a user!";
  userSelect.appendChild(defaultOption);


  fetch("http://localhost:8083/api/users")
    .then(response => response.json())
    .then(data => {

      for (let user of data) {

        let newOption = document.createElement("option");
        newOption.textContent = user.name;
        newOption.value = user.id;
        userSelect.appendChild(newOption);

      }
    });


}

function populateCategoryDropdown() {

  let categorySelect = document.getElementById("categorySelect");

  let defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Please select a Category!";
  categorySelect.appendChild(defaultOption);


  fetch("http://localhost:8083/api/categories")
    .then(response => response.json())
    .then(data => {

      for (let user of data) {

        let newOption = document.createElement("option");
        newOption.textContent = user.name;
        newOption.value = user.id;
        categorySelect.appendChild(newOption);

      }
    });


}

function btnOnClick() {

  
  let userSelect = document.getElementById("userSelect").value
  let categorySelect = document.getElementById("categorySelect").value
  let urgencySelect = document.getElementById("urgencySelect").value
  let description = document.getElementById("description").value
  let deadline = document.getElementById("inputField").value
  let display = document.getElementById("display")

  let addTodo = {
   userid: userSelect,
   category: categorySelect,
   description: description,
   deadline : deadline,
   priority: urgencySelect
  }

  fetch("http://localhost:8083/api/todos", {
  method: "POST",
  body: JSON.stringify(addTodo),
  headers: {"Content-type":
                "application/json; charset=UTF-8"}

  }).then(results => {
  
       
       display.innerHTML = "Student updated";

   });
}

