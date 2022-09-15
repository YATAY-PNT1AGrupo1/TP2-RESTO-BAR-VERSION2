function enviarDatos() {

	if (confirm("\u00BFEst\u00E1 seguro de enviar el formulario?")) {
       //CAMBIAR LA LOGICA PARA QUE SOLO ENVIE SI LOS DATOS ESTAN BIEN
		let resulUsuario = validarNombre(document.getElementById('nombre').value);

		if (resulUsuario == true) {
			var resulTelefono = validarNroTel(document.getElementById('telefono'));
		}
        //CAMBIAR NOMBRE DE VARIABLE resulUsuario
		if (resulUsuario == true && resulTelefono == true) {
			alert("Datos correctos! Form enviado");
			return true;
		}
		else {
			//alert("Revise los datos que est\u00E1n mal cargados!");
			return false;
		}
	}
	else {
		return false;
	}
}

function validarNombre(nombre) {
	//recibe en el par�metro la cadena de texto ingresada

	if (nombre != '') {
		return true;
	}
	else {
		alert("El NOMBRE es de carga obligatoria!");
		document.getElementById('txtUsuario').focus();
		return false;
	}
}

function validarNroTel(inputtxt) {
	//recibe en el par�metro la referencia a un control input donde cargan el tel�fono

	var nrotel = /^\d{10}$/;

	if (inputtxt.value.match(nrotel)) {
		alert("Tel\u00e9fono v\u00E1lido!");
		return true;
	}
	else {
		alert("Tel\u00e9fono inv\u00E1lido!");
		document.getElementById('txtTelefono').value = '';
		document.getElementById("txtTelefono").focus();

		return false;
	}
}