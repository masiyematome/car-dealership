//Selectors 


/**Selectors for filter buttons and cards that display the cars **/
const buttonsContainer = document.querySelector(".buttons-container");
const buttons = document.querySelectorAll("button");
const carHolders = document.querySelectorAll(".car-holder");

/**Selctors for the modal that shows the full image of the displayed cars and all it's elements **/
const modal = document.querySelector(".modal");
const smallImages = document.querySelectorAll(".cars-display img");
const fullImage = document.querySelector(".full-image");
const imageCaption = document.querySelector(".image-caption");
const fullImageContainer = document.querySelector(".full-image-container");
const closeButton = document.querySelector(".close-button");

/**Selectors of the search bar **/
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");


//Event listeners

buttonsContainer.addEventListener("click", showCars);
searchButton.addEventListener("click",findSearched);

//Functions

/*A function that finds a searched item*/

function findSearched(e){

    if(searchInput.value === " "){
        alert("Please you have to input something");
    }

    else{
        carHolders.forEach(carHolder => {
            if(searchInput.value == "bmw" || searchInput.value == "BMW" || searchInput.value == "Bmw"){
                if(carHolder.classList.contains("bmw-g20") || carHolder.classList.contains("blue-x5")){
                    carHolder.style.display = "flex";
                }

                else{
                    carHolder.style.display = "none";
                }
            }

            if(searchInput.value == "audi" || searchInput.value == "AUDI" || searchInput.value == "Audi"){
                if(carHolder.classList.contains("audi-rs5") || carHolder.classList.contains("audi-rs3")){
                    carHolder.style.display = "flex";
                }

                else{
                    carHolder.style.display = "none";
                }
            }

            if(searchInput.value == "toyota" || searchInput.value == "TOYOTA" || searchInput.value == "Toyota"){
                if(carHolder.classList.contains("white-hilux")){
                    carHolder.style.display = "flex";
                }

                else{
                    carHolder.style.display = "none";
                }
            }

            if(searchInput.value == "toyota" || searchInput.value == "TOYOTA" || searchInput.value == "Toyota"){
                if(carHolder.classList.contains("white-hilux")){
                    carHolder.style.display = "flex";
                }

                else{
                    carHolder.style.display = "none";
                }
            }

            if(searchInput.value == "mercedes-benz" || searchInput.value == "Mercedes-benz" || searchInput.value == "MERCEDES-BENZ" || searchInput.value == "Mercedes-Benz"){
                if(carHolder.classList.contains("white-c63s") || carHolder.classList.contains("white-s63")){
                    carHolder.style.display = "flex";
                }

                else{
                    carHolder.style.display = "none";
                }
            }

            if(searchInput.value == "volkswagen" || searchInput.value == "Volkswagen" || searchInput.value == "VolksWagen" || searchInput.value == "VOLKSWAGEN"){
                if(carHolder.classList.contains("black-golf")){
                    carHolder.style.display = "flex";
                }

                else{
                    carHolder.style.display = "none";
                }
            }

            if(searchInput.value == "ford" || searchInput.value == "Ford" || searchInput.value == "FORD"){
                if(carHolder.classList.contains("blue-ranger")){
                    carHolder.style.display = "flex";
                }

                else{
                    carHolder.style.display = "none";
                }
            }

            
        })
    }

}

/*A function that views the full sized images of the displayed images*/

(function(){
    
    smallImages.forEach(smallImage => {
        smallImage.addEventListener("click",() =>{
            modal.classList.add("open");
            fullImageContainer.classList.add("open");
    
            const theFullImage = smallImage.getAttribute("src");
            fullImage.src = theFullImage;
    
            const captionText = smallImage.getAttribute("alt");
            imageCaption.innerText = captionText;
    
        })
    })
    
    modal.addEventListener("click",(event) =>{
        if(event.target.classList.contains("modal") || event.target.classList.contains("close-button")){
            modal.classList.remove("open");
            fullImageContainer.classList.remove("open");
            
        }
    })

})();

/*A function that shows the cars based on the filter button clicked*/

function showCars(ev) {

    const clickedButton = ev.target;

    buttons.forEach(button => {
        button.addEventListener("click", function(){
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        })
    })

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
