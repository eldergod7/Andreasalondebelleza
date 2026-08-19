/* ==================================================
   FECHA MÍNIMA
================================================== */

const fecha = document.getElementById("fecha");


// Obtener fecha actual

let hoy = new Date();


// Ajustar zona horaria

let año = hoy.getFullYear();

let mes = String(hoy.getMonth() + 1).padStart(2, "0");

let dia = String(hoy.getDate()).padStart(2, "0");


// Fecha en formato YYYY-MM-DD

let fechaActual = año + "-" + mes + "-" + dia;


// No permitir fechas anteriores a hoy

fecha.min = fechaActual;



/* ==================================================
   FORMULARIO DE CITAS
================================================== */

const formulario =
    document.getElementById("formularioCita");


formulario.addEventListener(
    "submit",
    function(event) {


        // Evitar que la página se recargue

        event.preventDefault();


        // Obtener datos

        let nombre =
            document.getElementById("nombre").value;


        let telefono =
            document.getElementById("telefono").value;


        let servicio =
            document.getElementById("servicio").value;


        let profesional =
            document.getElementById("profesional").value;


        let fechaSeleccionada =
            document.getElementById("fecha").value;


        let hora =
            document.getElementById("hora").value;


        let comentario =
            document.getElementById("comentario").value;



        /* ==========================================
           VALIDAR FECHA
        ========================================== */

        let fechaElegida =
            new Date(
                fechaSeleccionada +
                "T00:00:00"
            );


        let diaSemana =
            fechaElegida.getDay();


        // Domingo

        if (diaSemana === 0) {

            alert(
                "El salón permanece cerrado los domingos. Selecciona otra fecha."
            );

            return;

        }



        /* ==========================================
           FORMATEAR FECHA
        ========================================== */

        let fechaBonita =
            fechaElegida.toLocaleDateString(
                "es-GT",
                {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }
            );



        /* ==========================================
           MOSTRAR CONFIRMACIÓN
        ========================================== */

        let confirmacion =
            document.getElementById(
                "confirmacion"
            );


        confirmacion.style.display =
            "block";


        confirmacion.innerHTML = `

            <h3>
                ✅ ¡Cita solicitada!
            </h3>

            <p>

                <strong>Cliente:</strong>
                ${nombre}

                <br>

                <strong>Teléfono:</strong>
                ${telefono}

                <br>

                <strong>Servicio:</strong>
                ${servicio}

                <br>

                <strong>Profesional:</strong>
                ${profesional}

                <br>

                <strong>Fecha:</strong>
                ${fechaBonita}

                <br>

                <strong>Hora:</strong>
                ${hora}

                ${
                    comentario
                    ?
                    `<br>
                     <strong>Comentario:</strong>
                     ${comentario}`
                    :
                    ""
                }

            </p>

            <br>

            <p>

                📌 Guarda esta información.
                Nos pondremos en contacto contigo
                para confirmar tu cita.

            </p>

        `;



        // Ir hacia confirmación

        confirmacion.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });


    }
);