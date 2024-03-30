//import axios from 'axios';

const apiKey= "e4f5fa4c989f2108b640b00a65cf3ddf";
//let cityName="chicago";
let temp;
let condition;

getWeatherData("Chicago");


document.getElementById("submit-button").onclick=function(){
  let cityName= document.getElementById("searchbar").value;
  getWeatherData(cityName);
}

//getWeatherData();

async function getWeatherData(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(async response =>{
      if(!response.ok){
        throw new Error(`Could not get weather data for "${city}".`)
      }
      const data= await response.json();
      console.log(data);
      display(data);
    })
    .catch(error=>{
      alert(error);
    });
}

async function display(data){
  //console.log(data);
  let fahren= 1.8*(data.main.temp-273)+32;
  document.getElementById("temp").innerHTML= fahren.toFixed(2)+"°f";

  document.getElementById("city").innerHTML= data.name;
  document.getElementById("desc").innerHTML= data.weather[0].description;

  console.log(data.name);
  console.log(data.main.temp);

  console.log(data.weather[0].description)

  console.log(data.weather[0].id);
  const id= await data.weather[0].id;

  chooseIcon(id);
  //http://openweathermap.org/img/w/10d.png

}

async function chooseIcon(num){
  if(num>=200 && num<=232){
    document.getElementById("weatherIcon").src=`http://openweathermap.org/img/wn/11d@2x.png`;
  }
  else if(num>=300 && num<=321){
    document.getElementById("weatherIcon").src=`http://openweathermap.org/img/wn/09d@2x.png`;
  }
  else if(num>=500 && num<=531){
    document.getElementById("weatherIcon").src=`http://openweathermap.org/img/wn/10d@2x.png`;
  } else if(num>=600 && num<=622){
    document.getElementById("weatherIcon").src=`http://openweathermap.org/img/wn/13d@2x.png`;
  } else if(num>=700 && num<=781){
    document.getElementById("weatherIcon").src=`http://openweathermap.org/img/wn/50n@2x.png`;
  } else if(num==800){
    document.getElementById("weatherIcon").src=`http://openweathermap.org/img/wn/01d@2x.png`;
  }else{
    document.getElementById("weatherIcon").src=`http://openweathermap.org/img/wn/02d@2x.png`;
  }
}

// async function getWeatherData(){
//   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
//     .then(response=>{
//       const responseData=response.data;
//       console.log(responseData);
//     })  
//     .catch(error=>{
//       alert(`Could not find weatherData for ${chicago}`);
//     })

// }

// async function getWeatherData(city){
//   const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//   const response = await fetch(apiUrl);
//   console.log(response);
// }




