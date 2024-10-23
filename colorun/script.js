alert("Javascript Enabled");

monBouton = document.getElementById("btn1");
monBouton2 = document.getElementById("btn2");
monBouton3 = document.getElementById("btn3");
monBouton4 = document.getElementById("btn4");
monBouton5 = document.getElementById("btn5");
monBoutonR = document.getElementById("rst");

couleur1 = document.querySelector(".cl1");
couleur2 = document.querySelector(".cl2");
couleur3 = document.querySelector(".cl3");
couleur4 = document.querySelector(".cl4");
couleur5 = document.querySelector(".cl5");

monBouton.onclick = function() { 
    couleur1.style.backgroundColor="#FF00FF";
    couleur1.style.width = "60%";
    couleur2.style.width = "10%";
    couleur3.style.width = "10%";
    couleur4.style.width = "10%";
    couleur5.style.width = "10%";

};
monBouton2.onclick = function() {
    couleur2.style.backgroundColor="#808000"
    couleur2.style.width = "60%";
    couleur1.style.width = "10%";
    couleur3.style.width = "10%";
    couleur4.style.width = "10%";
    couleur5.style.width = "10%";
};
monBouton3.onclick = function() {
    couleur3.style.backgroundColor="#008080";
    couleur3.style.width = "60%";
    couleur1.style.width = "10%";
    couleur2.style.width = "10%";
    couleur4.style.width = "10%";
    couleur5.style.width = "10%";
};
monBouton4.onclick = function() {
    couleur4.style.backgroundColor="#FF5733";
    couleur4.style.width = "60%";
    couleur1.style.width = "10%";
    couleur2.style.width = "10%";
    couleur3.style.width = "10%";
    couleur5.style.width = "10%";
};
monBouton5.onclick = function() {
    couleur5.style.backgroundColor="#800080";
    couleur5.style.width = "60%";
    couleur1.style.width = "10%";
    couleur2.style.width = "10%";
    couleur4.style.width = "10%";
    couleur3.style.width = "10%";
};
monBoutonR.onclick = function() {
    couleur1.style.backgroundColor="#dc143c";
    couleur3.style.backgroundColor="#340cff";
    couleur2.style.backgroundColor="#14dc39";
    couleur5.style.backgroundColor="#ff0cc6";
    couleur4.style.backgroundColor="#def60a";
    couleur3.style.width = "50%";
    couleur1.style.width = "50%";
    couleur2.style.width = "50%";
    couleur4.style.width = "50%";
    couleur5.style.width = "50%";
};

//function() {...} permet de contenir des instructions, dans notre cas pour les greffer à un evenement
//document est un objet


