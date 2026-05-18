<?php

    require "connection.php"; // pour avoir le PDO

    try {
        $result = $pdo->query("SELECT * FROM news");
        $result = $result->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($result);
    } catch (PDOException $e) {
        echo 'Erreur : '. $e->getMessage();
    }

?>