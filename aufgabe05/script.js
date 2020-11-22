//Gesamt
var gesamt2018 = 31116.5;
console.log('Die Gesamteission 2018 ' + gesamt2018.toFixed(2) + 'kg CO2');
//Africa
var Africa2008 = 1028;
var Africa2018 = 1235.5;
console.log('Die Emission von Afrika 2018 ist ' + Africa2018.toFixed(2) + 'kg CO2');
var prozentAfricaGes = ((Africa2018 / gesamt2018) * 100);
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + prozentAfricaGes.toFixed(2) + '%');
var wachstumAfrica = (((Africa2018 / Africa2008) - 1) * 100);
console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + wachstumAfrica.toFixed(2) + '% verändert');
var AfricaCO2 = (Africa2018 - Africa2008);
console.log('2018 im Vergleich zu 2008 sind das ' + AfricaCO2.toFixed(2) + 'kg CO2');
//SouthAmerica
var SouthAmerica2008 = 1132.6;
var SouthAmerica2018 = 1261.5;
console.log('Die Emission von Südamerika 2018 ist ' + SouthAmerica2018.toFixed(2) + 'kg CO2');
var prozentSouthAmericaGes = ((SouthAmerica2018 / gesamt2018) * 100);
console.log('Relativ zur Gesamtemission der Welt verursacht Südamerika damit ' + prozentSouthAmericaGes.toFixed(2) + '%');
var wachstumSouthAmerica = (((SouthAmerica2018 / SouthAmerica2008) - 1) * 100);
console.log('Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + wachstumSouthAmerica.toFixed(2) + '% verändert');
var SouthAmericaCO2 = (SouthAmerica2018 - SouthAmerica2008);
console.log('2018 im Vergleich zu 2008 sind das ' + SouthAmericaCO2.toFixed(2) + 'kg CO2');
//Europe
var Europe2008 = 4956.7;
var Europe2018 = 4209.3;
console.log('Die Emission von Europa 2018 ist ' + Europe2018.toFixed(2) + 'kg CO2');
var prozentEuropeGes = ((Europe2018 / gesamt2018) * 100);
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit ' + prozentEuropeGes.toFixed(2) + '%');
var wachstumEurope = (((Europe2018 / Europe2008) - 1) * 100);
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + wachstumEurope.toFixed(2) + '% verändert');
var EuropeCO2 = (Europe2018 - Europe2008);
console.log('2018 im Vergleich zu 2008 sind das ' + EuropeCO2.toFixed(2) + 'kg CO2');
//NorthAmerica
var NorthAmerica2008 = 6600.4;
var NorthAmerica2018 = 6035.6;
console.log('Die Emission von Nordamerika 2018 ist ' + NorthAmerica2018.toFixed(2) + 'kg CO2');
var prozentNorthAmericaGes = ((NorthAmerica2018 / gesamt2018) * 100);
console.log('Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ' + prozentNorthAmericaGes.toFixed(2) + '%');
var wachstumNorthAmerica = (((NorthAmerica2018 / NorthAmerica2008) - 1) * 100);
console.log('Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + wachstumNorthAmerica.toFixed(2) + '% verändert');
var NorthAmericaCO2 = (NorthAmerica2018 - NorthAmerica2008);
console.log('2018 im Vergleich zu 2008 sind das ' + NorthAmericaCO2.toFixed(2) + 'kg CO2');
//Asia
var Asia2008 = 12954.7;
var Asia2018 = 16274.1;
console.log('Die Emission von Asien 2018 ist ' + Asia2018.toFixed(2) + 'kg CO2');
var prozentAsiaGes = ((Asia2018 / gesamt2018) * 100);
console.log('Relativ zur Gesamtemission der Welt verursacht Asien damit ' + prozentAsiaGes.toFixed(2) + '%');
var wachstumAsia = (((Asia2018 / Asia2008) - 1) * 100);
console.log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' + wachstumAsia.toFixed(2) + '% verändert');
var AsiaCO2 = (Asia2018 - Asia2008);
console.log('2018 im Vergleich zu 2008 sind das ' + AsiaCO2.toFixed(2) + 'kg CO2');
//Australia
var Australia2008 = 1993;
var Australia2018 = 2100.5;
console.log('Die Emission von Australien 2018 ist ' + Australia2018.toFixed(2) + 'kg CO2');
var prozentAustraliaGes = ((Australia2018 / gesamt2018) * 100);
console.log('Relativ zur Gesamtemission der Welt verursacht Asien damit ' + prozentAustraliaGes.toFixed(2) + '%');
var wachstumAustralia = (((Australia2018 / Australia2008) - 1) * 100);
console.log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' + wachstumAustralia.toFixed(2) + '% verändert');
var AustraliaCO2 = (Australia2018 - Australia2008);
console.log('2018 im Vergleich zu 2008 sind das ' + AustraliaCO2.toFixed(2) + 'kg CO2');
var gesamtprobe = (Africa2018 + SouthAmerica2018 + Europe2018 + NorthAmerica2018 + Asia2018 + Australia2018);
console.log('Die Gesamtemission 2018 ist ' + gesamtprobe.toFixed(2) + 'kg CO2');
//# sourceMappingURL=script.js.map