function hideAllItems() {
  //get all items
  var allItems = document.querySelectorAll(".list-group-item");
  //set display to none
  allItems.forEach(function (allItem) {
    allItem.classList.add("d-none");
  });
}
//hides all items on load
hideAllItems();

//listens to changes on dropdown
document.getElementById("options-list").addEventListener("click", function (e) {
  //e.preventDefault();

  //Get link's id
  if (e.target.tagName === "A") {
    var myChoice = e.target.id;
  }
//Get link's text
  var monthName = document.getElementById(myChoice).textContent;
//set month name text
  document.getElementById("myDropdown").textContent = monthName;
  //reset item visibility to hidden
  hideAllItems();
  //get list of items
  var chosenItems = document.querySelectorAll(
    '[data-month = "' + myChoice + '"]'
  );

  //set item visibility
  chosenItems.forEach(function (chosenItem) {
    chosenItem.classList.remove("d-none");
  });

  console.log(myChoice, chosenItems, monthName);
});
