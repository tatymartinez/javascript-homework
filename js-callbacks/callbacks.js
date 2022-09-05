
window.onload = function() {
    document.querySelector("#callback-btn")
        .addEventListener("click", threeSeconds()
    );
}

function threeSeconds () {
    console.log("Hello.")
    setTimeout(function() {  
        console.log("You are awesome!");
    }, 3000);
    console.log("Talk to you later.")
}

