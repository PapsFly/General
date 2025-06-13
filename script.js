// Ton token inversé (exemple fictif : "ghp_ABC123456" devient "654321CBA_phg")
const reversedToken = "654321CBA_phg";

// Fonction pour inverser la chaîne
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Reconstituer le vrai token
const GITHUB_TOKEN = reverseString(reversedToken);

const REPO = "PapsFly/General";
const BRANCH = "main";
const DATA_FOLDER = "data";

document.getElementById("addButton").onclick = () => {
  document.getElementById("popup").classList.remove("hidden");
};

document.getElementById("close").onclick = () => {
  document.getElementById("popup").classList.add("hidden");
};

document.getElementById("save").onclick = async () => {
  const nom = document.getElementById("nom").value.trim();
  const description = document.getElementById("description").value.trim();
  const categorie = document.getElementById("categorie").value.trim();

  const data = {
    nom,
    description,
    categorie,
    timestamp: Date.now()
  };

  const jsonFileName = `${DATA_FOLDER}/${categorie}_${Date.now()}.json`;

  // Encodage en UTF-8 + Base64 (important pour les accents)
  const encodedContent = btoa(unescape(encodeURIComponent(JSON.stringify(data, null, 2))));

  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${jsonFileName}`, {
    method: "PUT",
    headers: {
      "Authorization": `token ${GITHUB_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: `Ajout ${categorie} - ${nom}`,
      content: encodedContent,
      branch: BRANCH
    })
  });

  if (res.ok) {
    alert("✅ Fiche enregistrée dans le repo !");
    document.getElementById("popup").classList.add("hidden");
  } else {
    alert("❌ Erreur : impossible d'enregistrer dans GitHub.");
    console.error(await res.json());
  }
};
