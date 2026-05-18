<?php 

    require "connection.php"; // pour avoir le PDO    

    $stmt = $pdo->prepare('DELETE FROM news WHERE id = :id');
    $stmt->execute([
        "id" => $_GET["id"]
    ]);
    
    header("location: admin-path.php");

?>