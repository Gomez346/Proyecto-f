/*let listaPacientes = [];

const objPacientes = {
    nombre: '',
    contraseña: '',
    telefono: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreInput = document.querySelector('#nombre');
const contraseñaInput = document.querySelector('#contraseña');
const telefonoInput = document.querySelector('#telefono');
const btnAgregarInput = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(nombreInput.value === '' || contraseñaInput.value === '' || telefonoInput.value === '') {
        alert('Todos los campos se deben llenar');
        return;
    }

    if(editando) {
        editarPaciente();
        editando = false;
    } else {
        objPacientes.nombre = nombreInput.value;
        objPacientes.contraseña = contraseñaInput.value;
        objPacientes.telefono = telefonoInput.value

        agregarPaciente();
    }
}

function agregarPaciente() {

    listaPacientes.push({...objPacientes});

    mostrarPaciente();

    formulario.reset();
    limpiarObjeto();
}

function limpiarObjeto() {
    objPacientes.nombre = '';
    objPacientes.contraseña = '';
    objPacientes.telefono = '';
}

function mostrarPaciente() {
    limpiarHTML();

    const divPacientes = document.querySelector('.div-pacientes');

    listaPacientes.forEach(paciente => {
        const {nombre, contraseña, telefono} = paciente;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${nombre} - ${contraseña} -${telefono} `;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarEmpleado(paciente);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarPaciente(nombre);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divPacientes.appendChild(parrafo);
        divPacientes.appendChild(hr);
    });
}

function cargarEmpleado(paciente) {
    const { nombre, contraseña, telefono} = paciente;

    nombreInput.value = nombre;
    contraseñaInput.value = contraseña;
    telefonoInput.value = telefono;


    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    editando = true;
}

function editarPaciente() {

    objPacientes.nombre = nombreInput.value;
    objPacientes.contraseña = contraseñaInput.value;

    listaPacientes.map(paciente => {

        if(paciente.id === objPacientes.id) {
            paciente.nombre = objPacientes.nombre;
            paciente.contraseña = objPacientes.contraseña;
            paciente.telefono = objPacientes.telefono;

        }

    });

    limpiarHTML();
    mostrarPaciente();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar Paciente';

    editando = false;
}

function eliminarPaciente(id) {

    listaPacientes = listaPacientes.filter(paciente => paciente.telefono !== telefono);

    limpiarHTML();
    mostrarPaciente();
}

function limpiarHTML() {
    const divPacientes = document.querySelector('.div-empleados');
    while(divPacientes.firstChild) {
        divPacientes.removeChild(divPacientes.firstChild);
    }
}*/




let listaPacientes = [];

const objPacientes = {
    nombre: '',
    contraseña: '',
    telefono: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreInput = document.querySelector('#nombre');
const contraseñaInput = document.querySelector('#contraseña');
const telefonoInput = document.querySelector('#telefono');
const btnAgregarInput = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(nombreInput.value === '' || contraseñaInput.value === '' || telefonoInput.value === '') {
        alert('Todos los campos se deben llenar');
        return;
    }

    if(editando) {
        editarPaciente();
        editando = false;
    } else {
        objPacientes.nombre = nombreInput.value;
        objPacientes.contraseña = contraseñaInput.value;
        objPacientes.telefono = telefonoInput.value

        agregarPaciente();
    }
}

function agregarPaciente() {

    listaPacientes.push({...objPacientes});

    mostrarPaciente();

    formulario.reset();
    limpiarObjeto();
}

function limpiarObjeto() {
    objPacientes.nombre = '';
    objPacientes.contraseña = '';
    objPacientes.telefono = '';
}

function mostrarPaciente() {
    limpiarHTML();

    const divPacientes = document.querySelector('.div-pacientes');

    listaPacientes.forEach(paciente => {
        const {nombre, contraseña, telefono} = paciente;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${nombre} - ${contraseña} -${telefono} `;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarEmpleado(paciente);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarPaciente(telefono);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divPacientes.appendChild(parrafo);
        divPacientes.appendChild(hr);
    });
}

function cargarEmpleado(paciente) {
    const { nombre, contraseña, telefono} = paciente;

    nombreInput.value = nombre;
    contraseñaInput.value = contraseña;
    telefonoInput.value = telefono;


    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    editando = true;
}

function editarPaciente() {

    objPacientes.nombre = nombreInput.value;
    objPacientes.contraseña = contraseñaInput.value;

    listaPacientes.map(paciente => {

        if(paciente.telefono === objPacientes.telefono) {
            paciente.nombre = objPacientes.nombre;
            paciente.contraseña = objPacientes.contraseña;
            paciente.telefono = objPacientes.telefono;

        }

    });

    limpiarHTML();
    mostrarPaciente();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar Paciente';

    editando = false;
}

function eliminarPaciente(telefono) {

    listaPacientes = listaPacientes.filter(paciente => paciente.telefono !== telefono);

    limpiarHTML();
    mostrarPaciente();
}

function limpiarHTML() {
    const divPacientes = document.querySelector('.div-pacientes');
    while(divPacientes.firstChild) {
        divPacientes.removeChild(divPacientes.firstChild);
    }
}