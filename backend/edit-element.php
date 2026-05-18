<?php 

    require "connection.php";

    try {
        if ($_POST['author'] != ''){
            $stmt = $pdo->prepare('UPDATE news SET author = :author WHERE id = :id');
            $stmt->execute([
                "id" => $_POST["id"],
                "author" => $_POST["author"],
            ]);
        }
        if ($_POST['content'] != ''){
            $stmt = $pdo->prepare('UPDATE news SET content = :content WHERE id = :id');
            $stmt->execute([
                "id" => $_POST["id"],
                "content" => $_POST["content"],
            ]);
        }
        
        header("location: admin-path.php");
    } catch (PDOException $e) {
        echo 'Erreur : '. $e->getMessage();
    }

?>