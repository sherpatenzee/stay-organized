"use strict"

window.onload = function () {

  let userSelect = document.getElementById("userSelect");
  userSelect.onchange = userDropdownOnChange;
  
  populateUserDropdown();
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


function userDropdownOnChange(){

  let display =  document.getElementById("displayUser")
  let userSelect = document.getElementById("userSelect").value
  


  fetch("http://localhost:8083/api/todos")
    .then(response => response.json())
    .then(data => {
      
      for (let user of data) {
  
        if( userSelect == user.id){
          display.innerHTML = "<span style='color: Red ; '> Todo : </span>" + user.description;

        }
      }
    });
 

}