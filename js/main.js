$(document).ready(function() {

  var long;
  var lat;
  var fTemp;
  var cTemp;
  var kTemp;
  
 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      
      $("#data").html("latitude: " + lat + " <br>longitude: " + long);
      
       var api ='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=0569b0cfcde5f29f40c7f43ed5ea4c15';
        $.getJSON(api, function(data) {
         var weatherType = data.weather[0].description;
          kTemp = data.main.temp;
          var tempSwap = true;
          var windSpeed = data.wind.speed;
          var city = data.name;
          var country = data.sys.country;
          
//           temperature in kelvin
          fTemp = ((kTemp)*(9/5)-459.67).toFixed(1);
          cTemp = (kTemp - 273).toFixed(1);
          
          
            console.log(city);
            console.log(api);
          
          $('#city').html(city+ ' - ');
          $('#country').html(country);
          $('#weatherType').html(weatherType);
          $('#fTemp').html(fTemp + ' &#8457;');
          
          $('#fTemp').click(function(){
            if(tempSwap===false){
              
              $('#fTemp').html(fTemp + ' &#8457;');
              tempSwap = true;
            }else{
              $('#fTemp').html(cTemp + ' &#8451;');
              tempSwap = false;
            }
          });
          
          $('#windSpeed').html(windSpeed + ' kph');
          
          
          
           ///Update Weather animation based on the returned weather description
  
  
      if(weatherType.indexOf("rain") >= 0) {
        $(".rain").removeClass("hide");
      }

      else if (weatherType.indexOf("sunny") >= 0) {
        $(".sun-shower").removeClass("hide");
      }

      else if (weatherType.indexOf("clear") >= 0) {
        $(".clear").removeClass("hide");
        }   
      

      else if (weatherType.indexOf("cloud") >= 0 || weatherType.indexOf("mist") >= 0) {
        $(".clouds").removeClass("hide");
      }

      else if (weatherType.indexOf("thunderstorm") >= 0) {
        $(".thunderstom").removeClass("hide");
      }

      else if (weatherType.indexOf("snow") >= 0) {
        $(".snow").removeClass("hide");
      }
    




          
      });
    }
  )};
});
