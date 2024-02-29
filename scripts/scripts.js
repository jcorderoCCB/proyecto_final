document.getElementById("test-div").innerHTML = "It works!";

function hideAllItems() {
  //get all items
  var allItems = document.querySelectorAll(".list-group-item");
  //set display to none
  allItems.forEach(function (allItem) {
    allItem.classList.add("d-none");
  });
}

hideAllItems();

document.getElementById("options-list").addEventListener("click", function (e) {
  e.preventDefault();

  //Get link's id
  if (e.target.tagName === "A") {
    var myChoice = e.target.id;
  }
  hideAllItems();
  //get list of items
  var chosenItems = document.querySelectorAll(
    '[data-month = "' + myChoice + '"]'
  );

  //set item visibility
  chosenItems.forEach(function (chosenItem) {
    chosenItem.classList.remove("d-none");
  });

  console.log(myChoice, chosenItems);
});
