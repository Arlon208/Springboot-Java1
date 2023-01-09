// Call the dataTables jQuery plugin
$(document).ready(function() {

cargarUsuarios();
  $('#usuarios').DataTable();
  actualizarEmailDelUsuario();
});

function actualizarEmailDelUsuario(){
    document.getElementById('txt-email-usuario').outerHTML = localStorage.email;
}

async function cargarUsuarios() {

  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: getHeaders()
  });
  const  usuarios = await request.json();



let listadoHTML = '';

for (let usuario of usuarios){

let botonEliminar = '<a href="#" onclick="eliminarUsuario(' + usuario.id + ')" class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></a>';
let botonActualizar = '<a href="#" onclick="actualizarUsuario(' + usuario.id + ')" class="btn btn-warning btn-circle"><i class="fa-user"></i></a>';

    let usuarioHTML = '<tr><td>'+ usuario.id +'</td><td>'+ usuario.nombre +' '+ usuario.apellido +'</td><td>'
        + usuario.email+' </td><td>'+usuario.telefono + '</td><td>' + botonEliminar + "  " + botonActualizar + '</td></tr>';

    listadoHTML += usuarioHTML;


}

  console.log(usuarios);


document.querySelector('#usuarios tbody').outerHTML = listadoHTML;

}
function getHeaders(){
return{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    };
}

async function actualizarUsuario(id) {

if(!confirm('¿Desea Actualizar este usuario?')){
    return;
}

     const request = await fetch('api/usuario/' + id, {
        method: 'GET',
        headers: getHeaders()
      });

    return "redirect/registrar.html";
}

async function eliminarUsuario(id) {

if(!confirm('¿Desea Eliminar este usuario?')){
    return;
}

     const request = await fetch('api/usuarios/' + id, {
        method: 'DELETE',
        headers: getHeaders()
      });

    location.reload();
}