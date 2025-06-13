function openCategory(categoryId) {
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
