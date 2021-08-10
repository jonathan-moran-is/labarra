// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcYWQY1hb5Onx5T4hjDL1OmQ--2X7G2rI",
    authDomain: "labarra-f7836.firebaseapp.com",
    databaseURL: "https://labarra-f7836-default-rtdb.firebaseio.com",
    projectId: "labarra-f7836",
    storageBucket: "labarra-f7836.appspot.com",
    messagingSenderId: "785283606204",
    appId: "1:785283606204:web:1dc2391eae50ad601452b9",
    measurementId: "G-HQLRVS9EZP"
  };
  
  //Referencia para la base de datos(Firestore de Firebase)
  var db = firebase.firestore();
  //Referencia para el servicio de almacenamiento
  var storage = firebase.storage();
  var storageRef = firebase.storage().ref();

  /*-var imagenesURL = [];
  var imagenes = [];
  
  function subirImagen(e){
    var categoriaID = document.getElementById('categoriaProducto').value;
    var nombreID = document.getElementById('nombreProducto').value;
        for(let i=0;i<3;i++){
            const id = Math.random().toString(36).substring(2);
            const file = e.target.files[i];
            const filePath = `productos/${categoriaID}_${nombreID}_${i}.jpg`;
            const ref = this.storage.ref(filePath);
            ref.put(file).then(function(snapshot) {
                var uploadTask = snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    imagenesURL[i] = downloadURL.toString();
                    console.log('File available at', downloadURL);
                  });
                console.log('Uploaded file!');
              });
        }
    }

    //GUARDAR DATOS(Productos)
    function guardarProducto(){
 
    //Se obtiene el valor del formulario mediante ID de los Input
    var nombreProducto = document.getElementById('nombreProducto').value;
    var precioProducto = document.getElementById('precioProducto').value;
    var categoriaProducto = document.getElementById('categoriaProducto').value;
    var descripcionProducto = document.getElementById('descripcionProducto').value;
    var cantidadVendidaProducto = document.getElementById('cantidadVendidaProducto').value;
    var calificacionProducto = document.getElementById('calificacionProducto').value;

    if(nombreProducto != "" & precioProducto != "" & categoriaProducto != "" & descripcionProducto != "" & cantidadVendidaProducto != "" & calificacionProducto != "" & imagenesURL.length != 0){
        const id = Math.random().toString(36).substring(2);

        //Se guardan las variables en una tabla con ID
        db.collection("Productos").doc(categoriaProducto+"_"+id).set({
            id: categoriaProducto+"_"+id,
            nombreProducto: nombreProducto,
            precioProducto: precioProducto,
            categoriaProducto: categoriaProducto,
            descripcionProducto: descripcionProducto,
            cantidadVendidaProducto: cantidadVendidaProducto,
            calificacionProducto: calificacionProducto,
            imagenes: imagenesURL
        })
        .then(function(docRef) {
            alert('¡Registro exitoso!');
            location.reload();
        })
        .catch(function(error) {
            console.error("Error al registrar el producto: ", error);
        });
        }else{
            alert('¡Complete todos los campos!');
        }
    }

    //BORRAR DATOS(Productos)
    function eliminarProducto(id){
    const res = db.collection('Productos').doc(id).delete();
    alert('¡Producto eliminado!');
    }-*/

    function guardarContacto(){
 
        //Se obtiene el valor del formulario mediante ID de los Input
        var contactoNombre = document.getElementById('contactoNombre').value;
        var contactoTelefono = document.getElementById('contactoTelefono').value;
        var contactoMotivo = document.getElementById('contactoMotivo').value;
        var contactoMensaje = document.getElementById('contactoMensaje').value;
    
            if(contactoNombre != "" & contactoTelefono != "" & contactoMotivo != "" & contactoMensaje != ""){
                //Se guardan las variables en una tabla con ID
                db.collection("Contacto").doc("id_"+contactoTelefono).set({
                    id: "id_"+contactoTelefono,
                    contactoNombre: contactoNombre,
                    contactoTelefono: contactoTelefono,
                    contactoMotivo: contactoMotivo,
                    contactoMensaje: contactoMensaje
                })
                .then(function(docRef) {
                    alert('¡Mensaje enviado!');
                    location.reload();
                })
                .catch(function(error) {
                    alert('¡No se pudo enviar su mensaje!')
                    console.error("Error al enviar el mensaje: ", error);
                });
            }else{
                alert('¡Complete todos los campos!');
            }
        }


    //LEER DATOS(Productos)
    /*-it("should get all documents from a collection", () => {
        var output =
        // [START get_multiple_all]
        db.collection("Productos").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        });
        // [END get_multiple_all]
        return output;
    });
    //var tablaProductos = document.getElementById('productosTabla');
    db.collection("Productos").onSnapshot((querySnapshot) => {
        //tablaProductos.innerHTML = ``;
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().nombreProducto}`);
            //tablaProductos.innerHTML += 
            `
            <div class="row col-lg-12 tablacontenedor">
                <div class="row col-lg-12 tablasP">
                <div class="col-lg-8"><h6>Producto: </h6><h5> ${doc.data().nombreProducto}</h5></div>
                <div class="col-lg-4">
                    <div class="col-lg-6"><button class="btn btn-success" onclick="editarProducto('${doc.id}','${doc.data().nombreProducto}','${doc.data().precioProducto}','${doc.data().categoriaProducto}','${doc.data().categoriaProducto}','${doc.data().cantidadVendidaProducto}')">Editar</button></div>
                    <div class="col-lg-6"><button class="btn btn-warning" onclick="eliminarProducto('${doc.id}')">Eliminar</button></div>
                </div>
                </div>
                <div class=" row col-lg-12 tablasP">
                    <div class="col-lg-12"><h6>Precio: </h6><p> ${doc.data().precioProducto}</p></div>
                </div>
                <div class="row col-lg-12 tablasP">
                    <div class="col-lg-6 tablaspacl">Categoria: ${doc.data().categoriaProducto}</div>
                    <div class="col-lg-6 tablaspacr">Descripcion: ${doc.data().descripcionProducto}</div>
                </div>
                <div class="row col-lg-12 tablasP">
                    <div class="col-lg-6 tablaspacl">Calificacion: ${doc.data().calificacionProducto}</div>
                    <div class="col-lg-6 tablaspacr">Cantidad Vendida: ${doc.data().cantidadVendidaProducto}</div>
                </div>
                <div class="row col-lg-12 tablasP">
                    <div class="col-lg-12">
                        <h6>Imagenes: </h6>
                        <div data-plugin-lightbox data-plugin-options="{'delegate': 'a', 'type': 'image', 'gallery': {'enabled': true}}">
                            <div class="row">
                                <div class="col-lg-4">
                                        <img class="img-fluid" width="200px" height="150px" src="this.storage.ref(${doc.data().imagenes[0]})" alt="Office">
                                </div>
                                <div class="col-lg-4">
                                        <img class="img-fluid" width="200px" height="150px" src="this.storage.ref(${doc.data().imagenes[0]})" alt="Office">
                                </div>
                                <div class="col-lg-4">
                                        <img class="img-fluid" width="200px" height="150px" src="this.storage.ref(${doc.data().imagenes[0]})" alt="Office">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br>
            `
        });
    });-*/

/*-
//GUARDAR DATOS(Usuarios)
function guardaru(){

    var usuario = document.getElementById('pacuser').value;
    var contraseña = document.getElementById('pacpass').value;
    var contraseñac = document.getElementById('pacpassc').value;

if (contraseña!=contraseñac) {
    alert("La contraseña no coincide");
} else {
    db.collection("PacUsers").doc(usuario+"-id").set({
        usuario:usuario,
        contraseña:contraseña
    })
    .then(function(docRef) {
        document.getElementById('pacuser').value = '';
        document.getElementById('pacpass').value = '';
        document.getElementById('pacpassc').value = '';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
}

//GUARDAR DATOS(Servicios)
function guardars(){

    var servicio = document.getElementById('servicio').value;
    var precio = document.getElementById('precio').value;
    var sesiones = document.getElementById('sesiones').value; 
    var detalles = document.getElementById('detalles').value;


    db.collection("Servicios").doc(servicio+"-id").set({
        servicio: servicio,
        precio: precio,
        sesiones: sesiones,
        detalles: detalles
    })
    .then(function(docRef) {
        document.getElementById('servicio').value = '';
        document.getElementById('precio').value = '';
        document.getElementById('sesiones').value = '';
        document.getElementById('detalles').value = '';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

//GUARDAR DATOS(Contacto)
function guardarc(){

    var cemail = document.getElementById('contactemail').value;
    var cnombre = document.getElementById('contactnombre').value;
    var casunto = document.getElementById('contactasunto').value;
    var cmensaje = document.getElementById('contactmensaje').value;


    db.collection("Contacto").doc(cnombre+"-id").set({
        cemail: cemail,
        cnombre: cnombre,
        casunto: casunto,
        cmensaje: cmensaje
    })
    .then(function(docRef) {
        document.getElementById('contactemail').value = '';
        document.getElementById('contactnombre').value = '';
        document.getElementById('contactasunto').value = '';
        document.getElementById('contactmensaje').value = '';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}-*/


/*-

//LEER DATOS(Usuarios)
var tablausers = document.getElementById('tablausers');
db.collection("PacUsers").onSnapshot((querySnapshot) => {
    tablausers.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tablausers.innerHTML += `
        <tr>
        <th scope="row">${doc.id}</th>
        <td>${doc.data().usuario}</td>
        <td>${doc.data().contraseña}</td>
        <td><button class="btn btn-warning"
        onclick="editaru('${doc.id}','${doc.data().usuario}',
        '${doc.data().contraseña}')">Editar</button></td>
        <td><button class="btn btn-danger"
        onclick="eliminaru('${doc.id}')">Eliminar</button></td>
        </tr>
        `
    });
});

//LEER DATOS(Servicios)
var tablaserv = document.getElementById('tablaserv');
db.collection("Servicios").onSnapshot((querySnapshot) => {
    tablaserv.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tablaserv.innerHTML += `
        <tr>
        <td>${doc.data().servicio}</td>
        <td>${doc.data().precio}</td>
        <td>${doc.data().sesiones}</td>
        <td>${doc.data().detalles}</td>
        <td><button class="btn btn-warning" onclick="editars('${doc.id}','${doc.data().servicio}','${doc.data().precio}','${doc.data().sesiones}','${doc.data().detalles}')">Editar</button></td>
        <td><button class="btn btn-danger" onclick="eliminars('${doc.id}')">Eliminar</button></td>
        </tr>
        `
    });
});

//LEER DATOS(Servicios|Publicidad)
var tablaservpt = document.getElementById('tablaservpt');
db.collection("Servicios").onSnapshot((querySnapshot) => {
    tablaservpt.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tablaservpt.innerHTML += `
        <div class="col-lg-4">
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-text">${doc.data().servicio}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Sesiones: </strong>${doc.data().sesiones}</li>
                <li class="list-group-item" style="height:100px"><strong>Detalles: </strong><br>${doc.data().detalles}</li>
                <li class="list-group-item"><h4>Precio:</h4><span style="font-size:2rem">${doc.data().precio}</span></li>
            </ul>
            </div>
        </div>
        `
    });
});

//LEER DATOS(Contacto)
var tablacontacto = document.getElementById('tablacontacto');
db.collection("Contacto").onSnapshot((querySnapshot) => {
    tablacontacto.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tablacontacto.innerHTML += `
        <tr>
        <td><h5>Correo: </h5><br>${doc.data().cemail}</td>
        <td><h5>Nombre: </h5><br>${doc.data().cnombre}</td>
        <td><h5>Asunto: </h4><br>${doc.data().casunto}</td>
        <td><h5>Mensaje: </h5><br>${doc.data().cmensaje}</td>
        <td><button class="btn btn-danger" onclick="eliminarc('${doc.id}')">Eliminar</button></td>
        </tr>
        `
    });
});

//LEER DATOS(Estado Cuenta)
var tablaec = document.getElementById('tablaec');
db.collection("Cuenta").onSnapshot((querySnapshot) => {
    tablaec.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tablaec.innerHTML += `
        <div class="col-lg-1 celdas"><h6>${doc.data().cita}</h6></div>
        <div class="col-lg-2 celdas">${doc.data().fechacit}</div>
        <div class="col-lg-3 celdas">${doc.data().conceptocit}</div>
        <div class="col-lg-1 celdas">${doc.data().costocit}</div>
        <div class="col-lg-2 celdas">${doc.data().acuentacit}</div>
        <div class="col-lg-1 celdas">${doc.data().saldocit}</div>
        <div class="col-lg-2 celdas">${doc.data().atendiocit}</div>
        `
    });
});

//BORRAR DATOS(Pacientes)
function eliminar(id){
    
db.collection("Pacientes").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}

//BORRAR DATOS(Usuarios)
function eliminaru(id){
    
    db.collection("PacUsers").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    }

//BORRAR DATOS(Servicios)
function eliminars(id){
    
    db.collection("Servicios").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    }

//BORRAR DATOS(Contacto)
function eliminarc(id){
    
    db.collection("Contacto").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    }

//ACTUALIZAR DATOS(Pacientes)
function editar(id,nombre,domicilio,fecnac,tel,padec,ocup,sexo){
    var datoactualizado = db.collection("Pacientes").doc(id);

    document.getElementById('nombre').value = nombre;
    document.getElementById('domicilio').value = domicilio;
    document.getElementById('fecnac').value = fecnac;
    document.getElementById('tel').value = tel;
    document.getElementById('padec').value = padec;
    document.getElementById('ocup').value = ocup;
    document.getElementById('sexo').value = sexo;

    var boton = document.getElementById('boton');
    boton.innerHTML = 'Editar';
    
    boton.onclick = function(){

        var nombre = document.getElementById('nombre').value;
        var domicilio = document.getElementById('domicilio').value;
        var fecnac = document.getElementById('fecnac').value;
        var tel = document.getElementById('tel').value;
        var padec = document.getElementById('padec').value;
        var ocup = document.getElementById('ocup').value;
        var sexo = document.getElementById('sexo').value;

        // Set the "capital" field of the city 'DC'
        return datoactualizado.update({
            domicilio: domicilio,
            fechanac: fecnac,
            nombre: nombre,
            ocupacion: ocup,
            padecimientos: padec,
            sexo: sexo,
            tel: tel
        })
        .then(function() {
            console.log("Document successfully updated!");
            boton.innerHTML = 'Guardar';
            document.getElementById("boton").onclick="guardar()";
            document.getElementById('nombre').value = '';
            document.getElementById('domicilio').value = '';
            document.getElementById('fecnac').value = '';
            document.getElementById('tel').value = '';
            document.getElementById('padec').value = '';
            document.getElementById('sexo').value = 'Elegir...';
            document.getElementById('ocup').value = '';
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
}

//ACTUALIZAR DATOS(Usuarios)
function editaru(id,usuario,contraseña){
    var datoactualizado = db.collection("PacUsers").doc(id);

    document.getElementById('pacuser').value = usuario;
    document.getElementById('pacpass').value = contraseña;
    document.getElementById('pacpassc').value = contraseña;

    var boton = document.getElementById('boton');
    boton.innerHTML = 'Editar';
    
    boton.onclick = function(){

        var usuario = document.getElementById('pacuser').value;
        var contraseña = document.getElementById('pacpass').value;
        var contraseñac = document.getElementById('pacpassc').value;

        // Set the "capital" field of the city 'DC'
        return datoactualizado.update({
            usuario: usuario,
            contraseña: contraseña
        })
        .then(function() {
            console.log("Document successfully updated!");
            boton.innerHTML = 'Guardar';
            document.getElementById("boton").onclick="guardar()";
            document.getElementById('pacuser').value = '';
            document.getElementById('pacpass').value = '';
            document.getElementById('pacpassc').value = '';
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
}

//ACTUALIZAR DATOS(Servicios)
function editars(id,servicio,precio,sesiones,detalles){
    var datoactualizado = db.collection("Servicios").doc(id);

    document.getElementById('servicio').value = servicio;
    document.getElementById('precio').value = precio;
    document.getElementById('sesiones').value = sesiones;
    document.getElementById('detalles').value = detalles;

    var boton = document.getElementById('boton');
    boton.innerHTML = 'Editar';
    
    boton.onclick = function(){

        var servicio = document.getElementById('servicio').value;
        var precio = document.getElementById('precio').value;
        var sesiones = document.getElementById('sesiones').value;
        var detalles = document.getElementById('detalles').value;

        // Set the "capital" field of the city 'DC'
        return datoactualizado.update({
            servicio: servicio,
            precio: precio,
            sesiones: sesiones,
            detalles: detalles
        })
        .then(function() {
            console.log("Document successfully updated!");
            boton.innerHTML = 'Guardar';
            document.getElementById("boton").onclick="guardars()";
            document.getElementById('servicio').value = '';
            document.getElementById('precio').value = '';
            document.getElementById('sesiones').value = '';
            document.getElementById('detalles').value = '';
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
}

$(document).ready(function(){


    var line = document.getElementById("line");

    var line = new Chart(line, {
        type: 'line',
        data:{
            labels: ["No. Pacientes", "No. Usuarios", "No. Servicios Registrados"],
            datasets: [{
                label: 'Datos',
                data: [3, 3, 2],
                backgroundColor:
                [
                    "blue",
                    "cyan",
                    "brown",
                ]
            }]
        }
    });

    var radar = document.getElementById("radar");

    var radar = new Chart(radar, {
        type: 'radar',
        data:{
            labels: ["Mensajes de Contacto", "Acceso al sitio", "Pacientes que dieron uso de 'Contacto'"],
            datasets: [{
                label: 'Contacto',
                data: [5, 10, 7],
                backgroundColor:
                [
                    "purple",
                    "red",
                    "green"
                ]
            }]
        }
    });

    var polarArea = document.getElementById("polarArea");

    var polarArea = new Chart(polarArea, {
        type: 'polarArea',
        data:{
            labels: ["Numero de pacientes", "Usuarios", "PUBG", "Apex Legends"],
            datasets: [{
                label: '# de jugadores',
                data: [1000, 750, 985, 500],
                backgroundColor:
                [
                    "blue",
                    "cyan",
                    "brown",
                    "gray"
                ]
            }]
        }
    });

});-*/