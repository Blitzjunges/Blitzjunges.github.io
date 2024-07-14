// Background variables
var x = 0;
var y = 0;

var building = {
    // Starting variables
    score: 0,
    waiting_worth: 0,
    // Shop variables
    cost_place:[
        "mantel_worth",
        "hemd_worth",
        "boots_worth",
        "hose_worth",
        "hat_worth",
        "brille_worth",
        "nadel_faden_worth",
        "fadenrolle_worth",
        "normaler_knopf_worth",
        "pocket_money_worth",
        "knoepfe_factory_worth",
        "teddybaer_worth",
        "schnemann_worth",
        "cookie_worth"
    ],
    bought_place:[
        "mantel_bought",
        "hemd_bought",
        "boots_bought",
        "hose_bought",
        "hat_bought",
        "brille_bought",
        "nadel_faden_bought",
        "fadenrolle_bought",
        "normaler_knopf_bought",
        "pocket_money_bought",
        "knoepfe_factory_bought",
        "teddybaer_bought",
        "schnemann_bought",
        "cookie_bought"
    ],
    image:[
        "images/mantel.png",
        "images/hemd.png",
        "images/boots.png",
        "images/hose.png",
        "images/hat.png",
        "images/brille.png",
        "images/nadel_faden.png",
        "images/fadenrolle.png",
        "images/normaler_knopf.png",
        "images/pocket_money.png",
        "images/knoepfe_factory.png",
        "images/teddybaer.png",
        "images/schneemann.png",
        "images/cookie.png"
    ],
    waiting:[0.1, 0.5, 4, 10, 40, 50, 55, 60, 65, 70, 75, 80, 85, 90],
    how_many:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    worth:[15, 100, 500, 1000, 3000, 6000, 10000, 20000, 30000, 40000, 80000, 160000, 320000, 640000]
}

function buyingSomething(index) {
    if (building.score >= building.worth[index]){
        building.score -= building.worth[index];
        building.how_many[index]++;
        building.worth[index] = Math.round(building.worth[index] * 1.3);
        building.waiting_worth += building.waiting[index];
        // What the player sees
        document.getElementById(building.bought_place[index]).innerHTML = building.how_many[index];
        document.getElementById(building.cost_place[index]).innerHTML = "Cost: " + building.worth[index];
        document.getElementById("per_sec").innerHTML = "Buttons per second: " + building.waiting_worth.toFixed(1);
    }
}


// Run script once DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

    window.onload = function(){
        // What the player sees
        document.getElementById("score").innerHTML = "Buttons: " + (building.score | 0);
        document.querySelector("title").innerHTML = (building.score | 0) + " buttons - Button Clicker";
        document.getElementById("per_sec").innerHTML = "Buttons per second: " + building.waiting_worth.toFixed(1);
        // Loading the shop
        document.getElementById("shopContainer").innerHTML = "";
        for(let i = 0; i < building.cost_place.length; i++){
            document.getElementById("shopContainer").innerHTML += '<button type="button" class="btn btn-primary" id="bilder" onclick="buyingSomething('+i+')"><table><tr><td><img src="'+building.image[i]+'"></th><td class="tabele-text"><p id="'+building.cost_place[i]+'">Cost: '+building.worth[i]+'</p></td><td><p><b id="'+building.bought_place[i]+'">'+building.how_many[i]+'</b></p></td></tr></table></button>';
        }
    }

    // If button is clicked
    document.getElementById("knopf").addEventListener("click", function(){
        building.score++;
        // What the player sees
        document.getElementById("score").innerHTML = "Buttons: " + (building.score | 0);
        document.querySelector("title").innerHTML = (building.score | 0) + " buttons - Button Clicker";
    });

    // For background
    setInterval(function() {
        x -= 0.3;
        y -= 0.3;
        // What the player sees
        document.querySelector("body").style.backgroundPosition = x + "px " + y + "px";
        document.getElementById("offcanvasScrolling").style.backgroundPosition = (-0.8*x) + "px " + (0.8*y) + "px";
    }, 10);

    // For the automation
    setInterval(function() {
        building.score += building.waiting_worth;
        // What the player sees
        document.getElementById("score").innerHTML = "Buttons: " + (building.score | 0);
        document.querySelector("title").innerHTML = (building.score | 0) + " buttons - Button Clicker";
    }, 1000); //1000ms = 1second

});