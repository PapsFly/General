function openCategory(categoryId) {
  console.log("Ouverture de la catégorie :", categoryId); // DEBUG
  const popup = document.getElementById(categoryId + "-popup");
  if (popup) {
    popup.classList.remove("hidden");
  }
}


function closePopup(id) {
  const popup = document.getElementById(id);
  if (popup) {
    popup.classList.add("hidden");
  }
}
