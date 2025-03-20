window.addEventListener('load', function() {
    document.getElementById('submit').addEventListener('click', function(e) {
        e.preventDefault()
        let name = document.getElementById("contact_name")
        let phone = document.getElementById("contact_phone")
        let mail = document.getElementById("contact_email")
        let formData = new FormData();
        formData.append("nombre", name);
        formData.append("telefono", phone);
        formData.append("email", mail)
        fetch("ajax.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.success) {
                agregarFila(nombre, telefono, email); 
                document.getElementById("form_contacts").reset(); 
            }
        })
        .catch(error => console.error("Error:", error));
    });

    function agregarFila(nombre, telefono, email) {
        let tabla = document.getElementById("table_contacts");
        let fila = document.createElement("tr");
        fila.innerHTML = `<td>${nombre}</td><td>${telefono}</td><td>${email}</td>`;
        tabla.appendChild(fila);
    }
})