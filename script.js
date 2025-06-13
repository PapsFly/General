const projects = [
  {
    title: "Présentation du projet Minecraft SAO",
    description: "Dans le projet d’un serveur Sword Art Online, j’ai été développeur en charge des plugins personnalisés.",
  },
  {
    title: "🎯 Rendu final du HUD",
    description: "Voici le HUD final développé pour le serveur SAO à l’aide de MythicHUD.",
    image: "Src/HUD au propre.png"
  },
  {
    title: "👥 Plugin de gestion HUD de groupe",
    description: "Système permettant de voir la vie des membres du groupe en HUD dynamique.",
    image: "Src/HUD vie + HUD vie Groupe dynamique.png"
  },
  {
    title: "🧭 Plugin de Quête Personnalisé",
    description: "J’ai refait tout un système de quête avec suivi dynamique. Les dialogues étaient réalisés avec Luxe Dialogue.",
    video: "Src/Affichage objectif Quete dynamque.mp4"
  },
  {
    title: "⚔️ Système de Duel",
    description: "Premier plugin : système de duel complet avec décompte et gestion d’enjeux pour se rapprocher de l’anime SAO.",
    video: "Src/Systeme de duel + model timer.mp4"
  }
];

function openCategory() {
  const container = document.getElementById("popupContainer");
  const slideArea = document.getElementById("projectSlides");
  slideArea.innerHTML = "";

  projects.forEach(proj => {
    const div = document.createElement("div");
    div.className = "project";
    div.innerHTML = `
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
      ${proj.image ? `<img src="${proj.image}" alt="${proj.title}" />` : ""}
      ${proj.video ? `<video controls src="${proj.video}"></video>` : ""}
    `;
    slideArea.appendChild(div);
  });

  container.classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popupContainer").classList.add("hidden");
}
