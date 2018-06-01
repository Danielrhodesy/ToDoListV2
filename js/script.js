

// User clicked on the Add Button
// Add text inside item field to "To Do List"
document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
  if (value) addItemTodo(value);
});

function removeItem() {
  console.log(this);

}

// User clicked on the Add Button
// Add text inside item field to "To Do List"
document.getElementById('add').addEventListener('click', function() {
 var value = document.getElementById('item').value;
 if (value) addItemTodo(value);
});

// Function to remove item
function removeItem() {
 console.log(this);
}

//Function to check item
function checkItem() {
 console.log(this);
}



//
function addItemTodo(text) {

 var list = document.getElementById('todo');

 var item = document.createElement('li');
 item.innerText = text;

 var buttons = document.createElement('DIV');
 buttons.classList.add('buttons');

 var remove = document.createElement('BUTTON');
 var t = document.createTextNode("Delete");
 remove.appendChild(t);
 document.body.appendChild(remove);


 // Remove Item
 remove.addEventListener('click', removeItem);

 var check = document.createElement('BUTTON');
 var t = document.createTextNode("Check");
 check.appendChild(t);
 document.body.appendChild(check);


 // Check Item
 check.addEventListener('click', checkItem);

 buttons.appendChild(remove);
 buttons.appendChild(checked);
 item.appendChild(buttons);

 list.insertBefore(item, list.childNodes[0]);
}
