//hvad starter js med?
window.addEventListener("load", startVises);

// Hvad skal i skrive for at skjule den div?

function startVises() {
    console.log("startVises");
    document.querySelector("#menuknap").addEventListener("click", clickMenuKnap);

}

function clickMenuKnap() {
    console.log("clickMenuKnap");



    document.querySelector("#menuknap").classList.add("hide");
    document.querySelector("#lukkeknap").classList.remove("hide");
    document.querySelector("#menu").classList.remove("hidden");

    // gør så menuen ikke ligger lige oven i knapperne
    document.querySelector("#menu").classList.remove("menudown");
    document.querySelector("#menu").classList.add("menufit");

    document.querySelector("#lukkeknap").addEventListener("click", clickMenuVoek);


}

function clickMenuVoek() {
    console.log("clickMenuVoek");
    document.querySelector("#lukkeknap").classList.add("hide");
    document.querySelector("#menuknap").classList.remove("hide");
    document.querySelector("#menu").classList.add("hidden");

    // gør så menuen ikke ligger lige oven i knapperne
    document.querySelector("#menu").classList.add("menudown");
    document.querySelector("#menu").classList.remove("menufit");

}
