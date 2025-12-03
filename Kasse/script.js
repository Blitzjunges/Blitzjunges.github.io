var kosten = 0;
var geld_gegeben = 0;
var rest = 0;

function zufällig(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

function rundestarten(){
  kosten = zufällig(0,50000);
  geld_gegeben = zufällig(kosten+10, kosten*1.5);
  rest = geld_gegeben-kosten;
  document.getElementById("sehbar").innerHTML = '<center><h1>Kosten: '+kosten.toString().slice(0,kosten.toString().length-2)+","+kosten.toString().slice(kosten.toString().length-2)+'</h1><h1>Gegeben: '+geld_gegeben.toString().slice(0,geld_gegeben.toString().length-2)+","+geld_gegeben.toString().slice(geld_gegeben.toString().length-2)+'</h1><button type="button" id="starten">Nächste Aufgabe</button>';
  document.getElementById("starten").addEventListener("click", function(){
    document.getElementById("sehbar").innerHTML += '<center><p>Antwort: '+rest.toString().slice(0,rest.toString().length-2)+","+rest.toString().slice(rest.toString().length-2)+'</p></center>'
    setTimeout(rundestarten,1000);
  });
}

document.getElementById("starten").addEventListener("click", function(){rundestarten();});
