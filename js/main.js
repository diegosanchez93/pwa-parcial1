const YOUR_API_KEY_OW = '';
const URL_OW = 'http://api.openweathermap.org/data/2.5/';


const button = document.getElementById("sendButton");
const main = document.getElementById("main");
const inputElement = document.getElementById("search");


button.addEventListener("click", ()=> {    
	searchClima(inputElement.value);        
});





function searchClima(wordToSearch) {              
	console.log('Palabra',wordToSearch);

	const fetchPromiseOW = fetch(`${URL_OW}weather?q=${wordToSearch}&appid=${YOUR_API_KEY_OW}&units=metric&lang=es`);
	
	
                                                   
	fetchPromiseOW.then(response => {               
		console.log('result', response);
		return response.json();

	}).then(result => {                        
		console.log('data', result);
        madeGrid(result);
        
	}).catch(err => {                          
		console.log('Hubo un error: ', err)
	});
}


function madeGrid(data) {   
	const name = data.name
	const icono = data.weather[0].icon;
	const iconourl = "http://openweathermap.org/img/w/" + icono + ".png";
	const iconodescripcion = data.weather[0].description;
    const temp = parseFloat(data.main.temp).toFixed(1);       
	const tempmin = parseFloat(data.main.temp_min).toFixed(1);
	const tempmax = parseFloat(data.main.temp_max).toFixed(1);
	const tempst = parseFloat(data.main.feels_like).toFixed(1);
	const humedad = data.main.humidity;
	const presion = parseInt(data.main.pressure);
	const velviento = parseInt(data.wind.speed * 3.6);           // * 3.6 para que de en Km/h
	const coordlon = data.coord.lon;
	const coordlat = data.coord.lat;


    console.log(`País/Ciudad: ${data.name}`);
	console.log(`Clima: ${data.weather[0].description}`);
	console.log(`Temperatura: ${data.main.temp}`);
	console.log(`Temp. Mín: ${data.main.temp_min}`);
	console.log(`Temp. Máx: ${data.main.temp_max}`);
	console.log(`S. Térmica: ${data.main.feels_like}`);
	console.log(`Humedad: ${data.main.humidity}`);
	console.log(`Presión: ${data.main.pressure}`);
	console.log(`Vel. Viento: ${data.wind.speed}`);
	console.log(`Longitud: ${data.coord.lon}`);
	console.log(`Latitud: ${data.coord.lat}`);





    main.innerHTML = `<p class="col-12" style="background-color: ${tempst <= 23 ? 'rgb(208, 208, 233)' : 'rgb(228, 206, 167)'}">${name}</p>
					  <div class="col-12" style="background-color: ${tempst <= 23 ? 'rgb(208, 208, 233)' : 'rgb(228, 206, 167)'}">
					     <div class="row" id="tabla">
					        <div class="col-3">
						       <img src="${iconourl}" alt="Icono Clima"><p>${iconodescripcion}</p>
						    </div>
						    <div class="col-3">
						       <p style="color: ${temp <= 23 ? 'blue' : 'orange'}">${temp} °C<span class="row">Temp.</span></p>
						       <p>Temp. Mín: ${tempmin} °C</p>
						    </div>
						    <div class="col-3">
						       <p style="color: ${tempst <= 23 ? 'blue' : 'orange'}">${tempst} °C<span class="row">S. Térmica</span></p>
						       <p>Temp. Máx: ${tempmax} °C</p>
						    </div>					      
					        <div class="col-3">
					           <p>Humedad: ${humedad} %</p>
					           <p>Presión: ${presion} hPa</p>
					           <p>Vel. Viento: ${velviento} Km/h</p>
					        </div>
						 </div>
				      </div>`	
					  
 
	map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d105075.40167057548!2d${coordlon}!3d${coordlat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1621455960641!5m2!1ses-419!2sar" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
   
}

