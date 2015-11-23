	//A documentação da API esta em https://cordova.apache.org/docs/en/2.5.0/cordova/accelerometer/accelerometer.watchAcceleration.html

	var watchID;
	
	//Adicionamos a "escuta"
    document.addEventListener("deviceready",onDeviceReady,false);

	//Desde o início do programa ele irá verificar a aceleração, então aqui chama a função rodar()
    function onDeviceReady() {
        rodar();
    }
	
	//Função executada em caso de sucesso!
	function onSuccess(acceleration) {
		//Pegamos o campo HTML que irá receber o texto das coordenadas
		var element = document.getElementById('minhaac'); 
		//Pega a imagem que vamos mover
		var foto = document.getElementById('imagem');
		//Pegamos a aceleração
		var X = acceleration.x;
		var Y = acceleration.y;
		var Z = acceleration.z;
		
		//Alimentamos o HTML com os dados
		element.innerHTML = "X: " + X + " Y: " + Y + " Z: " + Z;
		
		//Ajustamos as medidas de TOP e LEFT
		var top =  (50 + (parseInt(Y)*5)) + "%";
		var left = (50 - (parseInt(X)*5)) + "%";
		
		
		foto.style.top =  top;
		foto.style.left = left;	
		
	}
	
	function rodar(){
		//Essa é a função que roda a captura da aceleração
		var options = { frequency: 1 };  // Update every 1 mseconds
		watchID = navigator.accelerometer.watchAcceleration(onSuccess, onFail, options);

	}
		
	function parar(){
		//Essa função serve para parar a captura
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
