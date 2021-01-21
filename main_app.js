//Selectors 

const buttonsContainer = document.querySelector(".buttons-container");
const carHolders = document.querySelectorAll(".car-holder");

//Event listeners

buttonsContainer.addEventListener("click", showCars);

//Functions

function showCars(ev) {
    const clickedButton = ev.target;

    carHolders.forEach(function (holder) {

        switch (clickedButton.classList[0]) {
            
            case "all-cars-button":
                holder.style.display = "flex";
                break;

            case "sedans-button":
                
                if (holder.classList[1] == "sedan") {
                    holder.style.display = "flex"; 
                }

                else {
                    holder.style.display = "none";
                }

                break;

            case "hatchbacks-button":
                if (holder.classList[1] == "hatchback") {
                    holder.style.display = "flex";
                }

                else {
                    holder.style.display = "none";
                }

                break;

            case "coupes-button":
                if (holder.classList[1] == "coupe") {
                    holder.style.display = "flex";
                }

                else {
                    holder.style.display = "none";
                }

                break;

            case "suvs-button":
                if (holder.classList[1] == "suv") {
                    holder.style.display = "flex";
                }

                else {
                    holder.style.display = "none";
                }

                break;

            case "bakkies-button":
                if (holder.classList[1] == "bakkie") {
                    holder.style.display = "flex";
                }

                else {
                    holder.style.display = "none";
                }

                break;
        }
    })

}
