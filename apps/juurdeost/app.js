const omahind = document.getElementById("omahind");
const arvhetkel = document.getElementById("arvhetkel");
const hetkehind = document.getElementById("hetkehind");
const arvpärast = document.getElementById("arvpärast");
const comission = document.getElementById("comission");
const submit = document.getElementById("submitbtn");
const result = document.getElementById("result");

function calculate() {
    let omahindData0 = document.getElementById("omahind").value;
    let arvhetkelData0 = document.getElementById("arvhetkel").value;
    let hetkehindData0 = document.getElementById("hetkehind").value;
    let arvpärastData0 = document.getElementById("arvpärast").value;
    let comissionData0 = document.getElementById("comission").value;

    let omahindData = Number(omahindData0);
    let arvhetkelData = Number(arvhetkelData0);
    let hetkehindData = Number(hetkehindData0);
    let arvpärastData = Number(arvpärastData0);
    let comissionData = Number(comissionData0);
    
            

            let res0 = omahindData * arvhetkelData;
                console.log(res0);

            let res1 = arvpärastData * hetkehindData;
                console.log(res1);

            let res2 = arvhetkelData + arvpärastData;
                console.log(res2);

            let res3 = res0 + res1;
                console.log(res3);

            let res4 = res3 + comissionData;
                console.log(res4);

            let res = res4 / res2;
                console.log(res); 


            result.innerHTML = res;
            result.style.display = "block";
           
            
}

function main() {
    submit.addEventListener("click", function () {
        calculate();
    })
}
main();