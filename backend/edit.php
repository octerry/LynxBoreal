<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit</title>
</head>
<body>
    <form action="edit-element.php" method="POST" style="display:flex; flex-direction:column;">
        <?php
        
            require "connection.php"; // pour avoir le PDO

            try {
                $id = $_GET["id"];
                $result = $pdo->prepare("SELECT * FROM news WHERE id = :id");
                $result->execute([
                    "id" => $id,
                ]);
                $result = $result->fetchAll(PDO::FETCH_ASSOC);
            } catch (PDOException $e) {
                echo 'Erreur : '. $e->getMessage();
            }
        
            echo "<h2>ID<h2><br>";
            echo "<input disabled name='id' value='" . $id . "'>";
            echo "<h2>Auteur</h2><br>";
            echo "<input name='author' value='" . $result[0]["author"] . "'>";
            echo "<h2>Contenu du message</h2><br>";
            echo "<textarea name='content'>" . $result[0]["content"] . "</textarea>";
        ?>
        <input type="submit" value="changer toutes les valeurs">
    </form>
</body>
</html>