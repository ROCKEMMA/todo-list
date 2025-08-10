import { tarea } from "../../modules/itemTarea/intemTarea.js";

export function tareas(tareasDb) {
    let div = document.createElement('div');
    div.className = "div-tareas";

    tareasDb.forEach((e) => {
        div.appendChild(
            tarea(
                e.indice,
                e.titulo,
                e.estado,
                e.fechaAs,
                e.fechaEn,
                e.integrantes
            )
        );
    });

    return div;
}
