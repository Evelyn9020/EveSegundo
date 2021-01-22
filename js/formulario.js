
// Evelyn Quinatoa
$(document).on("click","#btn-registrar",function(){
// validar apellido
let apellido=$("#txt-apellidos").val();
if(apellido.trim().length==0){
alert("debe elejir un apellido");
return false;
}
// validar nombre
let nombre=$("#txt-nombres").val();
if(nombre.trim().length==0){
alert("debe elejir un nombre");
return false;
}
// validar usuario
let usuario=$("#txt-usuario").val();
if(usuario.trim().length==0){
alert("debe elejir un usuario");
return false;
}
// validar contraseña
let contraseña=$("#txt-contraseña").val();
if(contraseña.trim().length==0){
alert("debe elejir una contraseña");
return false;
}



alert("datos correctos");
})

// <script type="text/javascript">


// window.addEventListener("load",()=>{
//   document.getElementById("btn_registrar").addEventListener("click",()=>{
//     let ap=document.getElementById("last_name")
//     let nm=document.getElementById("name")
//     let user=document.getElementById("user")
//     let password=document.getElementById("password")
//     let pais=document.getElementById("pais")
//     alert("Bienvenid@: "+ap.value+nm.value)

//   if(ap.value.trim().length<6){
//   Swal.fire({
//   position: 'top-end',
//   icon: 'error',
//   title: 'el apellido es obligatorio',
//   showConfirmButton: true,
//   timer: 5000
// })
//   return false;
// }
//   if(nm.value.trim().length<6){
//   Swal.fire({
//   position: 'top-end',
//   icon: 'error',
//   title: 'el nombre es obligatorio',
//   showConfirmButton: true,
//   timer: 5000
// })
//   return false;
//       }
//   if(user.value.trim().length<6){
//   Swal.fire({
//   position: 'top-end',
//   icon: 'error',
//   title: 'el usuario es obligatorio',
//   showConfirmButton: true,
//   timer: 5000
// })
//   return false;
// }
//   if(password.value.trim().length<6){
//   Swal.fire({
//   position: 'top-end',
//   icon: 'error',
//   title: 'la contraseña es obligatorio',
//   showConfirmButton: true,
//   timer: 5000
// })
//   return false;
// }
//   if(pais.value.trim().length<6){
//   Swal.fire({
//   position: 'top-end',
//   icon: 'error',
//   title: 'el pais es obligatoria',
//   showConfirmButton: true,
//   timer: 5000
// })
//   return false;
// }

//     })
//   })