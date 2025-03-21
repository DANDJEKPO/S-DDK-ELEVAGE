<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Configurer l'email
    $to = "danjekpoabel@gmail.com"; // Remplacez par votre email
    $subject = "Nouvelle inscription";
    $body = "Nom : $name\nEmail : $email\nMessage :\n$message";
    $headers = "From: $email";

    // Envoyer l'email
    if (mail($to, $subject, $body, $headers)) {
        echo "Votre inscription a été envoyée avec succès !";
    } else {
        echo "Une erreur est survenue, veuillez réessayer.";
    }
} else {
    echo "Accès interdit.";
}
?>
