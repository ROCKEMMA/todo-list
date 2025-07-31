export function header() {
    let header = document.createElement('header');

    let h1 = document.createElement('h1');
    h1.innerText = "✏️ Todo-List";
    header.appendChild(h1);

    // Div de tareas
    let divTareas = document.createElement('div');
    divTareas.className = "div-tareas-activas";

    // Texto "Pendientes"
    let spanTexto = document.createElement('span');
    spanTexto.innerText = "Pendientes";

    // Recuadro con el número 5
    let spanNumero = document.createElement('span');
    spanNumero.className = "numero-tareas";
    spanNumero.innerText = "5";

    // Agregar ambos al div-tareas
    divTareas.appendChild(spanTexto);
    divTareas.appendChild(spanNumero);

    header.appendChild(divTareas);

    // Div logo usuario
    let divLogoUsuario = document.createElement('div');
    divLogoUsuario.className = "div-logo-usuario";
    divLogoUsuario.innerText = "🧐";
    header.appendChild(divLogoUsuario);

    return header;
}
