/* ==========================================================
   ANDREA'S SALÓN DE BELLEZA
   JavaScript principal
   Google Calendar Appointment Scheduling
========================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ======================================================
       ANIMACIONES AL HACER SCROLL
    ====================================================== */

    const elementosAnimados = document.querySelectorAll(
        ".seccion, .servicio, .contactoItem, .agendaCaja, .oferta, .horarios, details"
    );


    elementosAnimados.forEach(function (elemento) {

        elemento.classList.add("revelar");

    });


    /* ======================================================
       INTERSECTION OBSERVER
       Hace que las secciones aparezcan suavemente
       al entrar en pantalla.
    ====================================================== */

    if ("IntersectionObserver" in window) {

        const observador = new IntersectionObserver(
            function (entradas, observer) {

                entradas.forEach(function (entrada) {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add("visible");

                        observer.unobserve(
                            entrada.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        elementosAnimados.forEach(function (elemento) {

            observador.observe(elemento);

        });

    } else {

        /* Compatibilidad con navegadores antiguos */

        elementosAnimados.forEach(function (elemento) {

            elemento.classList.add("visible");

        });

    }



    /* ======================================================
       ANIMACIÓN ESCALONADA PARA LOS SERVICIOS
    ====================================================== */

    document
        .querySelectorAll(".servicio")
        .forEach(function (tarjeta, indice) {

            tarjeta.style.transitionDelay =
                `${indice * 80}ms`;

        });



    /* ======================================================
       DESPLAZAMIENTO SUAVE
       Para los enlaces del menú:
       #inicio
       #servicios
       #galeria
       #agendar
       #contacto
    ====================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (enlace) {


            enlace.addEventListener(
                "click",
                function (event) {


                    const href =
                        this.getAttribute("href");


                    /* Ignorar enlaces solamente con # */

                    if (!href || href === "#") {

                        return;

                    }


                    const destino =
                        document.querySelector(href);


                    if (destino) {

                        event.preventDefault();


                        destino.scrollIntoView({

                            behavior: "smooth",

                            block: "start"

                        });

                    }

                }
            );

        });



    /* ======================================================
       HEADER AL HACER SCROLL
    ====================================================== */

    const header =
        document.querySelector("header");


    function actualizarHeader() {


        if (!header) {

            return;

        }


        if (window.scrollY > 80) {

            header.classList.add(
                "headerReducido"
            );

        } else {

            header.classList.remove(
                "headerReducido"
            );

        }

    }


    window.addEventListener(
        "scroll",
        actualizarHeader,
        {
            passive: true
        }
    );


    /* Ejecutar inmediatamente */

    actualizarHeader();



    /* ======================================================
       GOOGLE CALENDAR
    ====================================================== */

    const calendario =
        document.querySelector(
            ".calendarioGoogle iframe"
        );


    if (calendario) {


        calendario.addEventListener(
            "load",
            function () {


                const agenda =
                    document.getElementById(
                        "agendar"
                    );


                if (agenda) {

                    agenda.classList.add(
                        "calendarioCargado"
                    );

                }

            }
        );

    }



    /* ======================================================
       MENSAJE DE AYUDA PARA GOOGLE CALENDAR
    ====================================================== */

    const botonWhatsApp =
        document.querySelector(
            ".botonWhatsApp"
        );


    if (botonWhatsApp) {

        botonWhatsApp.addEventListener(
            "click",
            function () {

                console.log(
                    "WhatsApp abierto para atención al cliente."
                );

            }
        );

    }


});