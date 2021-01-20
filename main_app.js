//Selectors 

const buttonsContainer = document.querySelector(".buttons-container");
const carHolders = document.querySelectorAll(".car-holder");

//Event listeners

buttonsContainer.addEventListener("click",showCars);

//Functions

function showCars(ev){
    const clickedButton = ev.target;
    
    if(clickedButton.className == "all-cars-button"){
        console.log("All cars will be displayed");
    }

    else if(clickedButton.className == "hatchbacks-button"){
        console.log("hatchbacks will be displayed");
    }

    else if(clickedButton.className == "sedans-button"){
        console.log("sedans will be displayed");
    }

    else if(clickedButton.className == "coupes-button"){
        console.log("coupes will be displayed");
    }
    
    else if(clickedButton.className == "suvs-button"){
        console.log("suvs will be displayed");
    }

    else if(clickedButton.className == "bakkies-button"){
        console.log("bakkies will be displayed");
    }

}
