const weatherapi = {
  key: "12b23997843dae45ea3a554208517559",
  baseurl: "https://api.openweathermap.org/data/2.5/weather",
};

const inputbox = document.getElementById("text1");
const submited = document.getElementById("submit1")
inputbox.addEventListener("keypress", (Event) => {
  if (Event.key == "Enter") {
    console.log(inputbox.value);
    Event.preventDefault();
    getweatherReport(inputbox.value);
  }
});

submited.addEventListener("click", () => {
    
      getweatherReport(inputbox.value);
    
  });

getweatherReport = (city) => {
  fetch(`${weatherapi.baseurl}?q=${city}&appid=${weatherapi.key}&units=metric `)
    .then((value) => {
      return value.json();
    })
    .then((value) => {
      showweatherreport(value);
    });
};

showweatherreport = (value) => {
  console.log(value);
  if ((value.name == undefined)) {
    alert("wrong input");
    let inner = document.getElementById("form2");
    inner.innerHTML = `<div id="title">Weather of <span id="city">Undefined</span></div>
     <div class="info">
       <h2>
         Sky Condition:<span id="SkyCondition" class="innerinfo"> -</span>
       </h2>
       <h2>
         Temperature:<span id="temperature" class="innerinfo"> -</span>
       </h2>
       <h2>
         Wind Speed:<span id="speed" class="innerinfo"> -</span>
       </h2>
     </div>`;
  } 
  else {
    let city = document.getElementById("city");
    city.innerHTML = `${value.name}`;
    let temp = document.getElementById("temperature");
    temp.innerHTML = `${Math.round(value.main.temp)}&deg;C`;
    let weathert = document.getElementById("SkyCondition");
    weathert.innerHTML = `${value.weather[0].main}`;
    let windspeed = document.getElementById("speed");
    windspeed.innerHTML = `${value.wind.speed} km/h `;
  }
};

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 12b23997843dae45ea3a554208517559
