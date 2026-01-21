const contacto1 = {
    nombre: "Pedro Sánchez",
    cbu: "123456789",
    alias: "peter",
    banco: "Banco Estado"
};

const contacto2 = {
    nombre: "Maria Gonzalez",
    cbu: "987654321",
    alias: "Ita",
    banco: "Banco Chile"
};

const contacto3 = {
    nombre: "Ignacio Cuevas",
    cbu: "173982456",
    alias: "nacho",
    banco: "BCI"
};

const contacto4 = {
    nombre: "Coni Rojas",
    cbu: "197346528",
    alias: "Coni",
    banco: "Scotiabank"
};

const contacto5 = {
    nombre: "Trinidad Cuevas",
    cbu: "193746852",
    alias: "Trini",
    banco: "Santander"
};



const contactos = [contacto1, contacto2, contacto3, contacto4, contacto5];

$(function () {

    function cargarContactos(contactos) {
        let elementos = "";

        // Geneando los contactos con Id único
        contactos.forEach((contacto, index) => {
            let { nombre, cbu, alias, banco } = contacto;
            let collapseId = `collapse${index}`;

            elementos += `<div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
                                ${nombre}
                            </button>
                        </h2>
                        <div id="${collapseId}" class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                CBU: <strong>${cbu}</strong> <br> Alias: <strong>${alias}</strong> <br> Banco: <strong>${banco}</strong>
                            </div>
                        </div>
                    </div>`;
        });

        $("#accordionExample").html(elementos);
    }

    function init() {
        cargarContactos(contactos);
    }

    init();


    //Eventos con Jquery
    function filtrarContactos(textoFiltro) {
        let filtro = textoFiltro.toLowerCase();
        let resultados = contactos.filter((contacto) => {
            return contacto.nombre.toLowerCase().includes(filtro) ||
                contacto.alias.toLowerCase().includes(filtro) ||
                contacto.cbu.includes(filtro) ||
                contacto.banco.toLowerCase().includes(filtro);
        });

        cargarContactos(resultados);
    }

    //Evento para buscar contactos
    $("#contacto").on("keyup", function (e) {
        let textoBusqueda = $(this).val();
        filtrarContactos(textoBusqueda);
    });

    // Prevenir envio del formulario
    $("#BuscarContacto").on("submit", function (e) {
        e.preventDefault();
    });

});