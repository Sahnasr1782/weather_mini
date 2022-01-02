// var wrapper = document.querySelector(".wrapper"),
// inputPart = document.querySelector(".input-box"),
// infoTxt = inputPart.querySelector(".info"),
// inputField = inputPart.querySelector("input"),
// button = inputPart.querySelector("button"),
// weatherPart = wrapper.querySelector(".weather-info"),
// wIcon = weatherPart.querySelector("img"),
// arrowBack = wrapper.querySelector("header i");
// let api;

// inputField.addEventListener("keyup", e =>{
//     if(e.key == "Enter" && inputField.value != ""){
//         requestApi(inputField.value);
//     }
// });
// button.addEventListener("click", () =>{
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(onSuccess, onError);
//     }else{
//         alert("Your browser does not support geolocation api");
//     }
// });
// function requestApi(city){
//     api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5e3ad7b8589f6c36d4e9d59b185bfa23`;
//     fetchData();
// }
// function onSuccess(position){
//     const {latitude, longitude} = position.coords;
//     api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=5e3ad7b8589f6c36d4e9d59b185bfa23`;
//     fetchData();
// }
// function onError(error){
//     infoTxt.innerText = error.message;
//     infoTxt.classList.add("error");
// }
// function fetchData(){
//     infoTxt.innerText = "Getting weather details...";
//     infoTxt.classList.add("pending");
//     fetch(api).then(response => response.json()).then(result => weatherDetails(result)).catch(() =>{
//         infoTxt.innerText = "Something went wrong";
//         infoTxt.classList.replace("pending", "error");
//     });
// }
// function weatherDetails(info){
//     if(info.cod == "404"){
//         infoTxt.classList.replace("pending", "error");
//         infoTxt.innerText = `${inputField.value} isn't a valid city name`;
//     }else{
//         const city = info.name;
//         const country = info.sys.country;
//         const {description, id} = info.weather[0];
//         const {temp, feels_like, humidity} = info.main;
//         if(id == 800){
//             wIcon.src = "clear.svg";
//         }else if(id >= 200 && id <= 232){
//             wIcon.src = "storm.svg";  
//         }else if(id >= 600 && id <= 622){
//             wIcon.src = "snow.svg";
//         }else if(id >= 701 && id <= 781){
//             wIcon.src = "haze.svg";
//         }else if(id >= 801 && id <= 804){
//             wIcon.src = "cloud.svg";
//         }else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
//             wIcon.src = "rain.svg";
//         }
        
//         weatherPart.querySelector(".temp .numb").innerText = Math.floor(temp);
//         weatherPart.querySelector(".weather").innerText = description;
//         weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
//         weatherPart.querySelector(".temp .numb2").innerText = Math.floor(feels_like);
//         weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;
//         infoTxt.classList.remove("pending", "error");
//         infoTxt.innerText = "";
//         inputField.value = "";
//         wrapper.classList.add("active");
//     }
// }
// arrowBack.addEventListener("click", ()=>{
//     wrapper.classList.remove("active");
// });









const wrapper=document.querySelector(".wrapper"),
inputPart=document.querySelector(".input-box"),
infoTxt=inputPart.querySelector(".info"),
inputField=inputPart.querySelector("input"),
locationBtn=inputPart.querySelector("button"),
weatherPart=wrapper.querySelector(".weather-info"),
wIcon=weatherPart.querySelector("img"),
arrowBack=wrapper.querySelector("header i");
let api;
// let concatStrings=splitString[0]+splitString[1],
// lastString=["c","7","e","e"],
// reverseString=lastString.reverse().join("");

inputField.addEventListener("keyup",e=>{
    if(e.key=="Enter"&&inputField.value!=""){
        requestApi(inputField.value);
        inputField.blur();
    }});
        
locationBtn.addEventListener("click",()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess,onError);
    }else{
        alert("Your browser not support geolocation api");
    }});
    
function requestApi(city){
    // const key=reverseString+concatStrings;
    api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5e3ad7b8589f6c36d4e9d59b185bfa23`;
    fetchData();
}
function onSuccess(position){
    const{
        latitude,longitude}=position.coords;
        // const key=reverseString+concatStrings;
        api=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=5e3ad7b8589f6c36d4e9d59b185bfa23`;
        fetchData();
    }
function onError(error){
    infoTxt.classList.add("error");
    infoTxt.innerText=error.message;
}

function fetchData(){
    infoTxt.innerText="Getting weather details...";
    infoTxt.classList.add("pending");
    fetch(api).then(res=>res.json()).then(result=>weatherDetails(result)).catch(()=>{
        infoTxt.classList.replace("pending","error");
        infoTxt.innerText="Something went wrong";
    });
}
function weatherDetails(info){
    if(info.cod=="404"){
        infoTxt.classList.replace("pending","error");
        infoTxt.innerText=`${inputField.value} isn't a valid city name`;
    }else{
        const city=info.name;
        let country=info.sys.country;
        const{description,id}=info.weather[0];
        const{temp,feels_like,humidity}=info.main;
        for(i in countryList){
            if(i==country){country=countryList[i];
                    }}
if(id==800){
    wIcon.src="/images/sunny.jpg";
}else if
(id>=200&&id<=232){
    wIcon.src="/images/thunder.jpg";
}else if(id>=600&&id<=622){
    wIcon.src="/images/snow.jpg";
}else if(id>=701&&id<=781){
    wIcon.src="/images/haze.svg";
}else if(id>=801&&id<=804){
    wIcon.src="/images/partly_cloudy.jpg";
}else if((id>=500&&id<=531)||(id>=300&&id<=321)){
    wIcon.src="/images/rainy.jpg";
}
weatherPart.querySelector(".temp .numb").innerText=Math.floor(temp);
weatherPart.querySelector(".weather").innerText=description;
weatherPart.querySelector(".location span").innerText=`${city}, ${country}`;
weatherPart.querySelector(".temp .numb-2").innerText=Math.floor(feels_like);
weatherPart.querySelector(".humidity span").innerText=`${humidity}%`;
setTimeout(()=>{infoTxt.classList.remove("pending","error");
infoTxt.innerText="";
inputField.value="";
wrapper.classList.add("active");
},800);}}
arrowBack.addEventListener("click",()=>
{wrapper.classList.remove("active");
});