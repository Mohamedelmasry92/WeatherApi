var allItems = []
let weatherApi = document.getElementById('weatherApi')
let inputValue = document.getElementById('inputValue')
let weatherApiHeader = document.getElementById('weatherApiHeader')





// display weather firsttime
async function getWeather(city){
var apiResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=7765d96de6394e11b8e150148231502&q=${city}&days=3&aqi=no&alerts=no`)
var finalResult = await apiResponse.json();

var card = ``
var cartona = ``
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let today  = new Date(`${finalResult.forecast.forecastday[0].date}`)
let tommorow  = new Date(`${finalResult.forecast.forecastday[1].date}`)
let afterTommorow  = new Date(`${finalResult.forecast.forecastday[2].date}`)

function displayItems(){

  card += `
  <div class="col-md-4 header-color pt-3">
              <div class="d-flex justify-content-between">
                <p>${weekday[today.getDay()]}</p>
                <p>${today.getDate()} ${month[today.getMonth()]}</p>
              </div>
            </div>
            <div class="col-md-4 header-color-special header-color pt-3">
              <div class="d-flex justify-content-between">
                <p>${weekday[tommorow.getDay()]}</p>
                <p>${tommorow.getDate()} ${month[tommorow.getMonth()]}</p>
              </div>
            </div>
            <div class="col-md-4 header-color pt-3">
              <div class="d-flex justify-content-between">
                <p>${weekday[afterTommorow.getDay()]}</p>
                <p>${afterTommorow.getDate()} ${month[afterTommorow.getMonth()]}</p>
              </div>
            </div>
  `


    cartona += `
          <div class="col-md-4 py-4 ">
          <div class="">
            <p class="degree-small">${finalResult.location.name}</p>
            <h1 class="text-white big">${finalResult.current.temp_c}<sup>o</sup>C <img src="https:${finalResult.current.condition.icon}" alt="" width="90"></h1>
            <p class="custom mt-4">${finalResult.current.condition.text}</p>
            <span class="me-2"><img src="images/icon-umberella.png" alt=""> 20%</span>
            <span class="me-2"><img src="images/icon-wind.png" alt=""> 18km/h</span>
            <span class="me-2"><img src="images/icon-compass.png" alt=""> East</span>
          </div>
        </div>
        <div class="col-md-4 p-5 special">
        <div class="d-flex justify-content-center align-items-center text-center">
          <div>
            <img class="mt-2" src="https://${finalResult.forecast.forecastday[1].day.condition.icon}" alt="" width="48">
            <div class="degree mt-2 text-white">${finalResult.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</div>
            <small class="degree-small mt-2">${finalResult.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></small>
            <div class="custom mt-2">${finalResult.forecast.forecastday[1].day.condition.text}</div>
          </div>
        </div>
      </div>
      <div class="col-md-4 p-5 ">
        <div class="d-flex text-center justify-content-center align-items-center">
          <div>
            <img class="mt-2" src="https://${finalResult.forecast.forecastday[2].day.condition.icon}" alt="" width="48">
            <div class="degree text-white mt-2">${finalResult.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</div>
            <small class="degree-small mt-2">${finalResult.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></small>
            <div class="custom mt-2">${finalResult.forecast.forecastday[2].day.condition.text}</div>
          </div>
        </div>
      </div>
          `
          document.getElementById('weatherApiHeader').innerHTML = card
          document.getElementById('weatherApi').innerHTML = cartona
        }
        displayItems()
}      
getWeather("cairo")




// when search
inputValue.addEventListener('input' , function(){
  getWeather(inputValue.value)
})



