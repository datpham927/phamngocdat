var area=document.querySelector('.area')
var country=document.querySelector('.country')
var time=document.querySelector('.time')
var temperature=document.querySelector('.temperature .value')
var visibility=document.querySelector('.visibility div')
var wind=document.querySelector('.wind div')
var sun=document.querySelector('.sun div')
var short_description=document.querySelector('.short_description')
var search=document.querySelector('.search')
var content=document.querySelector('.content')
var body=document.querySelector('body')

async function changeWeatherApi(capital){
    var apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=60d8b383c838c124c2f3970dca7d7bf7`
    var data= await fetch(apiUrl).then(res=>res.json())
    if(data.cod==200){
           content.classList.remove('hide')
           console.log(data)
           area.innerText=data.name
           country.innerText=data.sys.country
           let date = new Date((data.dt)*1000);
           time.innerText = date.toString();
               // time.innerText =new Date().toLocaleDateString('vi')
           visibility.innerText=data.visibility +' (m)'
           sun.innerText=data.main.humidity + '(%)'
           wind.innerText=data.wind.speed + '(m/s)'
           temperature.innerText=Math.round(data.main.temp-273.15)
           var deg=Math.round(data.main.temp-273.15)
           body.setAttribute('class','hot')
           if(deg<22){
            body.setAttribute('class','cold')
          }
          if(deg<16){
             body.setAttribute('class','wed')
          }
    }else{
        content.classList.add('hide')
    }
}
search.addEventListener('keypress',function(a){
   if(a.keypress='Enter'){
      var capital=search.value.trim()
      changeWeatherApi(capital)
   }
})
changeWeatherApi('da nang')

