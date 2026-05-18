<?php 

    require "connection.php"; // pour avoir le PDO

    try {
        // On change les valeurs si les valeurs n'étaient pas vides
        if ($_POST['title'] != ''){
            $stmt = $pdo->prepare('UPDATE news SET title = :title WHERE id = :id');
            $stmt->execute([
                "id" => $_POST["id"],
                "title" => $_POST["title"],
            ]);
        }
        if ($_POST['content'] != ''){
            $stmt = $pdo->prepare('UPDATE news SET content = :content WHERE id = :id');
            $stmt->execute([
                "id" => $_POST["id"],
                "content" => $_POST["content"],
            ]);
        }
        if ($_POST['author'] != ''){
            $stmt = $pdo->prepare('UPDATE news SET author = :author WHERE id = :id');
            $stmt->execute([
                "id" => $_POST["id"],
                "author" => $_POST["author"],
            ]);
        }
        
        // On renvoie la personne vers la page de base (admin-path.php pour l'instant)
        header("location: admin-path.php");
    } catch (PDOException $e) {
        echo 'Erreur : '. $e->getMessage();
    }

?>