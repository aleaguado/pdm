	//A documentação da API esta em https://cordova.apache.org/docs/en/2.5.0/cordova/accelerometer/accelerometer.watchAcceleration.html

	var watchID;
	
	//Adicionamos a "escuta"
    document.addEventListener("deviceready",onDeviceReady,false);

	//Desde o início do programa ele irá verificar a aceleração, então aqui chama a função rodar()
    function onDeviceReady() {
        rodar();
    }
	
	function onSuccess(acceleration) {
		var element = document.getElementById('minhaac'); 
		var foto = document.getElementById('imagem');
		var X = acceleration.x;
		var Y = acceleration.y;
		var Z = acceleration.z;
		
		element.innerHTML = "X: " + X + " Y: " + Y + " Z: " + Z;
		
		
		var top =  (50 + (parseInt(Y)*5)) + "%";
		var left = (50 - (parseInt(X)*5)) + "%";
		
		
		foto.style.top =  top;
		foto.style.left = left;	
		
	}
	
	function rodar(){
		var options = { frequency: 1 };  // Update every 1 mseconds
		watchID = navigator.accelerometer.watchAcceleration(onSuccess, onFail, options);

	}
		
	function parar(){
		if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;
        }
	}


    // Se der problema essa função será executada!!!!
    //
    function onFail(message) {
      alert('Falha ao acessar acelerometro:' + message);
    }
