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
            holder.style.display = "flex";
        }

        else if(clickedButton.className == "sedans-button"){
            if(holder.classList[1] == "sedan"){
                holder.style.display = "flex";
            }

            else{
                holder.style.display = "none";
            }
        }

        else if(clickedButton.className == "hatchbacks-button"){
            if(holder.classList[1] == "hatchback"){
                holder.style.display = "flex";
            }

            else{
                holder.style.display = "none";
            }
        }

        else if(clickedButton.className == "coupes-button"){
            if(holder.classList[1] == "coupe"){
                holder.style.display = "flex";
            }

            else{
                holder.style.display = "none";
            }
        }

        else if(clickedButton.className == "suvs-button"){
            if(holder.classList[1] == "suv"){
                holder.style.display = "flex";
            }

            else{
                holder.style.display = "none";
            }
        }

        else if(clickedButton.className == "bakkies-button"){
            if(holder.classList[1] == "bakkie"){
                holder.style.display = "flex";
            }

            else{
                holder.style.display = "none";
            }
        }
    })
    
}
