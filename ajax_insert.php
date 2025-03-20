<?php
include 'connection.php';

$name = $_POST['nombre'];
$phone = $_POST['telefono'];
$email = $_POST['email'];

$sql = "INSERT INTO contactos (id, nombre, telefono, email) VALUES ('', '$name', '$phone', '$email')";

if ($conn->query($sql) == TRUE) {
  $id = $conn->insert_id;
  echo json_encode(["sucess" => true, "message" => "Contacto agregado", "id" => $id]);
} else {
  echo json_encode(["sucess" => false, "message" => "Error al insertar"]);
}

$conn->close()

?>