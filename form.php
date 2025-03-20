<?php
$usuario_valido = "admin";
$contrasena_valida = "password";

// Verifica si hay una solicitud POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $user = $_POST['user'];
    $password = $_POST['password'];
    if ($user === $usuario_valido && $password === $contrasena_valida) {
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <script type="text/javascript" src="scripts/main.js"></script>
    <title>Lista de Contactos</title>
</head>
<body>
    <h1>Bienvenido a la Lista de Contactos, <?php echo $usuario_valido; ?></h1>
    <div id="form_box">
        <label>Nombre</label>
        <input type="text" name="contact_name">
        <label>Telefono</label>
        <input type="number" name="contact_phone">
        <label>Correo electrónico</label>
        <input type="mail" name="contact_email">
        <button id="submit">Enviar</button>
    </div>
    <div id="form_table">

    </div>
</body>
</html>
<?php 
    } else {
?>
<h1>Error: usuario o contraseña incorrectos</h1>
<?php 
    }
}
?>
