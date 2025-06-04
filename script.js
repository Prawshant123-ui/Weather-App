
async function getWeather(){
   let getCity=document.getElementById("city").value.trim();
   let apikey="28d24d2aaada893ac4bb86bc1a2012b5";
   
   let getResult=document.getElementById("result");


   if(!getCity){
      getResult.innerText="Please Enter a city";
      return;
   }

   const URL = `https://api.openweathermap.org/data/2.5/weather?q=${getCity}&appid=${apikey}&units=metric`;

   try{
      let response=await fetch(URL);
      let data=await response.json()

      if(!response.ok){
         throw new Error(data.message || "City not found");
      }
      let temp=Math.round(data.main.temp);
      let description=data.weather[0].description;
      let humidity=data.main.humidity;
      let wind=(data.wind.speed * 3.6).toFixed(2);
      let icon=data.weather[0].icon;
     


      getResult.innerHTML = `
        <h2><strong> ${data.name}</strong></h2>
        <p><strong>Temperature:</strong> ${temp} °C</p>
        <p><strong>Condition:</strong> ${description}</p>
        <p><strong>Humidity:</strong> ${humidity} %</p>
        <p><strong>Wind:</strong> ${wind} m/s</p>
        <img src="http://openweathermap.org/img/w/${icon}.png" alt="${description}">
      `;

      
   }catch(error){
      getResult.innerHTML=`<p style="color:red;">Error: ${error.message}</p>`;
   }
   
}


