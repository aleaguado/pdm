	//A documentação da API esta em https://github.com/apache/cordova-plugin-geolocation

	//Adicionamos a "escuta"
    document.addEventListener("deviceready",onDeviceReady,false);

	//Uma simples mensagem de "Boas Vindas" ... Sera executada quando o Device estiver ok!
    function onDeviceReady() {
         alert("Bem Vindo ao descobridor de Lugares!!!");
    }

    // Essa função será executada caso dê certo a busca da Geolocalização!!!
    //
    function onGeoSuccess(position) {

		document.getElementById("minhageo").innerHTML = "Latitude: " + position.coords.latitude + "Longitude:" + position.coords.longitude ;

	}
	//Função que é chamada via um botão lá no index.html
	function pegaGeo() {
		//Carregamos algumas opções da biblioteca!!!
		var geolocationOptions = {
			timeout : 3000,
			enableHighAccuracy : true
		};
	
	//Esse é um dos métodos que a API fornece!!!Ele que esta pegando as informações de Geolocalização!!!
      navigator.geolocation.getCurrentPosition(onGeoSuccess,
                                         onFail,
                                         geolocationOptions);    
    }

    // Se der problema essa função será executada!!!!
    //
    function onFail(message) {
      alert('Falha devido ao seguinte problema:' + message);
    }
