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
    <link rel="stylesheet" href="styles/style.css">
    <script type="text/javascript" src="scripts/main.js"></script>
    <title>Lista de Contactos</title>
</head>

<body>
    <h1>Bienvenido a la lista de contactos, <?php echo $usuario_valido; ?></h1>
    <div class="info">
        <div id="form_box">
            <form method="post" id="form_contacts">
                <fieldset>
                    <div class="input_label">
                        <label>Nombre</label>
                        <input type="text" name="contact_name" id="contact_name">
                    </div>
                    <div class="input_label">
                        <label>Telefono</label>
                        <input type="number" name="contact_phone" id="contact_phone">
                    </div>
                    <div class="input_label">
                        <label>Correo electrónico</label>
                        <input type="mail" name="contact_email" id="contact_email">
                    </div>
                    <div class="button">
                        <button id="submit" type="submit">Enviar</button>
                    </div>
                </fieldset>
            </form>
        </div>
        <div id="form_table">
            <h2>Lista de contactos:</h2>
            <table id="table_contacts"></table>
        </div>
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