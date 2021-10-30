$(document).ready(() =>{
    //Listado de usuarios
   const list = () =>{
   $.ajax({
       url:"http://localhost:8080/usuario",
       type:"GET",
       dataType:"json",
       success:function(res){
           let data="";
           res.forEach(element => {
               data+=`
                    <tr>
                        <td>${element.id}</td>
                        <td>${element.nombre}</td>
                        <td>${element.email}</td>
                        <td>${element.prioridad}</td>
                        <td>
                        <button id="eliminar" class="btn btn-danger">Eliminar</button>
                        </td>
                        <td>
                        <button id="Actualizar" class="btn btn-primary ">Editar</button>
                        </td>
                    </tr>
               `
           });
           $("tbody").html(data);
    }
    })
}

//Guardar Usuario
    const save = () => {
        $("#agregar").on("click",function(){
            const datosUsuario={
                nombre: $("#nombre").val(),
                email: $("#email").val(),
                prioridad: $("#prioridad").val(),
            }
            $.ajax({
                url:"http://localhost:8080/usuario",
                contentType:"application/json",
                type:"POST",
                data:JSON.stringify(datosUsuario),
                dataType:"json",
                success: (data) =>{
                    $("#mensaje").html("Usuario Creado").css("display","block")
                    reset();
                    list();
                    console.log("Usuario Registro!")
                }
            })
        })
    }

//metodo para limpiar el formulario
const reset = () =>{
     $("#nombre").val("");
     $("#email").val("");
     $("#prioridad").val("");
}

//LLamado a las funciones
list();
save();

})