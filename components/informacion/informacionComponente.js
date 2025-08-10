export function informacion(tarea) {
    // Contenedor principal
    let div = document.createElement('div');
    div.className = "contenedor-informacion";

    // ---------------- Botones ----------------
    let divBotones = document.createElement('div');
    divBotones.className = "div-botones";

    let btnTarea = document.createElement('button');
    btnTarea.className = "btn-tarea";
    btnTarea.innerText = "+ tarea";

    let btnArchivados = document.createElement('button');
    btnArchivados.className = "btn-archivados";
    btnArchivados.innerText = "Archivados";

    divBotones.appendChild(btnTarea);
    divBotones.appendChild(btnArchivados);

    // ---------------- Información de la tarea ----------------
    let divInformacion = document.createElement('div');
    divInformacion.className = "div-informacion";

    // Estado
    let divEstado = document.createElement('div');
    divEstado.className = `estado-tarea ${tarea.estado}`;
    divEstado.innerText = tarea.estado;

    // Título
    let titulo = document.createElement('h3');
    titulo.className = "titulo-asignacion";
    titulo.innerText = tarea.titulo;

    // Descripción
    let descripcion = document.createElement('p');
    descripcion.className = "descripcion-asignacion";
    descripcion.innerText = tarea.descripcion;

    // Texto integrantes
    let spanIntegrantes = document.createElement('span');
    spanIntegrantes.className = "texto-integrantes";
    spanIntegrantes.innerText = "Integrantes";

    // Contenedor de integrantes
    let divIntegrantes = document.createElement('div');
    divIntegrantes.className = "div-integrantes";

    tarea.integrantes.forEach(icono => {
        let divIcono = document.createElement('div');
        divIcono.className = "integrante";
        divIcono.innerText = icono;
        divIntegrantes.appendChild(divIcono);
    });

    // ---------------- Añadir al divInformacion ----------------
    divInformacion.appendChild(divEstado);
    divInformacion.appendChild(titulo);
    divInformacion.appendChild(descripcion);
    divInformacion.appendChild(spanIntegrantes);
    divInformacion.appendChild(divIntegrantes);

    // ---------------- Unir todo ----------------
    div.appendChild(divBotones);
    div.appendChild(divInformacion);

    return div;
}
