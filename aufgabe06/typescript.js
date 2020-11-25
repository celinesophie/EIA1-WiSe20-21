//Funktion
function emissionen(kontinent2018, kontinent2008) {
    var welt = 31116.5;
    var kontinent = kontinent2018;
    var anteil = ((kontinent2018 / welt) * 100);
    var wachstumpr = (((kontinent2018 / kontinent2008) - 1) * 100);
    var wachstumab = (kontinent2018 - kontinent2008);
    console.log('Die Emission 2018 in ' + welt + 'kg');
    console.log('Der Kontinent verursacht 2018 ' + kontinent + 'kg CO2');
}
//Afrcia
emissionen(1235.5, 1028);
//SouthAmerica
emissionen(1132.6, 1261.5);
//NorthAmerica
emissionen(6600.4, 6035.6);
//Asia
emissionen(12954.7, 16274.1);
//Australia
emissionen(1993, 2100.5);
//WERTE
var Afrika2018Absolut = 1235.5;
var AfrikaGesamtProzent = 3.97;
var AfrikaWachstumProzent = 20.18;
var AfrikaWachstumAbsolut = 207.50;
var Samerika2018Absolut = 1261.5;
var SamerikaGesamtProzent = 4.05;
var SamerikaWachstumProzent = 11.38;
var SamerikaWachstumAbsolut = 128.9;
var Europe2018Absolut = 4209.3;
var EuropeGesamtProzent = 13.53;
var EuropeWachstumProzent = -15.08;
var EuropeWachstumAbsolut = -747.40;
var Namerika2018Absolut = 6035.60;
var NamerikaGesamtProzent = 19.40;
var NamerikaWachstumProzent = -8.56;
var NamerikaWachstumAbsolut = -564.80;
var Asia2018Absolut = 16274.10;
var AsiaGesamtProzent = 52.30;
var AsiaWachstumProzent = 25.62;
var AsiaWachstumAbsolut = 3319.40;
var Australia2018Absolut = 2100.50;
var AustraliaGesamtProzent = 6.75;
var AustraliaWachstumProzent = 5.39;
var AustraliaWachstumAbsolut = 107.50;
//FUNKTIONEN
//AFRICA
function africa() {
    document.querySelector(".titleRegion").innerHTML = "Africa";
    document.querySelector("#emissionAbsolut").innerHTML = Afrika2018Absolut + " kg CO2";
    document.querySelector("#emissionProzent").innerHTML = AfrikaGesamtProzent + "%";
    document.querySelector("#wachstumProzent").innerHTML = AfrikaWachstumProzent + "%";
    document.querySelector("#wachstumAbsolut").innerHTML = AfrikaWachstumAbsolut + " kg CO2";
    document.querySelector(".chart").setAttribute('style', 'height:3.97%');
}
//SOUTHAMERICA
function southamerica() {
    document.querySelector(".titleRegion").innerHTML = "Southamerica";
    document.querySelector("#emissionAbsolut").innerHTML = Samerika2018Absolut + " kg CO2";
    document.querySelector("#emissionProzent").innerHTML = SamerikaGesamtProzent + "%";
    document.querySelector("#wachstumProzent").innerHTML = SamerikaWachstumProzent + "%";
    document.querySelector("#wachstumAbsolut").innerHTML = SamerikaWachstumAbsolut + " kg CO2";
    document.querySelector(".chart").setAttribute('style', 'height: 4.05%');
}
//EUROPE
function europe() {
    document.querySelector(".titleRegion").innerHTML = "Europe";
    document.querySelector("#emissionAbsolut").innerHTML = Europe2018Absolut + " kg CO2";
    document.querySelector("#emissionProzent").innerHTML = EuropeGesamtProzent + "%";
    document.querySelector("#wachstumProzent").innerHTML = EuropeWachstumProzent + "%";
    document.querySelector("#wachstumAbsolut").innerHTML = EuropeWachstumAbsolut + " kg CO2";
    document.querySelector(".chart").setAttribute('style', 'height: 13.53%');
}
//NORTHAMERICA
function northamerica() {
    document.querySelector(".titleRegion").innerHTML = "Northamerica";
    document.querySelector("#emissionAbsolut").innerHTML = Namerika2018Absolut + " kg CO2";
    document.querySelector("#emissionProzent").innerHTML = NamerikaGesamtProzent + "%";
    document.querySelector("#wachstumProzent").innerHTML = NamerikaWachstumProzent + "%";
    document.querySelector("#wachstumAbsolut").innerHTML = NamerikaWachstumAbsolut + " kg CO2";
    document.querySelector(".chart").setAttribute('style', 'height: 19.4%');
}
//ASIA
function asia() {
    document.querySelector(".titleRegion").innerHTML = "Asia";
    document.querySelector("#emissionAbsolut").innerHTML = Asia2018Absolut + " kg CO2";
    document.querySelector("#emissionProzent").innerHTML = AsiaGesamtProzent + "%";
    document.querySelector("#wachstumProzent").innerHTML = AsiaWachstumProzent + "%";
    document.querySelector("#wachstumAbsolut").innerHTML = AsiaWachstumAbsolut + " kg CO2";
    document.querySelector(".chart").setAttribute('style', 'height: 52.3%');
}
//AUSTRALIA
function australia() {
    document.querySelector(".titleRegion").innerHTML = "Australia";
    document.querySelector("#emissionAbsolut").innerHTML = Australia2018Absolut + " kg CO2";
    document.querySelector("#emissionProzent").innerHTML = AustraliaGesamtProzent + "%";
    document.querySelector("#wachstumProzent").innerHTML = AustraliaWachstumProzent + "%";
    document.querySelector("#wachstumAbsolut").innerHTML = AustraliaWachstumAbsolut + " kg CO2";
    document.querySelector(".chart").setAttribute('style', 'height: 6.75%');
}
//Event (Bild klickbar machen)
document.querySelector(".africa").addEventListener('click', africa);
document.querySelector(".southamerica").addEventListener('click', southamerica);
document.querySelector(".europe").addEventListener('click', europe);
document.querySelector(".northamerica").addEventListener('click', northamerica);
document.querySelector(".asia").addEventListener('click', asia);
document.querySelector(".australia").addEventListener('click', australia);
//# sourceMappingURL=typescript.js.map