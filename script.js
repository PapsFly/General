function openCategory(categoryId) {
  document.querySelectorAll('.popup').forEach(p => p.classList.add('hidden'));
  const popup = document.getElementById(categoryId + "-popup");
  if (popup) {
    popup.classList.remove("hidden");
  }
}

function closeAllPopups() {
  document.querySelectorAll('.popup').forEach(p => p.classList.add('hidden'));
}

// Fermer la popup quand on clique en dehors du contenu
document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('click', e => {
    if (e.target === popup) {
      closeAllPopups();
    }
  });
});
