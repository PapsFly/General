const GITHUB_TOKEN = "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"; // Remplace ici en local
const REPO = "TON_UTILISATEUR/TON_REPO";
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
  const upload = document.getElementById("upload").files;

  const data = {
    nom,
    description,
    categorie,
    timestamp: Date.now()
  };

  const jsonFileName = `${DATA_FOLDER}/${categorie}_${Date.now()}.json`;

  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${jsonFileName}`, {
    method: "PUT",
    headers: {
      "Authorization": `token ${GITHUB_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: `Ajout ${categorie} - ${nom}`,
      content: btoa(JSON.stringify(data, null, 2)),
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
