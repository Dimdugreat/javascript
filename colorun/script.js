alert("Javascript Enabled");
var compteurClic = 0;
monBouton = document.getElementById("btn1");
monBouton2 = document.getElementById("btn2");
monBouton3 = document.getElementById("btn3");
monBouton4 = document.getElementById("rst");

couleur1 = document.querySelector(".cl1");
couleur2 = document.querySelector(".cl2");
couleur3 = document.querySelector(".cl3");
monBouton.onclick = function() { 
    couleur1.style.backgroundColor="#123456";
};
monBouton2.onclick = function() {
    couleur2.style.backgroundColor="#123456";
};
monBouton3.onclick = function() {
    couleur3.style.backgroundColor="#123456";
};
monBouton4.onclick = function() {
    couleur1.style.backgroundColor="#dc143c";
    couleur3.style.backgroundColor="#340cff";
    couleur2.style.backgroundColor="#14dc39"
};

//function() {...} permet de contenir des instructions, dans notre cas pour les greffer à un evenement
//document est un objet


