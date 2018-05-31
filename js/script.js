

// User clicked on the Add Button
// Add text inside item field to "To Do List"
document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
  if (value) addItemTodo(value);
});

function removeItem() {
  console.log(this);

}

function checkItem() {
  console.log(this);
}

function addItemTodo(text) {

  var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');

  // Remove Item
  remove.addEventListener('click', removeItem);

  var check = document.createElement('button');
  check.classList.add('check');

  check.addEventListener('click', checkItem);

  buttons.appendChild(remove);
  buttons.appendChild(checked);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);
}
