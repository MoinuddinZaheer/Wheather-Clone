let search =document.getElementById('search'); //input tag
let cityName=document.getElementById('cityName');
let temp=document.getElementById('temp') //h1 tag of temprature
// let inputValue = search.value;

let getInfo = async() => {
    let inputValue = search.value;
    
    if (inputValue=="") {
        //error message
        alert("please enter a city name");
    } else {
        //fetch the data from api
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
       let response =await fetch(url)
     
      let data=await response.json();  //fetching only jason
    
    if(data.name)
    {
        cityName.textContent= `${data.name} \ ${data.sys.country}`;
    }else{
        cityName.textContent="Not found / you entered wrong city name"
    }
    temp.textContent=data.main.temp;
    console.log(data);
    }
}