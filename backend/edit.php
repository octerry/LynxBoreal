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
                // On récupère l'ID donnée dans le lien en méthode GET
                $id = $_GET["id"];

                // On récupère tous les élèments lié à cette ID dans le SQL
                $result = $pdo->prepare("SELECT * FROM news WHERE id = :id");
                $result->execute([
                    "id" => $id,
                ]);
                $result = $result->fetchAll(PDO::FETCH_ASSOC);

                // On affiche les élèments dans des inputs pour les modifier
                echo "<h2>ID<h2><br>";
                echo "<input disabled name='id' value='" . $id . "'>";
                echo "<h2>Auteur</h2><br>";
                echo "<input name='author' value='" . $result[0]["author"] . "'>";
                echo "<h2>Contenu du message</h2><br>";
                echo "<textarea name='content'>" . $result[0]["content"] . "</textarea>";
        
            } catch (PDOException $e) {
                echo 'Erreur : '. $e->getMessage();
            }
        
            ?>
        <input type="submit" value="changer toutes les valeurs">
    </form>
</body>
</html>