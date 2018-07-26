//Definitions de variables à utiliser pour les boutons
var $clickMe, $voeux1, $voeux2, voeux3;
$clickMe = $('span');
$voeux1 = $('#voeux1');
$voeux2 = $('#voeux2');
$voeux3 = $('#voeux3');

//Premier event pour declancher les autres boutons quand on click sur le petit bouton "clickme"
$clickMe.on('click', function (e) {
    var text1 = "Tu es la star du jour ! "; //Texte pour remplir le li vide
    $voeux1.append(text1); //On ajoute le texte au li avec méthode "append"
    $clickMe.remove(); //Celle-ce enleve le bouton clickme
    //Style ajouté lors du click du bouton précédent
    $("#voeux1").css({
        "background-color": "#cc99ff",
        "box-shadow": "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
    });
});

$voeux1.on('click', function (e) {
    var text1 = "L'âge, c'est juste un chiffre "; //texte pour remplir le li vide
    $voeux2.append(text1); //On ajoute le texte au li avec méthode "append"
    //Style ajouté lors du click du bouton précédent
    $("#voeux2").css({
        "background-color": "#f7b731",
        "box-shadow": "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
    });
});

$voeux2.on('click', function (e) {
    var text1 = "Vieillir est obligatoire, grandir est facultatif !"; //texte pour remplir le li vide
    $voeux3.append(text1); //On ajoute le texte au li avec méthode "append"
    //Style ajouté lors du click du bouton précédent
    $("#voeux3").css({
        "background-color": "#2ed573",
        "box-shadow": "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
    });

});

$voeux3.on('click', function (e) {
    var text2 = "HAPPY BIRTHDAY !" //Texte pour tous les 'li' lors du click du troisième bouton li
    var text3 = "BON ANNIVERSAIRE !!!" //Texte final

    //Effets ajoutés lors du clic du troisième bouton li à tous les li et aux titres h1 et h2
    $('h1').delay(10000).fadeOut(3000);
    $('#voeux1').delay(10000).fadeOut(3000);
    $('#voeux2').delay(10000).fadeOut(3000);
    $('#voeux3').delay(10000).fadeOut(3000);
    $('h2.hiddenText').delay(15000).fadeIn('slow'); //Celle-ci fait apparaître le titre h2 à la fin caché par default dans les propietés CSS

    $('li').text(text2); //Ajout du texte 'Happy birthday' à tous les li éléments
    $("body").css("background-image", "url(images/anniversaire.jpg)"); //Ajout de l'image de fond lors du clic du troisième bouton li
});

//Fonction pour  definir l'élément audio et le jouer lors du clic du troisième bouton li
$(document).ready(function () {
    var obj = document.createElement("audio");
    obj.src = "audio/Birthday_Song.mp3";
    obj.volume = 1;
    obj.autoPlay = false;
    obj.preLoad = true;

    $("#voeux3").click(function () {
        obj.play();
    });
});
