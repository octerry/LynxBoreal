<?php 

    require "connection.php"; // pour avoir le PDO

    // On récupère les variables données avec le lien en méthode POST
    $author = trim( $_POST["author"] );
    $content = trim( $_POST["content"] );

    try {
        // On mets les variables dans 
        $stmt = $pdo->prepare('INSERT INTO news (author, content, date) VALUES (:author, :content, CURRENT_DATE())');
        $stmt->execute([
            'author'=> $author,
            'content'=> $content
        ]);

        echo 'Message ajouté !';
    } catch (PDOException $e) {
        echo 'Erreur :' . $e->getMessage();
    }

?>