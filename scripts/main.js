window.addEventListener('load', function() {

    let tabla = document.getElementById("table_contacts");

    function cargarTabla() {
        fetch("ajax.php", {
            method: "GET",
            headers: { "Content-type": "application/json" }
        })
        .then(response => response.json())
        .then(data => {
            data.forEach(contacto => {
                agregarFila(contacto.id, contacto.nombre, contacto.telefono, contacto.email);
            });
        })
        .catch(error => console.error("Error:", error));
    }

    document.getElementById('submit').addEventListener('click', function(e) {
        e.preventDefault();
        if (document.getElementById("submit").textContent == "Enviar") {
            enviarContacto();
        } else if (document.getElementById("submit").textContent == "Editar") {
            let id = document.getElementById("submit").getAttribute("data-id");
            editarContacto(id);
        }
    });

    function enviarContacto() {
        let name = document.getElementById("contact_name").value;
        let phone = document.getElementById("contact_phone").value;
        let mail = document.getElementById("contact_email").value;

        let formData = new FormData();
        formData.append("nombre", name);
        formData.append("telefono", phone);
        formData.append("email", mail);

        if (name !== "" && phone !== "" && mail !== "") {
            fetch("ajax_insert.php", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                let id = data.id;
                agregarFila(id, name, phone, mail); 
                document.getElementById("form_contacts").reset();
                alert(data.message); 
                
            })
            .catch(error => console.error("Error:", error));
        } else {
            alert("Los campos deben estar rellenados");
        }
    }

    function editarContacto(id) {
        let name = document.getElementById("contact_name").value;
        let phone = document.getElementById("contact_phone").value;
        let mail = document.getElementById("contact_email").value;

        let formData = new FormData();
        formData.append("id", id);
        formData.append("nombre", name);
        formData.append("telefono", phone);
        formData.append("email", mail);

        fetch("ajax_update.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            actualizarFila(id, name, phone, mail);
            document.getElementById("form_contacts").reset();
            document.getElementById("submit").textContent = "Enviar";
            document.getElementById("submit").removeAttribute("data-id");
            alert(data.message);
        
        })
        .catch(error => console.error("Error:", error));
    }

    function agregarFila(id, nombre, telefono, email) {
        let fila = document.createElement("tr");
        fila.setAttribute("data-id", id);

        fila.innerHTML = `
        <td>
            <p>Nombre: ${nombre}</p>
            <p>Teléfono: ${telefono}</p>
            <p>Email: ${email}</p>
            <button class="delete_contact" data-id="${id}">Borrar</button>
            <button class="edit_contact" data-id="${id}">Editar</button>
        </td>`;

        tabla.appendChild(fila);

        fila.querySelector(".delete_contact").addEventListener("click", function() {
            eliminarContacto(id, fila);
        });

        fila.querySelector(".edit_contact").addEventListener("click", function() {
            document.getElementById("contact_name").value = nombre;
            document.getElementById("contact_phone").value = telefono;
            document.getElementById("contact_email").value = email;
            document.getElementById("submit").textContent = "Editar";
            document.getElementById("submit").setAttribute("data-id", id);
        });
    }

    function actualizarFila(id, nombre, telefono, email) {
        let fila = document.querySelector(`tr[data-id='${id}']`);
        if (fila) {
            fila.innerHTML = `
            <td>
                <p>Nombre: ${nombre}</p>
                <p>Teléfono: ${telefono}</p>
                <p>Email: ${email}</p>
                <button class="delete_contact" data-id="${id}">Borrar</button>
                <button class="edit_contact" data-id="${id}">Editar</button>
            </td>
            `;

            fila.querySelector(".delete_contact").addEventListener("click", function() {
                eliminarContacto(id, fila);
            });

            fila.querySelector(".edit_contact").addEventListener("click", function() {
                document.getElementById("contact_name").value = nombre;
                document.getElementById("contact_phone").value = telefono;
                document.getElementById("contact_email").value = email;
                document.getElementById("submit").textContent = "Editar";
                document.getElementById("submit").setAttribute("data-id", id);
            });
        }
    }

    function eliminarContacto(id, fila) {
        let formData = new FormData();
        formData.append("id", id);

        fetch("ajax_delete.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            fila.remove();
            alert("Contacto eliminado correctamente.");
        })
        .catch(error => console.error(error));
    }

    cargarTabla();
});
