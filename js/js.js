window.addEventListener("load",init);

function nem(nev){
    return document.querySelectorAll(nev);
}
var kep1 = {
    eleresiut: "kepek/valami1.jpg",
    cim: "nem tom",
    leiras: "valami tortenik"
};
var kep2 = {
    eleresiut: "kepek/valami2.jpg",
    cim: "nem tom",
    leiras: "valami tortenik"
};
var kep3 = {
    eleresiut: "kepek/valami3.jpg",
    cim: "nem tom",
    leiras: "valami tortenik"
};
var keptomb = [kep1,kep2,kep3];
var kepek = ["kepek/valami.jpg","kepek/valami1.jpg","kepek/valami2.jpg"];
function init(){
    console.log("itt vagyok");
    var kepelemtomb = nem("article,div,img");
    var cimeelemtomb = nem("article,div,h3");
    var leirasaelemtomb = nem("article,div,p");
    //nem("article,div,h3")[0].innerHTML = "Halii";
    //nem("article,div,img")[0].src = "kepek/valami.jpg";
    for(var i = 0; i < nem("article,div,img").length; i++){
        kepelemtomb[i].src = kepek[i];
    }
    for(var j = 0; i < kepelemtomb.length; j++){
        kepelemtomb[j].addEventListener("click",kepcsere);
    }
}
function kepcsere(){
    keptomb[i].eleresiut
    nem("")
}