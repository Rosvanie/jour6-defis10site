


// script.js

// Animation et gestion de l'inscription
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêcher le formulaire de se soumettre normalement

    // Afficher le message de succès avec une animation
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
    successMessage.classList.add('animated', 'fadeIn');

    // Cacher le formulaire
    document.getElementById('registration-form').reset();
    document.getElementById('registration-form').style.display = 'none';
});

// Animation pour le message de succès
document.querySelector("#success-message").style.animation = "fadeIn 1s";









// Fonction pour ouvrir une modale
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Fonction pour fermer une modale
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Ferme la modale si l'utilisateur clique en dehors de la fenêtre modale
window.onclick = function(event) {
    if (event.target.className == "modal") {
        event.target.style.display = "none";
    }
}
