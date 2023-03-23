document.getElementById('show-username').innerHTML = localStorage.getItem('username');
var showCities = document.getElementById('listOfCities');
let cities = ['Faisalabad','Karachi'];

let showCitiesFunc = ()=>{
    showCities.innerHTML = "";
    cities.forEach(element => {
        showCities.innerHTML += `<li class="list-group-item text-center"><b>${element} </b></li>`;
        console.log(element)
    });
}
showCitiesFunc();

let notify = (msg,color)=>{
    Toastify({
        text: msg,
        duration: 3000,
        destination: "",
        newWindow: true,
        close: false,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
          color:'white',
          background: color,
          borderRadius:'10px',
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

let addCity = ()=>{
    event.preventDefault();
    showCities.innerHTML = "";
    let cityName = document.getElementById('input').value;
    var city;
    var cityFirstLetter = cityName.charAt(0).toUpperCase();
    var cityAllLetters = cityName.slice(1).toLowerCase();
    var cityWordCap = cityFirstLetter + cityAllLetters;
    let cityFound = false;
  
    if(cityName!="" )
    {
        for(let i=0; i<cities.length; i++)
        {
            if(cities[i]===cityWordCap){
                cityFound = true;
                notify(`'${cityWordCap}' is already exist!`,'#EB455F');
                showCitiesFunc()
            }
        }
        if(cityFound===false)
        {
            cities.push(cityWordCap);
            notify(`'${cityWordCap}' is successfully added.`,'#5D9C59');
            showCitiesFunc()
        }
    }else{
        notify('Please enter city name','#EB455F');
        showCitiesFunc();
    }
}