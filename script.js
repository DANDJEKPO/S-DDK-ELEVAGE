// Fonction pour valider le formulaire d'inscription
function validateForm() {
    var name = document.forms["inscriptionForm"]["name"].value;
    var email = document.forms["inscriptionForm"]["email"].value;

    if (name == "" || email == "") {
        alert("Tous les champs doivent être remplis.");
        return false;
    }
    alert("Inscription réussie !");
    return true;
}

// Fonction pour afficher un message de confirmation après soumission
function showConfirmationMessage() {
    const confirmationMessage = document.createElement('div');
    confirmationMessage.classList.add('confirmation-message');
    confirmationMessage.innerText = 'Votre inscription a été enregistrée avec succès !';
    document.body.appendChild(confirmationMessage);

    // Masquer le message après 5 secondes
    setTimeout(() => {
        confirmationMessage.style.display = 'none';
    }, 5000);
}

// Ajoute un effet de défilement doux pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Masquer l'indicateur de chargement lorsque la page est complètement chargée
window.addEventListener('load', function () {
    document.getElementById('loader').style.display = 'none';
});
document.addEventListener("DOMContentLoaded", function() {
    alert("Bienvenue sur mon site !");
});
body {
    font-family: Arial, sans-serif;
    background-color: #f0f8ff;
    color: #333;
    margin: 0;
    padding: 0;
}

h1 {
    color: #007bff;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 15px;
}

nav ul li a {
    text-decoration: none;
    color: #007bff;
}
document.addEventListener("DOMContentLoaded", function () {
    // Masquer le loader
    var loader = document.getElementById("loader");
    loader.style.display = "none"; // Cacher le loader

    // Afficher le contenu principal
    var content = document.getElementById("content");
    content.style.display = "block"; // Afficher le contenu
});
body
<script>
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll("nav a").forEach(link => {
            link.addEventListener("click", function(e) {
                e.preventDefault(); // Empêche le rechargement de la page
                
                let page = this.getAttribute("href"); // Récupère le fichier HTML cible
                
                fetch(page)
                    .then(response => response.text())
                    .then(data => {
                        // Extrait uniquement le contenu utile de la page demandée
                        let parser = new DOMParser();
                        let doc = parser.parseFromString(data, "text/html");
                        let newContent = doc.querySelector("#content").innerHTML;
                        
                        document.getElementById("content").innerHTML = newContent;
                    })
                    .catch(error => console.log("Erreur de chargement :", error));
            });
        });
    });
</script>
body
