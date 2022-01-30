const aktsiateArv = document.getElementById("aktsiateArv");
const aktsiaHind = document.getElementById("aktsiaHind");
const dopEmission = document.getElementById("dopEmission");
const dopEmissionLisa = document.getElementById("dopEmissionLisa");
const uusHind = document.getElementById("uusHind");
const submit = document.getElementById("submitbtn");
const result1 = document.getElementById("result1");


function calculate() {
    let aktsiateArv0 = document.getElementById("aktsiateArv").value;
    let aktsiaHind0 = document.getElementById("aktsiaHind").value;
    let dopEmission0 = document.getElementById("dopEmission").value;
    let dopEmissionLisa0 = document.getElementById("dopEmissionLisa").value;
    let uusHind0 = document.getElementById("uusHind").value;

    let aktsiateArvData = Number(aktsiateArv0);
    let aktsiaHindData = Number(aktsiaHind0);
    let dopEmissionData = Number(dopEmission0);
    let dopEmissionLisaData = Number(dopEmissionLisa0);
    let uusHindData = Number(uusHind0);

        let aktsiaKapital1 = aktsiateArvData * aktsiaHindData;
        let vahearv = dopEmissionData + dopEmissionLisaData;
        let aktsiaKaptial2 = vahearv * uusHindData;
        let uusAktsiaKapital = aktsiaKapital1 + aktsiaKaptial2;
        let aktsiadKokku = aktsiateArvData + dopEmissionData + dopEmissionLisaData;
        
        let res1 = uusAktsiaKapital / aktsiadKokku;
             result1.style.display = "block";
             result1.innerHTML = (res1);
}

function main() {
    submit.addEventListener("click", function () {
        calculate();
    })
}
main();