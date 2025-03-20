<?php
include 'connection.php';

$sql = "SELECT * FROM contactos";

$result = $conn->query($sql);
$filas = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($filas);

$conn->close();
?>