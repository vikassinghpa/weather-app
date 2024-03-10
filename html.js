const apiKey="b0bcf0182296191eafee7353e4aca017";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search Button");


async function checkWeather(city){
    const response =await fetch(apiUrl + city+ `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML=data.main.feels_like + " °C";
    document.querySelector(".wind").innerHTML=data.wind.speed +" km/hr";
}
 searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
 })
checkWeather();












// &appid=b0bcf0182296191eafee7353e4aca017
// q=new%20delhi






















