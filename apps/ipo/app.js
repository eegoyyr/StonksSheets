const aktsiad = document.getElementById("aktsiad");
const nimiväärtus = document.getElementById("nimiväärtus");
const emission = document.getElementById("emission");
const hind = document.getElementById("hind");
const kasum = document.getElementById("kasum");
const emission2 = document.getElementById("emission2");
const submitbtn = document.getElementById("submitbtn");
const result1 = document.getElementById("result1");


function calculate() {
    let aktsiad0 = document.getElementById("aktsiad").value;
    let nimiväärtus0 = document.getElementById("nimiväärtus").value;
    let emission0 = document.getElementById("emission").value;
    let hind0 = document.getElementById("hind").value;
    let kasum0 = document.getElementById("kasum").value;
    let emission20 = document.getElementById("emission2").value;

    let aktsiadData = Number(aktsiad0);
    let nimiväärtusData = Number(nimiväärtus0);
    let emissionData = Number(emission0);
    let hindData = Number(hind0);
    let kasumData = Number(kasum0);
    let emission2Data = Number(emission20);

        let aktsiaKapitalRn = aktsiadData * nimiväärtusData;
        let aktsiaKapitalAfter = (emissionData * hindData) + (emission2Data * hindData);
        let aktsiadKokku = aktsiadData + emissionData + emission2Data;
        let aktsiaKapitalKokku = aktsiaKapitalRn + aktsiaKapitalAfter;
        let uueAktsiaHind = aktsiaKapitalKokku / aktsiadKokku;
        let kasumAktsiaKohta = kasumData / aktsiadKokku;
        let res = uueAktsiaHind / kasumAktsiaKohta;

            result1.style.display = "block";
            result1.innerHTML = res;
            // 2 354 125 ; 0.1 ; 130 785 ; 4.97 ; 394 364 ; 26785
}

function main() {
    submitbtn.addEventListener("click", function () {
        calculate();
    })
}
main();