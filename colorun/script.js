alert("Javascript Enabled");
var compteurClic = 0;
monBouton = document.getElementById("btn1");
monBouton2 = document.getElementById("btn2");
monTitre = document.querySelector("p")
monBouton.onclick = function() { 
    monBouton.innerText = ("Nombre de clics : " + compteurClic++);
    if (compteurClic == 3)
        {
            
        }
};

monBouton2.onclick = function() {
                                    compteurClic = 0;
                                    monBouton.innerText = ("Nombre de clics : " + compteurClic++)
};
//function() {...} permet de contenir des instructions, dans notre cas pour les greffer à un evenement
//document est un objet


