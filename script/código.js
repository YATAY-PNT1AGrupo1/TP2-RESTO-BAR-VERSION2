function enviarDatos() {
  if (confirm("\u00BFEst\u00E1 seguro de enviar el formulario?")) {
    let resulUsuario = validarNombre(document.getElementById("nombre").value);

    if (resulUsuario == true) {
      var resulTelefono = validarNroTel(document.getElementById("telefono"));
    }

    if (resulTelefono == true) {
      var resulComensales = validarComensales(
        document.getElementById("cantidad").value
      );
    }

    if (
      resulUsuario == true &&
      resulTelefono == true &&
      resulComensales == true
    ) {
      alert("Datos correctos! Form enviado");
      document.getElementById("form").reset();
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
  ///////////////////////////////////////////////////////////////////

  //validamos 3 inputs mediantes JS.
}

function validarNombre(nombre) {
  if (nombre != "") {
    return true;
  } else {
    alert("El NOMBRE es de carga obligatoria!");
    document.getElementById("nombre").focus();
    return false;
  }
}

function validarNroTel(telefono) {
  var nrotel = /^\d{10}$/;

  if (telefono.value.match(nrotel)) {
    //alert("Tel\u00e9fono v\u00E1lido!");
    return true;
  } else {
    alert("Tel\u00e9fono inv\u00E1lido!");
    document.getElementById("telefono").value = "";
    document.getElementById("telefono").focus();
    return false;
  }
}

function validarComensales(cantidad) {
  if (cantidad != "") {
    return true;
  } else {
    alert("Debe asignar la cantidad de comensales");
    document.getElementById("cantidad").focus();
    return false;
  }
}
