//Selectors 

const buttonsContainer = document.querySelector(".buttons-container");
const carHolders = document.querySelectorAll(".car-holder");

//Event listeners

buttonsContainer.addEventListener("click",showCars);

//Functions

function showCars(ev){
    const clickedButton = ev.target;

    carHolders.forEach(function(holder){
        if(clickedButton.className == "all-cars-button"){
            console.log("I am going to show you all cars");
        }

        else if(clickedButton.className == "hatchbacks-button"){
            console.log("I am going to show you all hatchback cars");
        }

        else if(clickedButton.className == "sedans-button"){
            console.log("I am going to show you all sedan cars");
        }

        else if(clickedButton.className == "coupes-button"){
            console.log("I am going to show you all coupes cars");
        }

        else if(clickedButton.className == "suvs-button"){
            console.log("I am going to show you all suvs cars");
        }

        else if(clickedButton.className == "bakkies-button"){
            console.log("I am going to show you all bakkies cars");
        }
    })
    
}
