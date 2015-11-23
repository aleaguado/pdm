	//A documentação da API esta em https://github.com/apache/cordova-plugin-geolocation

	document.addEventListener("deviceready", onDeviceReady, false);
	
	function onDeviceReady() {
		console.log(navigator.vibrate);
	}

	//Função que é chamada via um botão lá no index.html
		function rodar() {
		// Immediately start vibrating
		// vibrate for 100ms,
		// wait for 100ms,
		// vibrate for 200ms,
		// wait for 100ms,
		// vibrate for 400ms,
		// wait for 100ms,
		// vibrate for 800ms,
		// (do not repeat)
		navigator.notification.vibrateWithPattern([0, 100, 100, 200, 100, 400, 100, 800]);
    }
