let info = document.querySelector('#info')

let h = document.querySelector('#h')

let m = document.querySelector('#m')

let s = document.querySelector('#s')

let data = document.querySelector('#data')

let semana = document.querySelector('#semana')

let dataHora = new Date()


function Lorenzo() { 

    let momentoAtual = new Date()

    let hora    = momentoAtual.getHours() 
    let minuto  = momentoAtual.getMinutes() 
    let segundo = momentoAtual.getSeconds() 

 
    let strHora    = new String(hora)
    let strMinuto  = new String(minuto)
    let strSegundo = new String(segundo)


    if (strSegundo.length == 1) segundo = "0" + segundo 
    if (strMinuto.length == 1) minuto = "0" + minuto 
    if (strHora.length == 1) hora = "0" + hora 


    h.textContent = hora
    m.textContent = minuto
    s.textContent = segundo
    setTimeout("Lorenzo()",1000) 
}

function pegarData() {

    let diaDaSemana = dataHora.getDay()
    let dia = dataHora.getDate()
    let mes = dataHora.getMonth()+1
    let ano = dataHora.getFullYear()

    let strDia = new String(dia)
    let strMes = new String(mes)

    if(strDia.length == 1) mes = '0' + dia
    if(strMes.length == 1) mes = '0' + mes

  switch(diaDaSemana) 
  {
       
    case 0:
    diaDaSemana = 'DOMINGO'
    break;

    case 1:
    diaDaSemana = 'SEGUNDA'
    break;

    case 2:
    diaDaSemana = 'TERÇA'
    break;

    case 3:
    diaDaSemana = 'QUARTA'
    break;
    
    case 4:
    diaDaSemana = 'QUINTA'
    break;
    
    case 5:
    diaDaSemana = 'SEXTA'
    break;
    
    case 6:
    diaDaSemana = 'SÁBADO'
    break;
    
  } 

  let dataAtual = dia + '/' + mes + '/' + ano

  semana.textContent = diaDaSemana
  data.textContent = dataAtual

}


pegarData()

var options = {

        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    
  }

let viviany = new Date()

    console.log(viviany.toLocaleString('pt-BR'))
    
    console.log(viviany.toLocaleString('pt-BR', options))
    
    console.log(viviany.toLocaleDateString('pt-BR'))
    
    console.log(viviany.toLocaleTimeString('pt-BR'))

function getUserPosition() {
  
  let url = ''
  navigator.geolocation.getCurrentPosition((pos) => {
    
    let latitude = pos.coords.latitude
    let long = pos.coords.longitude
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${long}&units=imperial&APPID=13ba9a44ff5f03c0e2fdec37f7961dfd`
    
    
    fetchApi(url)
    console.log(url)

  })

}


function fetchApi(url) {
  
  let cidade = document.querySelector('#cidade')
  let temp = document.querySelector('#temp')
  let humidity = document.querySelector('#humidity')

  fetch(url)
  .then((data) => {
      return data.json()
  })

  .then((data) => {
    
    let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1);
    
      cidade.textContent = data.name
      temp.innerHTML = tempInCelsius
      humidity.innerHTML = data.main.humidity


  })

  .catch((err) => {

    cidade.innerText = `Sua tentativa foi uma falha, Consulte a OpenWeather para saber mais!`;
   
    temp.innerHTML = ` `;

  })
}


getUserPosition();
