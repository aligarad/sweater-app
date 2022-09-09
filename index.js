


  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let month = months[d.getMonth()];
document.getElementById("demo").innerHTML = month;


const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const z= new Date();
let day = days[z.getDay()];
document.getElementById("date").innerHTML = day;


const t= new Date();
document.getElementById("time").innerHTML = d.getDate();

document.addEventListener('DOMContentLoaded', () => {
  let formInput = document.getElementById("form1")
  formInput.addEventListener("submit", function (e) {
      e.preventDefault()

      displayTemprature()
      
      
     
      
      formInput.reset() 
     
});

 
      
      
  function displayTemprature() {
    const dayId = document.getElementById("day")
    const temprature = document.createElement('p');
    // fetch(`http://localhost:3000/temperature/${dayId.value}`)
    // .then(response => response.json())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
  
     
      
      fetch(`  http://localhost:3000/temperature/${dayId.value}`)
      .then(response => response.json())
      .then(data => {console.log(temprature.innerText=data.value)})

        .catch(error => console.log('error', error));
    document.getElementById("temp").appendChild(temprature)
    
  }

} )
      