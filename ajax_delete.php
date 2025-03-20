<?php
include 'connection.php';

$id = $_POST['id'];

$sql = "DELETE FROM contactos WHERE id='$id'";

if ($conn->query($sql) == TRUE) {
  $last_id = $conn->insert_id;
  echo json_encode(["success" => true, "message" => "Contacto eliminado", "id" => $id]);
} else {
  echo json_encode(["success" => false, "message" => "Error al eliminar"]);
}

$conn->close()

?>