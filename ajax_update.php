<?php
include 'connection.php';

$name = $_POST['nombre'];
$phone = $_POST['telefono'];
$email = $_POST['email'];
$id = $_POST['id'];

$sql = "UPDATE contactos SET nombre='$name', telefono='$phone', email='$email' WHERE id='$id'";

if ($conn->query($sql) == TRUE) {
  $last_id = $conn->insert_id;
  echo json_encode(["success" => true, "message" => "Contacto editado"]);
} else {
  echo json_encode(["success" => false, "message" => "Error al editar"]);
}

$conn->close()

?>