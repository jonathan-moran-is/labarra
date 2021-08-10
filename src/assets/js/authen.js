firebase.initializeApp({
    apiKey: "AIzaSyCcYWQY1hb5Onx5T4hjDL1OmQ--2X7G2rI",
    authDomain: "labarra-f7836.firebaseapp.com",
    databaseURL: "https://labarra-f7836-default-rtdb.firebaseio.com",
    projectId: "labarra-f7836",
    storageBucket: "labarra-f7836.appspot.com",
    messagingSenderId: "785283606204",
    appId: "1:785283606204:web:1dc2391eae50ad601452b9",
    measurementId: "G-HQLRVS9EZP"
  });

  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();
  const auth = firebase.auth();

function registrar(){
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

firebase.auth().createUserWithEmailAndPassword(email, password)
.then(function(){
  verificar()
}).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

function ingreso(){

    var loginuser = document.getElementById('loginuser').value;
    var loginpass = document.getElementById('loginpass').value;

firebase.auth().signInWithEmailAndPassword(loginuser, loginpass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log('fallo al iniciar')
  });
}

function observador(){
    

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log('Existe usuario activo')
          aparece(user);
          var displayName = user.displayName;
          var email = user.email;

          console.log("******************");
          console.log(user.emailVerified);
          console.log("******************");

          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          console.log('No existe usuario activo')
          // ...
        }
      });
}
observador();

function aparece(user){
  var user = user;
  var contenido = document.getElementById('contenido');
  var singupbtn = document.getElementById('singupbtn');
  var singup = document.getElementById('singup');
  var logout = document.getElementById('logout');
  logout.innerHTML = `
  <div class=""><button class="btn btn-danger" onclick="cerrar()">Cerrar Sesión</button></div>
  `;
  if (user.emailVerified) {
    contenido.innerHTML = `
    <div class="row">
      <div class="col-lg-2"></div>
      <div class="col-lg-8 alert alert-success"><h2>Bienvenido `+user.email+`! Ahora tienes acceso total al Sitio Web, gracias por verificar tu correo</h2></div>
      <div class="col-lg-2"></div>
    </div>
    <div class="row">
    <div class="col-lg-2"></div>
    <div class="col-lg-8"><h2>
      <a href="admin.html"><button class="btn btn-block btn-info">Ir a la Pagina de Administrador</button></a>
    </div>
    <div class="col-lg-2"></div>
    </div>
      `;
  }
  window.location = "../public/admin.html"
}

function cerrar(){
  firebase.auth().signOut().then(function() {
    console.log('Saliendo...');
    location.reload();
    window.location = "../public/login.html"
  }, function(error) {
    console.error('Sign Out Error', error);
    
  });
}

function verificar(){
  
var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  console.log("Enviando correo...");
}).catch(function(error) {
  // An error happened.
  console.log(error);
});
}