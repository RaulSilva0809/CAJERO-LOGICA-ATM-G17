 let cuentas = [
   { nombre: "Hiromi", saldo: 200, password: 'helloworld' },
   { nombre: "Luis", saldo: 290, password: 'l33t' },
   { nombre: "Carlos", saldo: 67, password: '123' }
 ];

login(); 

function login(){
  let usuario = prompt('Escribe tu nombre');
  let contra = prompt('Ingresa la constraseña del usuario:')
  validarUsuario(usuario, contra);
}

 function validarUsuario (usuario, contra){
  for(let i = 0; i < cuentas.length; i++){
      //console.log(cuentas[i].nombre)
      if(usuario===cuentas[i].nombre){
        //console.log('si')
        //return 
        if(contra === cuentas[i].password){
          console.log('Datos correctos');
          mostrarMenu(i);
        }else{
          console.log('Contraseña incorrecta')
        }
        return
      }else{
       console.log('datos incorrectos');
      }
    }
 }


function mostrarMenu(posicionUsuario){
  let opcion =  prompt('Indica una opcion \n 1.Consulta saldo \n 2.Hacer deposito \n 3.Hacer retiro')
  if(opcion == '1'){
    consultarSaldo(posicionUsuario)
  }else if(opcion === '2'){
    depositar(posicionUsuario)
  }else if(opcion === '3'){
    retirar(posicionUsuario)
  }else if(opcion === '4'){
    alert('Sesion cerrada');
    return
  }else{
    alert('opcion invalida');
    mostrarMenu(posicionUsuario);
    }
  }


function consultarSaldo(posicionUsuario){
  alert('El saldo del usuario ' + cuentas[posicionUsuario].saldo)
  mostrarMenu(posicionUsuario);
}
function depositar(posicionUsuario){
  let ingreso = prompt("Escribe tu ingreso");
  ingreso = Number(ingreso)
  cuentas[posicionUsuario].saldo = cuentas[posicionUsuario.saldo] + ingreso;
  mostrarMenu(posicionUsuario);
}

function retirar(posicionUsuario){
  let retiro = prompt("Escribe cuanto quieres retirar:")
  retiro = Number(retiro)
  cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo - retiro;
  mostrarMenu(posicionUsuario);
}