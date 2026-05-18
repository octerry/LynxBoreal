<?php 

    require "connection.php"; // pour avoir le PDO

    $author = trim( $_POST["author"] );
    $content = trim( $_POST["content"] );

    try {
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