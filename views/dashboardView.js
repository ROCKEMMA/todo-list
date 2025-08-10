import { header } from "../components/header/headerComponent.js";
import { footer } from "../components/footer/footerComponent.js";
import { tareas } from "../components/tareas/tareasComponent.js";
import { informacion } from "../components/informacion/informacionComponente.js";

export function dashboard(){

    // Base de datos de tareas
    let tareasDb = [
        {
            indice: 1,
            titulo: "Proyecto de Investigación sobre Energías Renovables",
            descripcion: "Elaborar un informe detallado sobre los diferentes tipos de energías renovables (solar, eólica, hidráulica y geotérmica). Incluir ventajas, desventajas y una propuesta de implementación local.",
            estado: "completado",
            fechaAs: "17/05/2025",
            fechaEn: "30/07/2025",
            integrantes: ["😇", "😊", "😎"]
        },
        {
            indice: 2,
            titulo: "Diseño de una Aplicación Móvil",
            descripcion: "Desarrollar el prototipo de una aplicación móvil para mejorar la organización de tareas escolares. Debe incluir pantallas de inicio, registro de tareas y recordatorios.",
            estado: "pendiente",
            fechaAs: "18/05/2025",
            fechaEn: "31/07/2025",
            integrantes: ["😇", "😎"]
        },
        {
            indice: 3,
            titulo: "Campaña de Concientización sobre el Reciclaje",
            descripcion: "Crear carteles, folletos y un plan de redes sociales para promover el reciclaje en la comunidad escolar. Debe incluir datos actuales y recomendaciones prácticas.",
            estado: "en progreso",
            fechaAs: "19/05/2025",
            fechaEn: "01/08/2025",
            integrantes: ["😊"]
        }
    ];


    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";

    // header
    dashboard.appendChild(header());

    //Sección1
    let seccion1 = document.createElement('section');
    seccion1.className = "seccion-1"
    seccion1.appendChild(tareas(tareasDb));
    seccion1.appendChild(informacion(tareasDb[0]));
    dashboard.appendChild(seccion1);

    // footer
    dashboard.appendChild(footer());

    return dashboard;
}

document.body.appendChild(dashboard());