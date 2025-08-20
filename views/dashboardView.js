import { header } from "../components/header/headerComponent.js";
import { footer } from "../components/footer/footerComponent.js";
import { tareas } from "../components/tareas/tareasComponent.js";
import { informacion } from "../components/informacion/informacionComponente.js";

export async function dashboard() {
    
    try {
        // Base de datos de tareas
        const resultado = await fetch("http://localhost:3000/tareas");
        const datos = await resultado.json();
        let tareasDb = datos;
        console.log(tareasDb);
        
        let dashboard = document.createElement('section');
        dashboard.className = "dashboard";
        
        // header
        dashboard.appendChild(header());
        
        //Sección1
        let seccion1 = document.createElement('section');
        seccion1.className = "seccion-1";
        seccion1.appendChild(tareas(tareasDb));
        seccion1.appendChild(informacion(tareasDb[0]));
        dashboard.appendChild(seccion1);
        
        // footer
        dashboard.appendChild(footer());
        
        return dashboard;
    } catch (error) {
        console.error("error:", error);
    }
}

dashboard().then(elemento => {
    document.body.appendChild(elemento);
});
