
// User clicked on the Add Button
// Add text inside item field to "To Do List"
document.getElementById('add').addEventListener('click', function() {
 var value = document.getElementById('item').value;
 if (value) addItemTodo(value);
});

// Function to remove item
function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;

  parent.removeChild(item);

}

//Function to check item
function checkItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;

  //check if the item should be check or re-added to todo
  var target = (id === 'todo') ? document.getElementById('checked'): document.getElementById('todo');

  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);

}

//Adds item to List
function addItemTodo(text) {

// grabbing ordered list
 var list = document.getElementById('todo');

// Creating list item
 var item = document.createElement('li');
 item.innerText = text;

 // Creating div for buttons
 var buttons = document.createElement('DIV');
 buttons.classList.add('buttons');


// Remove item
 var remove = document.createElement('BUTTON');
 var t = document.createTextNode("Delete");
 remove.appendChild(t);
 document.body.appendChild(remove);

 //Adding click event for removing item
 remove.addEventListener('click', removeItem);


 // Check item
 var check = document.createElement('BUTTON');
 var t = document.createTextNode("Check");
 check.appendChild(t);
 document.body.appendChild(check);

 //Adding click event for checking item
 check.addEventListener('click', checkItem);

 // Adding buttons to Parent
 buttons.appendChild(remove);
 buttons.appendChild(check);
 item.appendChild(buttons);

 list.insertBefore(item, list.childNodes[0]);
}
