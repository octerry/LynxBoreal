<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin path</title>
</head>
<body>
    <h1>Gestion de la base de donnée</h1>
    <form action="add.php" method="POST" style="display:flex; flex-direction:column;">
        <input name="author" type="text" placeholder="Nom de l'auteur" required>
        <textarea name="content" placeholder="Contenu du message" required></textarea>
        <input type="submit" value="ajouter">
    </form>
    <h2>News</h2>
    <?php
    
        require "connection.php"; // pour avoir le PDO

        try {
            $result = $pdo->query("SELECT * FROM news");
            $result = $result->fetchAll(PDO::FETCH_ASSOC);

            echo "<ul>";
            foreach ($result as $row) {
                echo "<li><strong>". $row["author"] . "</strong> " . $row['date'] . '<br>"' . $row["content"] . '"<br></li>';
                echo '<a href="delete.php?id=' . $row["id"] . '">Supprimer</a><a href="edit.php?id=' . $row["id"] . '">Modifier</a><br>';
            }
            echo "</ul>";
        } catch (PDOException $e) {
            echo 'Erreur : '. $e->getMessage();
        }
    
    ?>
</body>
</html>