//Probe Funktion Konsolenausgabe
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
var gesamt2018 = (1235.5 + 1261.5 + 4209.3 + 6035.6 + 16274.1 + 2100.5);
var Afrika2008 = 1028;
var Afrika2018 = 1235.5;
var AfrikaGesamtProzent = ((Afrika2018 / gesamt2018) * 100);
var AfrikaWachstumProzent = (((Afrika2018 / Afrika2008) - 1) * 100);
var AfrikaWachstumAbsolut = (Afrika2018 - Afrika2008);
var Samerika2008 = 1132.6;
var Samerika2018 = 1261.5;
var SamerikaGesamtProzent = ((Samerika2018 / gesamt2018) * 100);
;
var SamerikaWachstumProzent = (((Samerika2018 / Samerika2008) - 1) * 100);
;
var SamerikaWachstumAbsolut = (Samerika2018 - Samerika2008);
var Europe2008 = 4956.7;
var Europe2018 = 4209.3;
var EuropeGesamtProzent = ((Europe2018 / gesamt2018) * 100);
var EuropeWachstumProzent = (((Europe2018 / Europe2008) - 1) * 100);
var EuropeWachstumAbsolut = (Europe2018 - Europe2008);
var Namerika2008 = 6600.4;
var Namerika2018 = 6035.60;
var NamerikaGesamtProzent = ((Namerika2018 / gesamt2018) * 100);
var NamerikaWachstumProzent = (((Namerika2018 / Namerika2008) - 1) * 100);
var NamerikaWachstumAbsolut = (Namerika2018 - Namerika2008);
var Asia2008 = 12954.7;
var Asia2018 = 16274.10;
var AsiaGesamtProzent = ((Asia2018 / gesamt2018) * 100);
var AsiaWachstumProzent = (((Asia2018 / Asia2008) - 1) * 100);
var AsiaWachstumAbsolut = (Asia2018 - Asia2008);
var Australia2008 = 1993;
var Australia2018 = 2100.50;
var AustraliaGesamtProzent = ((Australia2018 / gesamt2018) * 100);
var AustraliaWachstumProzent = (((Australia2018 / Australia2008) - 1) * 100);
var AustraliaWachstumAbsolut = (Australia2018 - Australia2008);
//FUNKTIONEN
//AFRICA
function africa() {
    document.querySelector(".titleRegion").innerHTML = "Africa";
    document.querySelector("#emissionAbsolut").innerHTML = Afrika2018 + " kg CO2";
    document.querySelector("#emissionProzent").innerHTML = AfrikaGesamtProzent.toFixed(2) + "%";
    document.querySelector("#wachstumProzent").innerHTML = AfrikaWachstumProzent.toFixed(2) + "%";
    document.querySelector("#wachstumAbsolut").innerHTML = AfrikaWachstumAbsolut + " kg CO2";
    document.querySelector(".chart").setAttribute('style', 'height:3.97%');
}
//SOUTHAMERICA
function southamerica() {
    document.querySelector(".titleRegion").innerHTML = "Southamerica";
    document.querySelector("#emissionAbsolut").innerHTML = Samerika2018 + " kg CO2";
    document.querySelector("#emissionProzent").innerHTML = SamerikaGesamtProzent.toFixed(2) + "%";
    document.querySelector("#wachstumProzent").innerHTML = SamerikaWachstumProzent.toFixed(2) + "%";
    document.querySelector("#wachstumAbsolut").innerHTML = SamerikaWachstumAbsolut.toFixed(2) + " kg CO2";
    document.querySelector(".chart").setAttribute('style', 'height: 4.05%');
}
//EUROPE
function europe() {
    document.querySelector(".titleRegion").innerHTML = "Europe";
    document.querySelector("#emissionAbsolut").innerHTML = Europe2018 + " kg CO2";
    document.querySelector("#emissionProzent").innerHTML = EuropeGesamtProzent.toFixed(2) + "%";
    document.querySelector("#wachstumProzent").innerHTML = EuropeWachstumProzent.toFixed(2) + "%";
    document.querySelector("#wachstumAbsolut").innerHTML = EuropeWachstumAbsolut.toFixed(2) + " kg CO2";
    document.querySelector(".chart").setAttribute('style', 'height: 13.53%');
}
//NORTHAMERICA
function northamerica() {
    document.querySelector(".titleRegion").innerHTML = "Northamerica";
    document.querySelector("#emissionAbsolut").innerHTML = Namerika2018 + " kg CO2";
    document.querySelector("#emissionProzent").innerHTML = NamerikaGesamtProzent.toFixed(2) + "%";
    document.querySelector("#wachstumProzent").innerHTML = NamerikaWachstumProzent.toFixed(2) + "%";
    document.querySelector("#wachstumAbsolut").innerHTML = NamerikaWachstumAbsolut.toFixed(2) + " kg CO2";
    document.querySelector(".chart").setAttribute('style', 'height: 19.4%');
}
//ASIA
function asia() {
    document.querySelector(".titleRegion").innerHTML = "Asia";
    document.querySelector("#emissionAbsolut").innerHTML = Asia2018 + " kg CO2";
    document.querySelector("#emissionProzent").innerHTML = AsiaGesamtProzent.toFixed(2) + "%";
    document.querySelector("#wachstumProzent").innerHTML = AsiaWachstumProzent.toFixed(2) + "%";
    document.querySelector("#wachstumAbsolut").innerHTML = AsiaWachstumAbsolut.toFixed(2) + " kg CO2";
    document.querySelector(".chart").setAttribute('style', 'height: 52.3%');
}
//AUSTRALIA
function australia() {
    document.querySelector(".titleRegion").innerHTML = "Australia";
    document.querySelector("#emissionAbsolut").innerHTML = Australia2018 + " kg CO2";
    document.querySelector("#emissionProzent").innerHTML = AustraliaGesamtProzent.toFixed(2) + "%";
    document.querySelector("#wachstumProzent").innerHTML = AustraliaWachstumProzent.toFixed(2) + "%";
    document.querySelector("#wachstumAbsolut").innerHTML = AustraliaWachstumAbsolut.toFixed(2) + " kg CO2";
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