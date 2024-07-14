var inhaltTabelle = {
  name:[
    "Button Clicker",
    "Wort des Tages",
  ],
  link:[
    "button_clicker",
    "wort_des_tages"
  ]
}

document.getElementById("tabelle").innerHTML = "";
for(let i = 0; i < inhaltTabelle.name.length; i++){
  if (i%2 == 0){
    document.getElementById("tabelle").innerHTML += '<tr class="table-light"><td><a href="blitzjunges.github.io/'+inhaltTabelle.link[i]+'/index.html" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">'+inhaltTabelle.name[i]+'</a></td></tr>';
  }
  if (i%2 == 1){
    document.getElementById("tabelle").innerHTML += '<tr class="table-primary"><a href="blitzjunges.github.io/'+inhaltTabelle.link[i]+'/index.html" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">'+inhaltTabelle.name[i]+'</a></tr>';
  }
}
