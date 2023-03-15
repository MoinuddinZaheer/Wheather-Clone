let search =document.getElementById('search'); //input tag
let cityName=document.getElementById('cityName');
let temp=document.getElementById('temp') //h1 tag of temprature
// let inputValue = search.value;

let getInfo = async(e) => {
    let inputValue = search.value;
    
    if (search.value=="") {
        //error message
        alert("please enter a city name");
    } else {
        //fetch the data from api
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
       let response =await fetch(url)
       //console.log(response);
      let data=await response.json();  //fetching only jason
    //   console.log(data);
    cityName.textContent= `${data.name} \ ${data.sys.country}`;
    temp.textContent=data.main.temp;
    }
}