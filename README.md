# Agenda de contactos
Breve programa para enviar contactos a una base de datos
Notas importantes: debido al tiempo, no he podido hacer furncionalidades de editar y borrar, pero se haria llamando a eventos los cuales hagan una cosulta a la base de datos y, si el nombre, email y telefono coinciden con los de la consulta, eliminarlos de la tabla y la lista. Para editar habria se reciclaria el evento de enviar para que hiciese un udpate en vez de un insert con la informacion nueva:

PARA ELIMINAR CONTACTOS: 
    $nombre = $_POST["nombre"];
    $telefono = $_POST["telefono"];
    $email = $_POST["email"];

    $sql = "DELETE FROM contactos WHERE nombre = '$nombre' AND telefono = '$telefono' AND email = '$email'";
    
PARA ACTUALIZAR CONTACTOS:
    $nombre = $_POST["nombre"];
    $telefono = $_POST["telefono"];
    $email = $_POST["email"];

    $sql = "UPDATE contactos SET nombre = '$nuevo_nombre', telefono = '$nuevo_telefono', email = '$nuevo_email' WHERE nombre = '$nombre' AND telefono = '$telefono'";

Phpmyadmin me ha estado dando errores, por lo cual no he podido hacer las pruebas pertinentes (aunque tampoco era necesario, ya que para hacer la conexion y el insert no hay que hacer gran cosa)
