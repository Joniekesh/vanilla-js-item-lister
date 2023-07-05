var submitBtn = document.querySelector(".submitBtn");
var form = document.querySelector("form");
var listItems = document.querySelector(".listItems");
var search = document.querySelector(".search");

// Add item
form.addEventListener("submit", (e) => {
  e.preventDefault();

  var newItem = document.querySelector(".createInput").value;
  if (newItem) {
    var li = document.createElement("li");
    li.className = "item";

    li.appendChild(document.createTextNode(newItem));

    var delBtn = document.createElement("button");
    delBtn.className = "cancel";
    delBtn.appendChild(document.createTextNode("X"));
    li.appendChild(delBtn);

    listItems.appendChild(li);
  }
});

// Remove item
listItems.addEventListener("click", (e) => {
  if (e.target.classList.contains("cancel")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      listItems.removeChild(li);
    }
  }
});

// Filter items
search.addEventListener("keyup", (e) => {
  var text = e.target.value.toLowerCase();

  var items = listItems.getElementsByTagName("li");
  [...items].forEach((item) => {
    var itemName = item.firstElementChild.textContent;

    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});
